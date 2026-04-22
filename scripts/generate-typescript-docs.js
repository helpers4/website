#!/usr/bin/env node

/**
 * Script: generate-typescript-docs.js
 *
 * Generates TypeScript API documentation from the typescript repo's build output.
 *
 * This script reads the pre-built meta/ JSON files (api.json, examples.json,
 * licenses.json) from each category in typescript/build/ and generates
 * Docusaurus-compatible markdown files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const typescriptRepoPath = path.join(rootDir, '..', 'typescript');
const buildPath = path.join(typescriptRepoPath, 'build');
const docsOutputPath = path.join(rootDir, 'docs', 'typescript', 'docs', 'categories');

console.log('📚 Generating TypeScript API documentation...\n');

if (!fs.existsSync(typescriptRepoPath)) {
  console.error('❌ TypeScript repo not found at:', typescriptRepoPath);
  process.exit(1);
}

if (!fs.existsSync(buildPath)) {
  console.error('❌ Build directory not found. Run the typescript build first.');
  process.exit(1);
}

// Clean and recreate output
if (fs.existsSync(docsOutputPath)) {
  fs.rmSync(docsOutputPath, { recursive: true });
}
fs.mkdirSync(docsOutputPath, { recursive: true });

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}

function escapeMarkdownTable(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

/**
 * Returns the first sentence of a description, capped at 120 characters.
 * Keeps the category index compact.
 */
function firstSentence(str) {
  if (!str) return '';
  const clean = str.replace(/\n/g, ' ').trim();
  const end = clean.search(/\.\s|\.$/);
  const sentence = end !== -1 ? clean.slice(0, end + 1) : clean;
  return sentence.length > 120 ? sentence.slice(0, 117) + '…' : sentence;
}

/**
 * Formats a native alternative entry for a Markdown table row.
 * name   — "flatten / flat" style name from native-alternatives.json
 * native — "Array.prototype.flat(depth?)" native API
 * since  — "ES2019"
 */
function nativeRow(name, native, since, forLink) {
  const tag = `Use native: \`${native}\`${since ? ` *(${since})*` : ''}`;
  if (forLink) {
    // all-functions page: include category link column
    return { name, tag };
  }
  return `| \`${escapeMarkdownTable(name)}\` | ${tag} |`;
}

// Read bundle metadata (contains mutationDashboardUrl and runtimes for the current release)
const buildMeta = readJson(path.join(buildPath, 'all', 'meta', 'build.json')) ?? {};
const FALLBACK_MUTATION_DASHBOARD_URL =
  'https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/main';
const MUTATION_DASHBOARD_URL =
  buildMeta.mutationDashboardUrl ?? FALLBACK_MUTATION_DASHBOARD_URL;
const RUNTIMES = buildMeta.runtimes ?? { node: '>=24.0.0', deno: 'compatible', bun: 'compatible' };

