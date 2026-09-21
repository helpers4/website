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
 * - src/content/docs/rust/modules/index.md                overview of the modules and their features
 * - src/content/docs/rust/modules/<module>/index.md       one overview page per module
 * - src/content/docs/rust/modules/<module>/<item>.md      one page per public function or type
 * - src/content/docs/rust/reference/changelog.md          CHANGELOG.md of the crate
 * - src/content/docs/rust/reference/contributing.md       CONTRIBUTING.md of the crate
 * - src/content/docs/rust/reference/naming-conflicts.md  names that exist in more than one module
 * - src/content/docs/rust/legal/open-source-libraries.md  the crate's dependencies, from Cargo.toml
 * - public/rust/llms-full.txt                              every item in one machine-readable file
 * - src/data/versions.json                                 the documented crate version
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
const legalDir = path.join(docsDir, 'legal');
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
  return { kind: 'fn', name, doc: docAbove(lines, index), signature: signatureFrom(lines, index, indent), line: index + 1 };
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

function parseItem(source, name, module, file) {
  const lines = source.split('\n');
  const index = lines.findIndex((line) => new RegExp(`^pub (fn|struct|enum|type) ${name}\\b`).test(line));
  if (index < 0) fail(`${module}: no public declaration of \`${name}\``);
  const kind = lines[index].match(/^pub (fn|struct|enum|type)/)[1];
  const doc = docAbove(lines, index);
  if (doc.length === 0) fail(`${module}::${name} has no documentation`);

  if (kind === 'fn') return { ...parseFn(lines, index, 0), module, file };
  if (kind === 'type') {
    return { kind, name, module, file, line: index + 1, doc, signature: signatureFrom(lines, index, 0), methods: [] };
  }
  if (kind === 'enum') {
    const end = blockEnd(lines, index);
    const body = lines.slice(index, end + 1).join('\n');
    const attributes = shownAttributes(lines, index);
    return { kind, name, module, file, line: index + 1, doc, signature: [...attributes, body].join('\n'), methods: methodsOf(lines, name) };
  }
  // struct: the fields are private, so only the header is part of the API
  const header = signatureFrom(lines, index, 0).replace(/\s*\{[\s\S]*$/, '');
  return {
    kind,
    name,
    module,
    file,
    line: index + 1,
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
  const items = exports.map(({ file, name: item }) => parseItem(read(`src/${name}/${file}.rs`), item, name, file));
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

const REPO_URL = 'https://github.com/helpers4/rust';

/** Sidebar label of the overview pages: the mark tells them apart from the helper pages at a glance. */
const OVERVIEW_LABEL = '≡ Overview';

/** Shown while the crate is at 0.x: the module split and the checks are still moving. */
const PRE_1_NOTICE = [
  ':::caution[Version 0: expect changes]',
  'While the crate is at version `0.x`:',
  '',
  '- **The split into modules, and so into Cargo features, may change.** A helper can move to another module — and so to another feature to enable — from one release to the next.',
  "- **The code and security verification will keep improving.** More checks (fuzzing and static analysis, for instance) are planned, and each helper's page says what it guarantees and what it does not.",
  '',
  'Pin the exact version and read the [changelog](/rust/reference/changelog/) before upgrading.',
  ':::',
].join('\n');

const isPreOne = (cargo) => cargo.version.startsWith('0.');

/** GitHub-style heading slug, as Starlight generates it. */
function slug(text) {
  return text.toLowerCase().replaceAll(' ', '-').replace(/[^a-z0-9_-]/g, '');
}

/** File name and URL segment of an item's own page: `ExpiringMap` -> `expiringmap`. */
function pageSlug(name) {
  return name.toLowerCase();
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

/** Intra-doc links flattened to plain code, keeping the code formatting: for table cells and lists. */
function inline(text) {
  return text.replace(/\[`([^`]+)`\]\([\w:]+\)|\[`([^`]+)`\]/g, (_, a, b) => `\`${a ?? b}\``);
}

/** Links and backticks removed, for places that only take plain text (frontmatter descriptions). */
function plain(text) {
  return text.replace(/\[`([^`]+)`\]\([\w:]+\)|\[`([^`]+)`\]/g, (_, a, b) => a ?? b).replace(/`/g, '');
}

/** Splits rustdoc lines into the introduction and its `# Title` sections. */
function splitSections(doc) {
  const intro = [];
  const sections = [];
  let current = null;
  let inFence = false;
  for (const line of doc) {
    if (/^```/.test(line)) inFence = !inFence;
    const heading = !inFence && line.match(/^# (.+)$/);
    if (heading) {
      current = { title: heading[1].trim(), lines: [] };
      sections.push(current);
      continue;
    }
    (current ? current.lines : intro).push(line);
  }
  return { intro, sections };
}

/**
 * Knows every documented item so that intra-doc links (`[`name`]`, `[`name`](super::name)`,
 * `[`Type::method`](Self::method)`) become links to the item's page, or plain code when the
 * target is not ours (std types such as `IpAddr`). `page` says where the link is written from,
 * because the pages sit at different depths: `{ module, kind: 'item' | 'module' | 'overview' }`.
 */
function makeLinker(modules) {
  const home = new Map();
  for (const m of modules) for (const item of m.items) home.set(item.name, m.name);
  return (page, mode) => (text, target) => {
    const code = `\`${text}\``;
    // `Self::method` is a method of the type documented on this very page.
    if (target?.startsWith('Self::')) {
      return mode === 'text' ? code : `[${code}](#${slug(target.slice('Self::'.length))})`;
    }
    if (mode === 'text') return code;
    // `Type::method` and `Type::Variant` point at the type's own page.
    const segments = (target ?? text).split('::');
    const name = [segments.at(-1), segments[0]].find((candidate) => home.has(candidate)) ?? segments.at(-1);
    const owner = home.get(name);
    if (!owner) return code;
    return `[${code}](/rust/modules/${owner}/${pageSlug(name)}/)`;
  };
}

/**
 * rustdoc Markdown to site Markdown: hide the `# ` lines of doctests, tag bare fences as Rust and
 * resolve intra-doc links. Headings never reach here: `splitSections` took them out.
 */
function convertDoc(doc, link) {
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

// ---------------------------------------------------------------------------------------------
// Signatures: parameters and return type
// ---------------------------------------------------------------------------------------------

/** Splits on the commas that are not inside `<>`, `()`, `[]` or `{}`. */
function splitTopLevel(text) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const ch of text) {
    if ('<([{'.includes(ch)) depth += 1;
    else if ('>)]}'.includes(ch) && !(ch === '>' && current.endsWith('-'))) depth -= 1;
    if (ch === ',' && depth === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

/** `{ params: [{ name, type }], returns }` of a function signature. */
function parseSignature(signature, name) {
  const flat = signature.replace(/\s+/g, ' ');
  let i = flat.indexOf(`fn ${name}`) + `fn ${name}`.length;
  let depth = 0;
  for (; i < flat.length; i += 1) {
    if (flat[i] === '<') depth += 1;
    else if (flat[i] === '>' && flat[i - 1] !== '-') depth -= 1;
    else if (flat[i] === '(' && depth === 0) break;
  }
  let close = i;
  for (let d = 0; close < flat.length; close += 1) {
    if (flat[close] === '(') d += 1;
    if (flat[close] === ')' && (d -= 1) === 0) break;
  }
  const params = splitTopLevel(flat.slice(i + 1, close))
    .filter((p) => !/^(&(mut )?)?self\b/.test(p))
    .map((p) => {
      const at = p.indexOf(':');
      return { name: p.slice(0, at).replace(/^mut /, '').trim(), type: p.slice(at + 1).trim() };
    });
  const returns = flat.slice(close + 1).match(/^\s*->\s*(.+?)(?:\s+where\b.*)?$/)?.[1] ?? '()';
  return { params, returns: returns.trim() };
}

/** Descriptions from an optional `# Arguments` section: "- `name` - what it is". */
function argumentDescriptions(sections) {
  const map = new Map();
  const section = sections.find((s) => s.title === 'Arguments');
  let last = null;
  for (const line of section?.lines ?? []) {
    const bullet = line.match(/^[-*]\s+`([^`]+)`\s*[:–—-]?\s*(.*)$/);
    if (bullet) {
      last = bullet[1];
      map.set(last, bullet[2].trim());
    } else if (last && line.trim() !== '') {
      map.set(last, `${map.get(last)} ${line.trim()}`.trim());
    }
  }
  return map;
}

function cell(text) {
  return text.replaceAll('|', '\\|');
}

// ---------------------------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------------------------

function installBlock(module, cargo) {
  const status = cargo.defaults.includes(module) ? 'enabled by default' : 'opt-in';
  return [
    `Cargo feature \`${module}\` (${status}). To compile only this module:`,
    '',
    '```sh',
    `cargo add helpers4 --no-default-features --features ${module}`,
    '```',
    '',
    'or in `Cargo.toml`:',
    '',
    '```toml',
    '[dependencies]',
    `helpers4 = { version = "${cargo.version}", default-features = false, features = ["${module}"] }`,
    '```',
  ].join('\n');
}

function parametersTable(params, descriptions) {
  if (params.length === 0) return '';
  // The Description column only appears when the source documents its parameters (`# Arguments`).
  if (descriptions.size === 0) {
    return ['| Parameter | Type |', '| --- | --- |', ...params.map((p) => `| \`${p.name}\` | \`${cell(p.type)}\` |`)].join('\n');
  }
  const rows = params.map((p) => `| \`${p.name}\` | \`${cell(p.type)}\` | ${cell(descriptions.get(p.name) ?? '')} |`);
  return ['| Parameter | Type | Description |', '| --- | --- | --- |', ...rows].join('\n');
}

const KNOWN_SECTIONS = new Set(['Arguments', 'Returns', 'Errors', 'Panics', 'Examples']);

/**
 * The body shared by function pages and by the methods of a type page: signature, parameters,
 * returns, errors, panics, examples and any other section, at heading level `level`.
 * `titled` false (methods) uses bold labels instead of headings, to keep the table of contents short.
 */
function callableBody(fn, link, { level, cargo }) {
  const { intro, sections } = splitSections(fn.doc);
  const { params, returns } = parseSignature(fn.signature, fn.name);
  const descriptions = argumentDescriptions(sections);
  const heading = (title) => (level === 0 ? `**${title}**` : `${'#'.repeat(level)} ${title}`);
  const out = [];
  const returnsSection = sections.find((s) => s.title === 'Returns');
  const returnsText = returnsSection ? convertDoc(returnsSection.lines, link) : '';
  return {
    intro: convertDoc(intro, link),
    signature: fn.signature,
    render(withSignature) {
      if (withSignature) out.push(heading('Signature'), '', '```rust', fn.signature, '```', '');
      if (params.length > 0) out.push(heading('Parameters'), '', parametersTable(params, descriptions), '');
      const hint = !returnsText && level === 2 && returns.startsWith('Result<') && sections.some((s) => s.title === 'Errors') ? ' — `Ok` on success, otherwise an `Err`: see [Errors](#errors).' : '';
      out.push(heading('Returns'), '', `\`${returns}\`${returnsText ? ` — ${returnsText}` : hint}`, '');
      for (const title of ['Errors', 'Panics']) {
        const section = sections.find((s) => s.title === title);
        if (section) out.push(heading(title), '', convertDoc(section.lines, link), '');
      }
      const examples = sections.find((s) => s.title === 'Examples');
      if (examples) out.push(heading('Examples'), '', convertDoc(examples.lines, link), '');
      for (const section of sections.filter((s) => !KNOWN_SECTIONS.has(s.title))) {
        out.push(heading(section.title), '', convertDoc(section.lines, link), '');
      }
      return out.join('\n');
    },
  };
}

function importBlock(item, cargo) {
  return [`## Import`, '', '```rust', `use helpers4::${item.module}::${item.name};`, '```', '', installBlock(item.module, cargo), ''].join('\n');
}

function sourceBlock(item, cargo) {
  const file = `src/${item.module}/${item.file}.rs`;
  return ['## Source', '', `[${file}](${REPO_URL}/blob/v${cargo.version}/${file}#L${item.line})`, ''].join('\n');
}

function itemPage(mod, item, linker, cargo) {
  const link = linker({ module: mod.name, kind: 'item' }, 'page');
  const description = plain(firstSentence(item.doc));
  const head = frontmatter({ title: item.name, description, sidebar: { label: item.name } });
  const out = [];
  if (item.kind === 'fn') {
    const body = callableBody(item, link, { level: 2, cargo });
    out.push(body.intro, '', importBlock(item, cargo), body.render(true));
  } else {
    const { intro, sections } = splitSections(item.doc);
    out.push(convertDoc(intro, link), '', importBlock(item, cargo));
    out.push('## Definition', '', '```rust', item.signature, '```', '');
    for (const section of sections) out.push(`## ${section.title}`, '', convertDoc(section.lines, link), '');
    if (item.methods.length > 0) {
      out.push('## Methods', '');
      for (const method of item.methods) {
        const body = callableBody(method, link, { level: 0, cargo });
        out.push(`### \`${method.name}\``, '', '```rust', method.signature, '```', '', body.intro, '', body.render(false));
      }
    }
  }
  out.push(sourceBlock(item, cargo));
  return head + out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

function modulePage(mod, index, linker, cargo) {
  const link = linker({ module: mod.name, kind: 'module' }, 'page');
  const rows = mod.items
    .map((item) => `| [\`${item.name}\`](/rust/modules/${mod.name}/${pageSlug(item.name)}/) | ${cell(inline(firstSentence(item.doc)))} |`)
    .join('\n');
  return (
    frontmatter({
      title: mod.name,
      description: plain(firstSentence(mod.doc)),
      sidebar: { label: OVERVIEW_LABEL, order: 0 },
    }) +
    [
      convertDoc(mod.doc, link),
      '',
      '## Install',
      '',
      installBlock(mod.name, cargo),
      '',
      `Import path: \`helpers4::${mod.name}\`.`,
      '',
      '## Items',
      '',
      '| Item | What it does |',
      '| --- | --- |',
      rows,
    ].join('\n') +
    '\n'
  );
}

function overviewPage(modules, cargo) {
  const rows = modules
    .map((m) => `| [\`${m.name}\`](/rust/modules/${m.name}/) | \`${m.name}\` | ${cell(inline(firstSentence(m.doc)))} | ${m.items.length} |`)
    .join('\n');
  return (
    frontmatter({
      title: 'Modules',
      description: `The ${modules.length} modules of the helpers4 Rust crate.`,
      sidebar: { order: 0, label: OVERVIEW_LABEL },
    }) +
    [
      ...(isPreOne(cargo) ? [PRE_1_NOTICE, ''] : []),
      `The \`helpers4\` crate is organised in ${modules.length} modules. **Each module is a Cargo feature of the same name**, and all of them are enabled by default (\`cargo add helpers4\`).`,
      '',
      '## Install only what you use',
      '',
      'Turn the default features off and name the modules you want:',
      '',
      '```sh',
      'cargo add helpers4 --no-default-features --features string,hex',
      '```',
      '',
      'or in `Cargo.toml`:',
      '',
      '```toml',
      '[dependencies]',
      `helpers4 = { version = "${cargo.version}", default-features = false, features = ["string", "hex"] }`,
      '```',
      '',
      '## Modules',
      '',
      '| Module | Cargo feature | What it covers | Items |',
      '| --- | --- | --- | --- |',
      rows,
      '',
      'Import through the module path (`helpers4::string::capitalize`): names can repeat across modules on purpose, so never glob-import a module.',
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

/** CONTRIBUTING.md with its relative links pointed at the repository at the release tag. */
function contributingPage(cargo) {
  let content = read('CONTRIBUTING.md').replace(/^<!--[\s\S]*?-->\n\n?/, '').replace(/^# .+\n+/, '');
  content = content.replace(/\]\((?!https?:|#|mailto:)([^)]+)\)/g, (_, target) => `](${REPO_URL}/blob/v${cargo.version}/${target.replace(/^\.\//, '')})`);
  return frontmatter({ title: 'Contributing', sidebar: { order: 3 } }) + content.trimEnd() + '\n';
}

function dependencyList(toml, section) {
  const body = toml.match(new RegExp(`^\\[${section}\\]\\n([\\s\\S]*?)(?:\\n\\[|(?![\\s\\S]))`, 'm'))?.[1] ?? '';
  return [...body.matchAll(/^([a-z0-9_-]+)\s*=\s*(?:"([^"]+)"|\{[^}]*version\s*=\s*"([^"]+)"[^}]*\})/gm)].map((m) => ({ name: m[1], version: m[2] ?? m[3] }));
}

function librariesPage() {
  const toml = read('Cargo.toml');
  const runtime = dependencyList(toml, 'dependencies');
  const dev = dependencyList(toml, 'dev-dependencies');
  const list = (deps) => deps.map((d) => `- [\`${d.name}\`](https://crates.io/crates/${d.name}) \`${d.version}\``).join('\n');
  return (
    frontmatter({ title: 'Open-source libraries', sidebar: { label: 'Open-source libraries' } }) +
    [
      '## Runtime dependencies',
      '',
      runtime.length === 0
        ? 'The `helpers4` crate has **no third-party runtime dependencies**: nothing but the Rust standard library ends up in your build. A module that needs one in the future gets its own Cargo feature, and the dependency is optional.'
        : `These crates are compiled into your build:\n\n${list(runtime)}`,
      '',
      '## Development dependencies',
      '',
      'Used to test and benchmark the crate. They are **not** part of what you download when you depend on `helpers4`.',
      '',
      list(dev),
    ].join('\n') +
    '\n'
  );
}

/** Which public names exist in more than one module: generated, so it is always accurate. */
function namingPage(modules) {
  const byName = new Map();
  for (const mod of modules) {
    for (const item of mod.items) byName.set(item.name, [...(byName.get(item.name) ?? []), mod.name]);
  }
  const conflicts = [...byName].filter(([, owners]) => owners.length > 1).sort(([a], [b]) => a.localeCompare(b));
  const table =
    conflicts.length === 0
      ? 'No two public items share a name yet. The rule below applies as soon as one does.'
      : [
          '| Item | Modules |',
          '| --- | --- |',
          ...conflicts.map(([name, owners]) => `| \`${name}\` | ${owners.map((o) => `[\`${o}\`](/rust/modules/${o}/${pageSlug(name)}/)`).join(', ')} |`),
        ].join('\n');
  return (
    frontmatter({
      title: 'Names and imports',
      description: 'The same name can exist in several modules. This page explains how to import them.',
      sidebar: { label: 'Names and imports', order: 4 },
    }) +
    [
      'helpers4 is one crate with one module per category. A deliberate consequence is that **the same function name can exist in several modules** when the operation makes sense for different kinds of data: merging them into one generic function would make the types less precise and the behavior harder to predict.',
      '',
      '## Names that exist in more than one module',
      '',
      '*Generated from the documented version, so it always matches it.*',
      '',
      table,
      '',
      '## Importing',
      '',
      'Import through the module path, and do not glob-import a module (`use helpers4::string::*;`): the next name collision would then be yours to debug.',
      '',
      '```rust',
      'use helpers4::string::capitalize;',
      '',
      'assert_eq!(capitalize("hello"), "Hello");',
      '```',
      '',
      '## Resolving a conflict',
      '',
      'When you need two helpers with the same name in one file, rename at the import site with `as`, suffixing the module name so the origin stays visible:',
      '',
      '```rust',
      'use helpers4::string::truncate as truncate_string;',
      '',
      'assert_eq!(truncate_string("A very long title", 10, "..."), "A very ...");',
      '```',
      '',
      'The same applies to a name that also exists in the standard library or in another crate you use.',
    ].join('\n') +
    '\n'
  );
}

function llmsFull(modules, linker, cargo) {
  const out = [
    `# helpers4 (Rust) — full reference, version ${cargo.version}`,
    '',
    '> Every public item of the `helpers4` crate with its signature, documentation and examples.',
    "> The examples are doctests that run in the crate's CI: treat them as verified usage.",
    '> Import through the module path; names repeat across modules on purpose.',
    '> Each module is a Cargo feature of the same name (`cargo add helpers4 --no-default-features --features <module>`).',
    ...(isPreOne(cargo) ? ['> Pre-1.0 (0.x): the split into modules (Cargo features) may change between releases, and the verification tooling is still being extended.'] : []),
    '',
  ];
  const sectionMarkdown = (doc, link, level) => {
    const { intro, sections } = splitSections(doc);
    const parts = [convertDoc(intro, link)];
    for (const section of sections) parts.push(`${'#'.repeat(level)} ${section.title}`, '', convertDoc(section.lines, link));
    return parts.join('\n\n');
  };
  for (const mod of modules) {
    const link = linker({ module: mod.name, kind: 'module' }, 'text');
    out.push(`## Module \`${mod.name}\` (Cargo feature \`${mod.name}\`)`, '', convertDoc(mod.doc, link), '');
    for (const item of mod.items) {
      out.push(`### ${mod.name}::${item.name}`, '', '```rust', item.signature, '```', '', sectionMarkdown(item.doc, link, 4), '');
      for (const method of item.methods ?? []) {
        out.push(`#### ${item.name}::${method.name}`, '', '```rust', method.signature, '```', '', sectionMarkdown(method.doc, link, 5), '');
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

  // Regenerate the whole generated directory: a removed item must not leave a stale page.
  fs.rmSync(modulesDir, { recursive: true, force: true });
  writeFile(path.join(modulesDir, 'index.md'), overviewPage(modules, cargo));
  modules.forEach((mod, index) => {
    writeFile(path.join(modulesDir, mod.name, 'index.md'), modulePage(mod, index, linker, cargo));
    for (const item of mod.items) {
      writeFile(path.join(modulesDir, mod.name, `${pageSlug(item.name)}.md`), itemPage(mod, item, linker, cargo));
    }
    console.log(`  ✓ ${mod.name} (${mod.items.length} pages)`);
  });
  writeFile(path.join(referenceDir, 'changelog.md'), changelogPage());
  writeFile(path.join(referenceDir, 'contributing.md'), contributingPage(cargo));
  writeFile(path.join(referenceDir, 'naming-conflicts.md'), namingPage(modules));
  writeFile(path.join(legalDir, 'open-source-libraries.md'), librariesPage());
  writeFile(llmsFullPath, llmsFull(modules, linker, cargo));
  updateVersions(cargo.version);

  const total = modules.reduce((n, m) => n + m.items.length, 0);
  console.log(`\n✅ ${modules.length} modules, ${total} item pages, version ${cargo.version}`);
}

try {
  main();
} catch (error) {
  console.error(`❌ ${error instanceof ParseError ? error.message : error.stack}`);
  process.exit(1);
}
