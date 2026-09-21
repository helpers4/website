#!/usr/bin/env node

/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Script: generate-rust-docs.js
 *
 * Generates the Rust (`helpers4` crate) reference from its source, the way the crate is
 * published: no rustdoc JSON and no nightly toolchain, just the crate's own conventions —
 * `src/<module>/mod.rs` lists the public items with `pub use <file>::<Item>;`, each item is
 * declared in `src/<module>/<file>.rs` with its `///` documentation right above it.
 *
 * Output (all generated, never edited by hand):
 * - src/content/docs/rust/modules/index.md          module overview
 * - src/content/docs/rust/modules/<module>.md       one page per module
 * - src/content/docs/rust/reference/changelog.md    CHANGELOG.md of the crate
 * - public/rust/llms-full.txt                        every item in one machine-readable file
 * - src/data/versions.json                           the documented crate version
 *
 * The crate is read from RUST_REPO_PATH, defaulting to the sibling checkout ../rust. Anything the
 * parser cannot resolve is an error: a page that silently misses an item is worse than a red run.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const repoPath = path.resolve(process.env.RUST_REPO_PATH ?? path.join(rootDir, '..', 'rust'));
const docsDir = path.join(rootDir, 'src', 'content', 'docs', 'rust');
const modulesDir = path.join(docsDir, 'modules');
const referenceDir = path.join(docsDir, 'reference');
const llmsFullPath = path.join(rootDir, 'public', 'rust', 'llms-full.txt');
const versionsPath = path.join(rootDir, 'src', 'data', 'versions.json');

class ParseError extends Error {}

function fail(message) {
  throw new ParseError(message);
}

// ---------------------------------------------------------------------------------------------
// Reading the crate
// ---------------------------------------------------------------------------------------------

function read(relative) {
  const file = path.join(repoPath, relative);
  if (!fs.existsSync(file)) fail(`missing ${relative} in ${repoPath}`);
  return fs.readFileSync(file, 'utf-8');
}

function readCargo() {
  const toml = read('Cargo.toml');
  const version = toml.match(/^version = "([^"]+)"/m)?.[1];
  if (!version) fail('no version in Cargo.toml');
  const msrv = toml.match(/^rust-version = "([^"]+)"/m)?.[1];
  const features = toml.match(/^\[features\]\n([\s\S]*?)(?:\n\[|(?![\s\S]))/m)?.[1] ?? '';
  const names = [...features.matchAll(/^([a-z0-9_-]+) = \[[^\]]*\]$/gm)].map((m) => m[1]).filter((n) => n !== 'default');
  const defaults = toml.match(/^default = \[([^\]]*)\]/m)?.[1].match(/"([^"]+)"/g)?.map((s) => s.replaceAll('"', '')) ?? [];
  return { version, msrv, features: names, defaults };
}

/** Lines of a `///` (or `//!`) block, prefix removed. */
function stripPrefix(line, prefix) {
  return line.startsWith(`${prefix} `) ? line.slice(prefix.length + 1) : line.slice(prefix.length);
}

/** The `//!` module documentation at the top of a `mod.rs`. */
function moduleDoc(source) {
  return source
    .split('\n')
    .filter((line) => line.startsWith('//!'))
    .map((line) => stripPrefix(line, '//!'));
}

/** `pub use file::Item;` lines, in file order. */
function reexports(source) {
  return [...source.matchAll(/^pub use (\w+)::(\w+);$/gm)].map((m) => ({ file: m[1], name: m[2] }));
}

/** The `///` block directly above line `index`, skipping attributes. */
function docAbove(lines, index) {
  let i = index - 1;
  while (i >= 0 && lines[i].trim().startsWith('#[')) i -= 1;
  const doc = [];
  while (i >= 0 && lines[i].trim().startsWith('///')) {
    doc.unshift(stripPrefix(lines[i].trim(), '///'));
    i -= 1;
  }
  return doc;
}

/** Attributes worth showing to a reader: `#[non_exhaustive]`, not `#[must_use]` or derives. */
function shownAttributes(lines, index) {
  const shown = [];
  let i = index - 1;
  while (i >= 0 && lines[i].trim().startsWith('#[')) {
    if (/non_exhaustive/.test(lines[i])) shown.unshift(lines[i].trim());
    i -= 1;
  }
  return shown;
}