try {
  // Discover categories from build/ (skip "all" bundle)
  const categories = fs.readdirSync(buildPath).filter(f =>
    f !== 'all' && fs.statSync(path.join(buildPath, f)).isDirectory()
    && fs.existsSync(path.join(buildPath, f, 'meta', 'api.json'))
  ).sort();

  console.log(`📁 Found ${categories.length} categories:\n`);

  let totalFunctions = 0;

  for (const [index, category] of categories.entries()) {
    const categoryDir = path.join(docsOutputPath, category);
    fs.mkdirSync(categoryDir, { recursive: true });

    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    const examples = readJson(path.join(buildPath, category, 'meta', 'examples.json'));
    const licenses = readJson(path.join(buildPath, category, 'meta', 'licenses.json'));
    const natives = readJson(path.join(buildPath, category, 'meta', 'native-alternatives.json'));

    if (!api) {
      console.warn(`  ⚠ No api.json for ${category}, skipping`);
      continue;
    }

    const functions = api.functions || [];
    totalFunctions += functions.length;

    // Build examples lookup: { functionName: examples[] }
    const examplesMap = {};
    if (examples?.functions) {
      for (const fn of examples.functions) {
        examplesMap[fn.name] = fn.examples || [];
      }
    }

    // --- _category_.json ---
    const categoryMeta = {
      label: capitalize(category),
      position: index + 1,
      collapsible: true,
      collapsed: true,
      link: { type: 'generated-index', slug: `/categories/${category}` },
    };
    fs.writeFileSync(
      path.join(categoryDir, '_category_.json'),
      JSON.stringify(categoryMeta, null, 2) + '\n'
    );

    // --- index.md (category overview) ---
    const depsList = licenses?.dependencies?.length
      ? '\n## Dependencies\n\n| Package | License |\n|---------|:-------:|\n' +
      licenses.dependencies.map(d => `| [${d.name}](${d.homepage || d.repository || '#'}) | ${d.license} |`).join('\n') + '\n'
      : '';

    // Merge implemented helpers and native alternatives, sorted alphabetically by name
    const NATIVE_BADGE = '<span class="badge badge--secondary">native JS</span>';
    const allEntries = [
      ...functions.map(fn => ({
        sortKey: fn.name.toLowerCase(),
        row: `| [\`${fn.name}\`](${fn.name}) | ${escapeMarkdownTable(firstSentence(fn.description))} |`,
      })),
      ...(natives?.functions || []).map(n => ({
        sortKey: n.name.toLowerCase(),
        row: `| \`${escapeMarkdownTable(n.name)}\` | ${NATIVE_BADGE} \`${escapeMarkdownTable(n.native)}\`${n.since ? ` *(${n.since})*` : ''} |`,
      })),
    ].sort((a, b) => a.sortKey.localeCompare(b.sortKey));

    const allFunctionRows = allEntries.map(e => e.row).join('\n');

    const indexMd = `---
sidebar_label: "${capitalize(category)}"
sidebar_position: 0
title: "${capitalize(category)} Helpers"
---

# ${capitalize(category)} Helpers

Utility functions for working with ${category} operations.

## Functions

| Function | Description |
|----------|-------------|
${allFunctionRows}
${depsList}
`;
    fs.writeFileSync(path.join(categoryDir, 'index.md'), indexMd);

    // --- individual function docs ---
    for (const fn of functions) {
      const fnExamples = examplesMap[fn.name] || fn.examples || [];
      const sig = fn.signatures?.[0];

      let content = `---
sidebar_label: "${fn.name}"
---

# ${fn.name}

${fn.description || ''}
`;

      if (fn.since && fn.since !== 'unknown') {
        content += `\n> Available since v${fn.since}\n`;
      }

      content += `
## Import

\`\`\`ts
import { ${fn.name} } from '@helpers4/${category}';
\`\`\`
`;

      if (sig) {
        content += `
## Signature

\`\`\`ts
${sig.signature}
\`\`\`
`;

        if (sig.params?.length) {
          content += `
## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
${sig.params.map(p => `| \`${p.name}\` | \`${escapeMarkdownTable(p.type)}\` | ${escapeMarkdownTable(p.description)}${p.optional ? ' *(optional)*' : ''} |`).join('\n')}
`;
        }

        if (sig.returns) {
          content += `
## Returns

\`${sig.returns.type}\` — ${sig.returns.description || ''}
`;
        }
      }

      if (fnExamples.length) {
        content += `
## Examples
`;
        for (const ex of fnExamples) {
          const exCode = (ex.code || '').replace(/^```\w*\n?/, '').replace(/\n?```$/, '').trim();
          content += `
### ${ex.title}

${ex.description || ''}

\`\`\`ts
${exCode}
\`\`\`
`;
        }
      }

      if (fn.relatedTypes?.length) {
        content += `
## Related Types
`;
        for (const rt of fn.relatedTypes) {
          content += `
### \`${rt.name}\`

${rt.description || ''}

\`\`\`ts
${rt.typeDefinition}
\`\`\`
`;
        }
      }

      content += `
## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/${category}/${fn.sourceFile || fn.name + '.ts'})
`;

      fs.writeFileSync(path.join(categoryDir, `${fn.name}.md`), content);
    }

    console.log(`  ✓ ${category} (${functions.length} functions)`);
  }

  // --- legal docs from licenses ---
  generateLegalDocs(categories);

  // --- all-functions reference page ---
  generateAllFunctionsPage(categories);

  // --- changelog page (helpers grouped by @since version) ---
  generateChangelogPage(categories);

  // --- contributing page (synced from typescript repo) ---
  syncContributingPage();

  // --- patch mutation dashboard URL in manually-written pages ---
  syncMutationDashboardUrl();

  // --- patch runtime compatibility in getting-started ---
  syncRuntimeCompatibility();

  console.log(`\n✅ Generated documentation for ${categories.length} categories (${totalFunctions} functions)`);
  console.log(`📁 Output: ${docsOutputPath}\n`);

} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}

/**
 * Generate the open-source-libraries legal page from all categories' licenses.json
 */
