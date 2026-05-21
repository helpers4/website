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
const docsOutputPath = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'categories');

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
 * Formats helper @since values for human-readable docs.
 * - semver => v<semver>
 * - next   => next
 * - unknown/empty => null (hidden)
 */
function formatSinceLabel(since) {
  if (!since || since === 'unknown') return null;
  if (since === 'next') return 'next';
  return `v${since}`;
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
const LIBRARY_VERSION = buildMeta.version
  ?? readJson(path.join(typescriptRepoPath, 'package.json'))?.version
  ?? '0.0.0-snapshot';

try {
  // Discover categories from build/ (skip "all" bundle)
  const categories = fs.readdirSync(buildPath).filter(f =>
    f !== 'all' && fs.statSync(path.join(buildPath, f)).isDirectory()
    && fs.existsSync(path.join(buildPath, f, 'meta', 'api.json'))
  ).sort();

  console.log(`📁 Found ${categories.length} categories:\n`);

  // Build a map of function names that appear in more than one category.
  // Used to add a "name conflict" callout on individual function pages.
  // Map: functionName → string[] (sorted list of category names)
  const nameConflicts = (() => {
    const nameToCategories = {};
    for (const cat of categories) {
      const api = readJson(path.join(buildPath, cat, 'meta', 'api.json'));
      if (!api?.functions) continue;
      for (const fn of api.functions) {
        if (!nameToCategories[fn.name]) nameToCategories[fn.name] = [];
        nameToCategories[fn.name].push(cat);
      }
    }
    return Object.fromEntries(
      Object.entries(nameToCategories).filter(([, cats]) => cats.length > 1)
    );
  })();

  let totalFunctions = 0;
  let processedCategoryCount = 0;

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

    const functions = (api.functions || []).filter(
      fn => fn.kind === 'function' || fn.kind === 'variable'
    );
    totalFunctions += functions.length;
    processedCategoryCount += 1;

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
      // Use the generated Markdown index page (table view) as category landing page.
      // This avoids a second generated-index card page that diverges from the table content.
      link: { type: 'doc', id: `categories/${category}/index` },
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
title: "${capitalize(category)} Helpers"
sidebar:
  label: "${capitalize(category)}"
  order: 0
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
title: "${fn.name}"
sidebar:
  label: "${fn.name}"
---

# ${fn.name}

${fn.description || ''}
`;

      const sinceLabel = formatSinceLabel(fn.since);
      if (sinceLabel) {
        content += `\n> Available since ${sinceLabel}\n`;
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

      // Name conflict callout — placed just before Source for discoverability
      const conflictCategories = nameConflicts[fn.name];
      if (conflictCategories) {
        const otherCategories = conflictCategories.filter(c => c !== category);
        const othersFormatted = otherCategories
          .map(c => `[\`@helpers4/${c}\`](../${c}/${fn.name})`)
          .join(', ');
        content += `
:::caution[Name conflict]
A helper named \`${fn.name}\` also exists in ${othersFormatted}. If you need both in the same file, rename at import with \`as\`:

\`\`\`ts
import { ${fn.name} as ${fn.name}4${category} } from '@helpers4/${category}';
${otherCategories.map(c => `import { ${fn.name} as ${fn.name}4${c} } from '@helpers4/${c}';`).join('\n')}
\`\`\`

See [Name Conflicts](../../reference/naming-conflicts) for the full resolution guide.
:::
`;
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

  // --- naming conflicts reference page (generated from nameConflicts map) ---
  generateNamingConflictsPage(nameConflicts);

  // --- contributing page (synced from typescript repo) ---
  syncContributingPage();

  // --- patch version sentinel in manually-written pages ---
  syncVersion();

  // --- patch mutation dashboard URL in manually-written pages ---
  syncMutationDashboardUrl();

  // --- fix broken internal links (remove .md extension) ---
  fixBrokenLinks();

  // --- patch runtime compatibility in getting-started ---
  syncRuntimeCompatibility();

  // --- patch helper count in intro and comparison pages ---
  // Use processedCategoryCount (not categories.length) so the patched docs
  // reflect what was actually generated when an api.json is missing.
  syncHelperCount(totalFunctions, processedCategoryCount);

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
  const legalDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'legal');

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
title: "Library Dependencies"
sidebar:
  label: "Library Dependencies"
  order: 2
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
  const catDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'categories');
  fs.mkdirSync(catDir, { recursive: true });

  const NATIVE_BADGE = '<span class="badge badge--secondary">native JS</span>';
  let rows = [];
  let nativeCount = 0;

  for (const category of categories) {
    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    if (!api?.functions) continue;

    for (const fn of (api.functions || []).filter(fn => fn.kind === 'function' || fn.kind === 'variable')) {
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
  const oldPath = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'reference', 'all-functions.md');
  if (fs.existsSync(oldPath)) fs.rmSync(oldPath);

  const content = `---
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
sidebar:
  label: "All Functions"
  order: 0
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
 * Special values:
 * - next: always first (new unreleased/pre-release helpers)
 * - unknown: always last
 */
function compareSemverDesc(a, b) {
  if (a === b) return 0;
  if (a === 'next' && b !== 'next') return -1;
  if (b === 'next' && a !== 'next') return 1;
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
 * Generate reference/naming-conflicts.md from the nameConflicts map.
 * nameConflicts: { [functionName]: string[] } — only names with 2+ categories.
 */
function generateNamingConflictsPage(nameConflicts) {
  const refDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  const sortedNames = Object.keys(nameConflicts).sort();

  // Table rows
  const tableRows = sortedNames.map(name => {
    const cats = nameConflicts[name].sort();
    const catLinks = cats.map(c => `[\`${c}\`](../categories/${c}/${name})`).join(', ');
    return `| \`${name}\` | ${catLinks} |`;
  }).join('\n');

  // Resolution examples
  let examples = '';
  for (const name of sortedNames) {
    const cats = nameConflicts[name].sort();
    const imports = cats.map(c => `import { ${name} as ${name}4${c} } from '@helpers4/${c}';`).join('\n');
    examples += `
### \`${name}\`

\`\`\`ts
${imports}
\`\`\`
`;
  }

  const content = `---
title: "Name Conflicts Between Categories"
description: "Some helpers share the same name across multiple categories. This page explains how to resolve import conflicts."
sidebar:
  label: "Name Conflicts"
  order: 4
---

# Name Conflicts Between Categories

helpers4 is split into independent npm packages — one per category. Each package can be installed and tree-shaken independently. A deliberate consequence of this design is that **the same function name can exist in multiple categories** when the operation makes sense for different data types.

This is not a bug. \`compact\` for arrays and \`compact\` for objects are genuinely different operations, and merging them into a single overloaded function would break tree-shaking and make the types less precise.

## Known Conflicts

*Auto-generated from the current build — always reflects the documented version.*

| Function | Categories |
|----------|------------|
${tableRows}

## Resolving Conflicts

When you need **two helpers with the same name** in the same file, rename one (or both) at the import site using the \`as\` keyword.

### Recommended naming convention

Suffix with \`4{category}\` — consistent with the helpers4 naming identity:

\`\`\`ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';

const numbers = compact4array([0, 1, null, 2, undefined]);
// => [1, 2]

const user = compact4object({ id: 1, name: null, role: undefined });
// => { id: 1 }
\`\`\`

### All conflicts — resolution examples
${examples}
### Alternative: namespace import

If you use many helpers from both conflicting categories, a namespace import is more concise — but check that your bundler handles namespace tree-shaking (esbuild, Rollup, and Vite all do):

\`\`\`ts
import * as A from '@helpers4/array';
import * as O from '@helpers4/object';

A.compact([0, 1, null]);
O.compact({ a: 1, b: null });
\`\`\`

:::note
Prefer named \`as\` imports for maximum tree-shaking compatibility with all bundlers, including older Webpack 4 configurations.
:::

## Why not a single unified package?

The \`@helpers4/all\` bundle does export every category. Inside a single module context, the category name is not part of the export, so **the last \`export *\` wins** when two categories export the same name.

This means you cannot safely \`import { compact } from '@helpers4/all'\` if both \`array\` and \`object\` export \`compact\` — the result is undefined behavior depending on module bundler internals.

**Always use per-category packages** (\`@helpers4/array\`, \`@helpers4/object\`, …) when you need conflicting helpers. They are the canonical import source.

## Design rationale

See [Philosophy — Category independence](./philosophy#category-independence) for a deeper explanation of why cross-category deduplication is intentionally avoided.
`;

  fs.writeFileSync(path.join(refDir, 'naming-conflicts.md'), content);
  console.log(`  ✓ reference/naming-conflicts (${sortedNames.length} conflicts, auto-generated)`);
}