/** A signature from `start` up to the line that opens the body (`{`) or ends the item (`;`). */
function signatureFrom(lines, start, indent) {
  const out = [];
  for (let i = start; i < lines.length; i += 1) {
    const line = lines[i].slice(indent);
    if (/\{$/.test(line) || /;$/.test(line)) {
      out.push(line.replace(/\s*\{$/, '').replace(/;$/, ''));
      break;
    }
    out.push(line);
  }
  return out.join('\n');
}

function blockEnd(lines, start) {
  for (let i = start + 1; i < lines.length; i += 1) if (lines[i] === '}') return i;
  return fail(`unterminated item starting at line ${start + 1}`);
}

function parseFn(lines, index, indent) {
  const line = lines[index].slice(indent);
  const name = line.match(/^pub fn (\w+)/)?.[1];
  return { kind: 'fn', name, doc: docAbove(lines, index), signature: signatureFrom(lines, index, indent) };
}

/** The public methods of the `impl` blocks of a type, in source order. */
function methodsOf(lines, typeName) {
  const methods = [];
  const header = new RegExp(`^impl(<[^{]*>)?\\s+${typeName}(<[^{]*>)?\\s*\\{$`);
  for (let i = 0; i < lines.length; i += 1) {
    if (!header.test(lines[i])) continue;
    const end = blockEnd(lines, i);
    for (let j = i + 1; j < end; j += 1) {
      if (/^ {4}pub fn \w+/.test(lines[j])) methods.push(parseFn(lines, j, 4));
    }
  }
  return methods;
}

function parseItem(source, name, module) {
  const lines = source.split('\n');
  const index = lines.findIndex((line) => new RegExp(`^pub (fn|struct|enum|type) ${name}\\b`).test(line));
  if (index < 0) fail(`${module}: no public declaration of \`${name}\``);
  const kind = lines[index].match(/^pub (fn|struct|enum|type)/)[1];
  const doc = docAbove(lines, index);
  if (doc.length === 0) fail(`${module}::${name} has no documentation`);

  if (kind === 'fn') return { ...parseFn(lines, index, 0), module };
  if (kind === 'type') {
    return { kind, name, module, doc, signature: signatureFrom(lines, index, 0), methods: [] };
  }
  if (kind === 'enum') {
    const end = blockEnd(lines, index);
    const body = lines.slice(index, end + 1).join('\n');
    const attributes = shownAttributes(lines, index);
    return { kind, name, module, doc, signature: [...attributes, body].join('\n'), methods: methodsOf(lines, name) };
  }
  // struct: the fields are private, so only the header is part of the API
  const header = signatureFrom(lines, index, 0).replace(/\s*\{[\s\S]*$/, '');
  return {
    kind,
    name,
    module,
    doc,
    signature: `${header} { /* private fields */ }`,
    methods: methodsOf(lines, name),
  };
}

function parseModule(name, features) {
  const source = read(`src/${name}/mod.rs`);
  const doc = moduleDoc(source);
  if (doc.length === 0) fail(`src/${name}/mod.rs has no module documentation`);
  const exports = reexports(source);
  if (exports.length === 0) fail(`src/${name}/mod.rs re-exports nothing`);
  if (!features.includes(name)) fail(`module \`${name}\` has no Cargo feature of the same name`);
  const items = exports.map(({ file, name: item }) => parseItem(read(`src/${name}/${file}.rs`), item, name));
  return { name, doc, items };
}

function readModules(features) {
  const dirs = fs
    .readdirSync(path.join(repoPath, 'src'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(repoPath, 'src', d.name, 'mod.rs')))
    .map((d) => d.name)
    .sort();
  const missing = features.filter((f) => !dirs.includes(f));
  if (missing.length > 0) fail(`Cargo features without a module: ${missing.join(', ')}`);
  return dirs.map((name) => parseModule(name, features));
}

// ---------------------------------------------------------------------------------------------
// Markdown
// ---------------------------------------------------------------------------------------------

/** GitHub-style heading slug, as Starlight generates it. */
function slug(text) {
  return text.toLowerCase().replaceAll(' ', '-').replace(/[^a-z0-9_-]/g, '');
}

function firstSentence(doc) {
  const paragraph = [];
  for (const line of doc) {
    if (line.trim() === '') break;
    paragraph.push(line.trim());
  }
  const text = paragraph.join(' ');
  const cut = text.search(/\.(\s|$)/);
  return (cut >= 0 ? text.slice(0, cut + 1) : text).trim();
}

/**
 * Knows every documented name so that intra-doc links (`[`name`]`, `[`name`](super::name)`,
 * `[`name`](Self::name)`) become real anchors, or plain code when the target is not ours (std
 * types such as `IpAddr`).
 */
function makeLinker(modules) {
  const home = new Map();
  for (const m of modules) for (const item of m.items) home.set(item.name, m.name);
  return (currentModule, mode) => (text, target) => {
    // `Self::method` is a method of the type documented on this very page.
    if (target?.startsWith('Self::')) {
      const method = target.slice('Self::'.length);
      return mode === 'text' ? `\`${text}\`` : `[\`${text}\`](#${slug(method)})`;
    }
    // `Type::method` and `Type::Variant` point at the type's own section.
    const segments = (target ?? text).split('::');
    const name = [segments.at(-1), segments[0]].find((candidate) => home.has(candidate)) ?? segments.at(-1);
    const code = `\`${text}\``;
    if (mode === 'text') return code;
    const owner = home.get(name);
    if (!owner) return code;
    return owner === currentModule ? `[${code}](#${slug(name)})` : `[${code}](../${owner}/#${slug(name)})`;
  };
}

/**
 * rustdoc Markdown to site Markdown: demote headings under the item heading, hide the `# `
 * lines of doctests, tag bare fences as Rust and resolve intra-doc links.
 */
function convertDoc(doc, link, { headingLevel }) {
  const out = [];
  let inFence = false;
  for (const line of doc) {
    const fence = line.match(/^```(.*)$/);
    if (fence) {
      inFence = !inFence;
      out.push(inFence ? `\`\`\`${fence[1].trim() === '' ? 'rust' : fence[1].trim()}` : '```');
      continue;
    }
    if (inFence) {
      if (line === '#' || line.startsWith('# ')) continue; // hidden doctest line
      out.push(line.startsWith('##') ? line.slice(1) : line); // `##` escapes a literal `#`
      continue;
    }
    const heading = line.match(/^(#{1,6}) (.*)$/);
    if (heading) {
      out.push(`${'#'.repeat(headingLevel)} ${heading[2]}`);
      continue;
    }
    out.push(
      line
        .replace(/\[`([^`]+)`\]\(([\w:]+)\)/g, (_, text, target) => link(text, target))
        .replace(/\[`([^`]+)`\](?!\()/g, (_, text) => link(text)),
    );
  }
  return out.join('\n').trim();
}

function frontmatter(fields) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'object') {
      lines.push(`${key}:`);
      for (const [k, v] of Object.entries(value)) lines.push(`  ${k}: ${JSON.stringify(v)}`);
    } else {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    }
  }
  lines.push('---', '');
  return `${lines.join('\n')}\n`;
}

function itemSection(item, link, cargo) {
  const parts = [`## \`${item.name}\``, '', '```rust', item.signature, '```', ''];
  parts.push(convertDoc(item.doc, link, { headingLevel: 3 }), '');
  if (item.methods?.length > 0) {
    parts.push('### Methods', '');
    for (const method of item.methods) {
      parts.push(`#### \`${method.name}\``, '', '```rust', method.signature, '```', '');
      parts.push(convertDoc(method.doc, link, { headingLevel: 5 }), '');
    }
  }
  return parts.join('\n');
}

function modulePage(mod, index, linker, cargo) {
  const link = linker(mod.name, 'page');
  const description = firstSentence(mod.doc).replace(/`/g, '');
  const summary = mod.items
    .map((item) => `| [\`${item.name}\`](#${slug(item.name)}) | ${firstSentence(item.doc).replaceAll('|', '\\|').replace(/\[`([^`]+)`\]\([\w:]+\)|\[`([^`]+)`\]/g, (_, a, b) => `\`${a ?? b}\``)} |`)
    .join('\n');
  const enabled = cargo.defaults.includes(mod.name) ? 'enabled by default' : 'opt-in';
  return (
    frontmatter({ title: mod.name, description, sidebar: { order: index + 1 } }) +
    [
      convertDoc(mod.doc, link, { headingLevel: 2 }),
      '',
      `Cargo feature \`${mod.name}\` (${enabled}) · import path \`helpers4::${mod.name}\``,
      '',
      '| Item | What it does |',
      '| --- | --- |',
      summary,
      '',
      mod.items.map((item) => itemSection(item, link, cargo)).join('\n'),
    ].join('\n') +
    '\n'
  );
}