function generateLegalDocs(categories) {
  const legalDir = path.join(rootDir, 'docs', 'typescript', 'docs', 'legal');

  // Collect deps with their categories
  const depMap = new Map(); // name → { dep, categories: string[] }

  for (const category of categories) {
    const licenses = readJson(path.join(buildPath, category, 'meta', 'licenses.json'));
    if (licenses?.dependencies) {
      for (const dep of licenses.dependencies) {
        if (!depMap.has(dep.name)) {
          depMap.set(dep.name, { dep, categories: [category] });
        } else {
          depMap.get(dep.name).categories.push(category);
        }
      }
    }
  }

  if (depMap.size === 0) return;

  const rows = [...depMap.values()]
    .sort((a, b) => a.dep.name.localeCompare(b.dep.name))
    .map(({ dep, categories: cats }) =>
      `| ${cats.map(c => `\`${c}\``).join(', ')} | [${dep.name}](${dep.homepage || dep.repository || '#'}) | ${dep.license} |`
    )
    .join('\n');

  const content = `---
sidebar_label: "Library Dependencies"
sidebar_position: 2
---

# Library Dependencies

Third-party packages used by \`@helpers4/*\` TypeScript helpers at runtime:

| Used by | Package | License |
|---------|---------|:-------:|
${rows}
`;

  fs.writeFileSync(path.join(legalDir, 'open-source-libraries.md'), content);
  console.log('  ✓ legal/open-source-libraries (auto-generated)');
}

/**
 * Generate a single page listing all functions across all categories.
 * Lives in categories/ so it appears first in the Categories sidebar section.
 * Includes native alternatives (no link, "native JS" badge).
 */
function generateAllFunctionsPage(categories) {
  const catDir = path.join(rootDir, 'docs', 'typescript', 'docs', 'categories');
  fs.mkdirSync(catDir, { recursive: true });

  const NATIVE_BADGE = '<span class="badge badge--secondary">native JS</span>';
  let rows = [];
  let nativeCount = 0;

  for (const category of categories) {
    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    if (!api?.functions) continue;

    for (const fn of api.functions) {
      rows.push({
        sortKey: fn.name.toLowerCase(),
        row: `| [\`${fn.name}\`](${category}/${fn.name}) | [${category}](${category}/) | ${escapeMarkdownTable(firstSentence(fn.description))} |`,
      });
    }

    const natives = readJson(path.join(buildPath, category, 'meta', 'native-alternatives.json'));
    for (const n of (natives?.functions || [])) {
      rows.push({
        sortKey: n.name.toLowerCase(),
        row: `| \`${escapeMarkdownTable(n.name)}\` | [${category}](${category}/) | ${NATIVE_BADGE} \`${escapeMarkdownTable(n.native)}\`${n.since ? ` *(${n.since})*` : ''} |`,
      });
      nativeCount++;
    }
  }

  rows.sort((a, b) => a.sortKey.localeCompare(b.sortKey));

  const implementedCount = rows.length - nativeCount;

  // Delete old location if it exists
  const oldPath = path.join(rootDir, 'docs', 'typescript', 'docs', 'reference', 'all-functions.md');
  if (fs.existsSync(oldPath)) fs.rmSync(oldPath);

  const content = `---
sidebar_label: "All Functions"
sidebar_position: 0
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
---

# All Functions

**${implementedCount}** implemented helpers + **${nativeCount}** covered by native JavaScript APIs, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
${rows.map(r => r.row).join('\n')}
`;

  fs.writeFileSync(path.join(catDir, 'all-functions.md'), content);
  console.log('  ✓ categories/all-functions (auto-generated)');
}

/**
 * Compare two semver strings, returning a negative value if a < b (i.e. a is older).
 * Newest version first (descending). Stable > pre-release of same base.
 */
function compareSemverDesc(a, b) {
  if (a === 'unknown') return 1;
  if (b === 'unknown') return -1;

  const expand = v => {
    const m = v.match(/^(\d+)\.(\d+)\.(\d+)(?:-[a-z]+\.(\d+))?$/i);
    if (!m) return [0, 0, 0, 999];
    // stable release has no pre-release part → use 999 so it sorts above alphas
    return [+m[1], +m[2], +m[3], m[4] !== undefined ? +m[4] : 999];
  };

  const [aA, aB, aC, aD] = expand(a);
  const [bA, bB, bC, bD] = expand(b);
  for (const [x, y] of [[bA, aA], [bB, aB], [bC, aC], [bD, aD]]) {
    if (x !== y) return x - y;
  }
  return 0;
}

/**
 * Generate reference/changelog.md — helpers grouped by their @since version.
 */