/**
 * Generate reference/changelog.md — helpers grouped by their @since version.
 */
function generateChangelogPage(categories) {
  const refDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  // Aggregate functions by @since version
  const byVersion = {};

  for (const category of categories) {
    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    if (!api?.functions) continue;

    for (const fn of (api.functions || []).filter(fn => fn.kind === 'function' || fn.kind === 'variable')) {
      const version = fn.since || 'unknown';
      if (!byVersion[version]) byVersion[version] = [];
      byVersion[version].push({ name: fn.name, category, description: fn.description || '' });
    }
  }

  const sortedVersions = Object.keys(byVersion).sort(compareSemverDesc);

  let content = `---
title: "Changelog — Helpers by version"
description: "All helpers listed by the version in which they were introduced, from newest to oldest."
sidebar:
  label: "Changelog"
  order: 2
---

# Changelog

All helpers listed by the version in which they were introduced, from newest to oldest.

`;

  // Skip 'next' section if the current version is a stable release (no prerelease marker)
  const isStableRelease = !LIBRARY_VERSION.includes('-');
  const displayVersions = isStableRelease
    ? sortedVersions.filter(v => v !== 'next')
    : sortedVersions;

  for (const version of displayVersions) {
    const fns = byVersion[version].sort((a, b) => a.name.localeCompare(b.name));
    const label = version === 'unknown'
      ? '*(version unknown)*'
      : `v${version}`;
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
  const refDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  const contributingSource = path.join(typescriptRepoPath, 'CONTRIBUTING.md');

  if (!fs.existsSync(contributingSource)) {
    console.warn('  ⚠ CONTRIBUTING.md not found in typescript repo, skipping');
    return;
  }

  const sourceContent = fs.readFileSync(contributingSource, 'utf-8');

  // Derive title from first H1 in CONTRIBUTING.md, fallback to default
  const h1Match = sourceContent.match(/^#\s+(.+)$/m);
  const derivedTitle = h1Match ? h1Match[1].trim() : 'Contributing to helpers4';

  const content = `---
title: "${derivedTitle}"
sidebar:
  label: Contributing
  order: 3
---

${sourceContent}`;

  fs.writeFileSync(path.join(refDir, 'contributing.md'), content);
  console.log('  ✓ reference/contributing (synced from typescript repo)');
}

/**
 * Patch the version sentinel (0.0.0-snapshot) in manually-written documentation pages.
 * This keeps install commands, npm links, and GitHub release links in sync with the
 * actual documented version without duplicating the version in the source files.
 */
function syncVersion() {
  const VERSION_SENTINEL_RE = /0\.0\.0-snapshot/g;

  const pages = [
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'getting-started.md'),
  ];

  for (const page of pages) {
    if (!fs.existsSync(page)) continue;
    const original = fs.readFileSync(page, 'utf-8');
    const patched = original.replace(VERSION_SENTINEL_RE, LIBRARY_VERSION);
    if (patched !== original) {
      fs.writeFileSync(page, patched);
      console.log(`  ✓ patched version (${LIBRARY_VERSION}) → ${path.basename(page)}`);
    }
  }
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
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'index.md'),
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'getting-started.md'),
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'reference', 'philosophy.md'),
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
  const page = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'getting-started.md');
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