function overviewPage(modules, cargo) {
  const rows = modules
    .map((m) => `| [\`${m.name}\`](./${m.name}/) | ${firstSentence(m.doc).replaceAll('|', '\\|').replace(/`/g, '')} | ${m.items.length} |`)
    .join('\n');
  return (
    frontmatter({
      title: 'Modules',
      description: `The ${modules.length} modules of the helpers4 Rust crate.`,
      sidebar: { order: 0, label: 'Overview' },
    }) +
    [
      `The \`helpers4\` crate has ${modules.length} modules, each behind a Cargo feature of the same name. All of them are enabled by default; take only what you use with:`,
      '',
      '```toml',
      '[dependencies]',
      'helpers4 = { version = "0", default-features = false, features = ["string", "hex"] }',
      '```',
      '',
      '| Module | What it covers | Items |',
      '| --- | --- | --- |',
      rows,
      '',
      'Import through the module path (`helpers4::string::capitalize`): names repeat across modules on purpose, so never glob-import a module.',
      '',
      `Documented version: **${cargo.version}**${cargo.msrv ? `. Minimum supported Rust version: **${cargo.msrv}**` : ''}.`,
    ].join('\n') +
    '\n'
  );
}

function changelogPage() {
  let content = read('CHANGELOG.md').replace(/^<!--[\s\S]*?-->\n\n?/, '');
  content = content.replace(/^# .+\n+/, ''); // Starlight renders the frontmatter title as the H1
  return frontmatter({ title: 'Changelog', sidebar: { order: 2 } }) + content.trimEnd() + '\n';
}

function llmsFull(modules, linker, cargo) {
  const out = [
    `# helpers4 (Rust) — full reference, version ${cargo.version}`,
    '',
    '> Every public item of the `helpers4` crate with its signature, documentation and examples.',
    '> The examples are doctests that run in the crate\'s CI: treat them as verified usage.',
    '> Import through the module path; names repeat across modules on purpose.',
    '',
  ];
  for (const mod of modules) {
    const link = linker(mod.name, 'text');
    out.push(`## Module \`${mod.name}\` (Cargo feature \`${mod.name}\`)`, '', convertDoc(mod.doc, link, { headingLevel: 3 }), '');
    for (const item of mod.items) {
      out.push(`### ${mod.name}::${item.name}`, '', '```rust', item.signature, '```', '', convertDoc(item.doc, link, { headingLevel: 4 }), '');
      for (const method of item.methods ?? []) {
        out.push(`#### ${item.name}::${method.name}`, '', '```rust', method.signature, '```', '', convertDoc(method.doc, link, { headingLevel: 5 }), '');
      }
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

// ---------------------------------------------------------------------------------------------
// Writing
// ---------------------------------------------------------------------------------------------

function writeFile(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function updateVersions(version) {
  const versions = JSON.parse(fs.readFileSync(versionsPath, 'utf-8'));
  const entry = versions.rust?.find((v) => v.role === 'latest');
  if (!entry) fail('src/data/versions.json has no "rust" latest entry');
  entry.version = version;
  fs.writeFileSync(versionsPath, `${JSON.stringify(versions, null, 2)}\n`);
}

function main() {
  console.log('📚 Generating Rust documentation...\n');
  if (!fs.existsSync(repoPath)) fail(`the rust repo is not at ${repoPath} (set RUST_REPO_PATH)`);

  const cargo = readCargo();
  const modules = readModules(cargo.features);
  const linker = makeLinker(modules);

  // Regenerate the whole generated directories: a removed module must not leave a stale page.
  fs.rmSync(modulesDir, { recursive: true, force: true });
  writeFile(path.join(modulesDir, 'index.md'), overviewPage(modules, cargo));
  modules.forEach((mod, index) => {
    writeFile(path.join(modulesDir, `${mod.name}.md`), modulePage(mod, index, linker, cargo));
    console.log(`  ✓ ${mod.name} (${mod.items.length} items)`);
  });
  writeFile(path.join(referenceDir, 'changelog.md'), changelogPage());
  writeFile(llmsFullPath, llmsFull(modules, linker, cargo));
  updateVersions(cargo.version);

  const total = modules.reduce((n, m) => n + m.items.length, 0);
  console.log(`\n✅ ${modules.length} modules, ${total} items, version ${cargo.version}`);
}

try {
  main();
} catch (error) {
  console.error(`❌ ${error instanceof ParseError ? error.message : error.stack}`);
  process.exit(1);
}