function generateChangelogPage(categories) {
  const refDir = path.join(rootDir, 'docs', 'typescript', 'docs', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  // Aggregate functions by @since version
  const byVersion = {};

  for (const category of categories) {
    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    if (!api?.functions) continue;

    for (const fn of api.functions) {
      const version = fn.since || 'unknown';
      if (!byVersion[version]) byVersion[version] = [];
      byVersion[version].push({ name: fn.name, category, description: fn.description || '' });
    }
  }

  const sortedVersions = Object.keys(byVersion).sort(compareSemverDesc);

  let content = `---
sidebar_label: "Changelog"
sidebar_position: 2
title: "Changelog — Helpers by version"
description: "All helpers listed by the version in which they were introduced, from newest to oldest."
---

# Changelog

All helpers listed by the version in which they were introduced, from newest to oldest.

`;

  for (const version of sortedVersions) {
    const fns = byVersion[version].sort((a, b) => a.name.localeCompare(b.name));
    const label = version === 'unknown' ? '*(version unknown)*' : `v${version}`;
    content += `## ${label}\n\n`;
    content += `| Function | Category | Description |\n`;
    content += `|----------|----------|-------------|\n`;
    for (const fn of fns) {
      content += `| [\`${fn.name}\`](../categories/${fn.category}/${fn.name}) | [${fn.category}](../categories/${fn.category}/) | ${escapeMarkdownTable(fn.description)} |\n`;
    }
    content += '\n';
  }

  fs.writeFileSync(path.join(refDir, 'changelog.md'), content);
  console.log('  ✓ reference/changelog (auto-generated)');
}

/**
 * Sync reference/contributing.md from the typescript repo's CONTRIBUTING.md.
 */
function syncContributingPage() {
  const refDir = path.join(rootDir, 'docs', 'typescript', 'docs', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  const contributingSource = path.join(typescriptRepoPath, 'CONTRIBUTING.md');

  if (!fs.existsSync(contributingSource)) {
    console.warn('  ⚠ CONTRIBUTING.md not found in typescript repo, skipping');
    return;
  }

  const sourceContent = fs.readFileSync(contributingSource, 'utf-8');

  const content = `---
sidebar_label: Contributing
sidebar_position: 3
---

${sourceContent}`;

  fs.writeFileSync(path.join(refDir, 'contributing.md'), content);
  console.log('  ✓ reference/contributing (synced from typescript repo)');
}

/**
 * Patch the Stryker mutation dashboard URL in manually-written documentation pages.
 * Replaces any existing dashboard.stryker-mutator.io URL for this project with
 * the URL stored in build/all/meta/build.json (version-specific) so that docs
 * always link to the report for the currently documented release.
 */
function syncMutationDashboardUrl() {
  const STRYKER_URL_RE =
    /https:\/\/dashboard\.stryker-mutator\.io\/reports\/github\.com\/helpers4\/typescript\/[^\s)\]"]+/g;

  const pages = [
    path.join(rootDir, 'docs', 'typescript', 'docs', 'intro.md'),
    path.join(rootDir, 'docs', 'typescript', 'docs', 'getting-started.md'),
    path.join(rootDir, 'docs', 'typescript', 'docs', 'reference', 'philosophy.md'),
  ];

  for (const page of pages) {
    if (!fs.existsSync(page)) continue;
    const original = fs.readFileSync(page, 'utf-8');
    const patched = original.replace(STRYKER_URL_RE, MUTATION_DASHBOARD_URL);
    if (patched !== original) {
      fs.writeFileSync(page, patched);
      console.log(`  ✓ patched mutation dashboard URL → ${path.basename(page)}`);
    }
  }
}

/**
 * Patch the "Runtime Compatibility" section in getting-started.md with values
 * from build/all/meta/build.json (runtimes.node is read from engines.node in
 * package.json at build time, so it always reflects the declared minimum).
 */
function syncRuntimeCompatibility() {
  const page = path.join(rootDir, 'docs', 'typescript', 'docs', 'getting-started.md');
  if (!fs.existsSync(page)) return;

  const SECTION_RE = /## Runtime Compatibility\n[\s\S]*?(?=\n##|$)/;

  const browserSupport = typeof RUNTIMES.browser === 'string' ? RUNTIMES.browser : RUNTIMES.browser?.es ?? 'ES2022+';
  const newSection = `## Runtime Compatibility

| Runtime | Support | Notes |
|---------|:-------:|-------|
| Browser | \`${browserSupport}\` | Chrome 93+, Firefox 90+, Safari 15+, Edge 93+ |
| Frameworks | ✅ | React, Vue, Svelte, Angular, and more |
| Node.js | \`${RUNTIMES.node}\` | |
| Deno | ✅ | |
| Bun | ✅ | |`;

  const original = fs.readFileSync(page, 'utf-8');
  const patched = SECTION_RE.test(original)
    ? original.replace(SECTION_RE, newSection)
    : original.replace(
      '## Browser Support',
      newSection + '\n\n## Browser Support'
    );

  if (patched !== original) {
    fs.writeFileSync(page, patched);
    console.log(`  ✓ patched runtime compatibility (Node.js ${RUNTIMES.node}, Browser ${browserSupport}) → getting-started.md`);
  }
}