/**
 * Fix internal links by removing .md extensions from Astro doc links.
 * Astro documentation links should not include .md extension.
 */
function fixBrokenLinks() {
  const INTERNAL_MD_LINK_RE = /\]\(([^)]*\/[^)]*\.md)\)/g;

  const pages = [
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'index.md'),
    path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'getting-started.md'),
  ];

  for (const page of pages) {
    if (!fs.existsSync(page)) continue;
    const original = fs.readFileSync(page, 'utf-8');
    const patched = original.replace(INTERNAL_MD_LINK_RE, (match, url) => {
      const fixedUrl = url.replace(/\.md$/, '');
      return `](${fixedUrl})`;
    });
    if (patched !== original) {
      fs.writeFileSync(page, patched);
      console.log(`  ✓ fixed broken internal links → ${path.basename(page)}`);
    }
  }
}


function syncHelperCount(totalFunctions, categoryCount) {
  // intro.md — "Browse Categories" line
  const introPage = path.join(rootDir, 'src', 'content', 'docs', 'typescript', 'index.md');
  if (fs.existsSync(introPage)) {
    const BROWSE_RE = /(\*\*\[Browse Categories\]\([^)]+\)\*\* — )\d+ helpers across \d+ categories/;
    const original = fs.readFileSync(introPage, 'utf-8');
    const patched = original.replace(
      BROWSE_RE,
      `$1${totalFunctions} helpers across ${categoryCount} categories`
    );
    if (patched !== original) {
      fs.writeFileSync(introPage, patched);
      console.log(`  ✓ patched helper count (${totalFunctions} / ${categoryCount} categories) → intro.md`);
    }
  }

  // comparisons/alternatives.md — "**helpers4** | <N>" cell in the Overview table
  const comparisonPage = path.join(
    rootDir, 'src', 'content', 'docs', 'typescript', 'comparisons', 'alternatives.md'
  );
  if (fs.existsSync(comparisonPage)) {
    const HELPERS4_ROW_RE = /(\|\s*\*\*helpers4\*\*\s*\|\s*)\d+(\s*\|)/;
    const original = fs.readFileSync(comparisonPage, 'utf-8');
    const patched = original.replace(HELPERS4_ROW_RE, `$1${totalFunctions}$2`);
    if (patched !== original) {
      fs.writeFileSync(comparisonPage, patched);
      console.log(`  ✓ patched helper count (${totalFunctions}) → comparisons/alternatives.md`);
    }
  }
}
