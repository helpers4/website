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
  return (str || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

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

    const functionsTable = functions.map(fn =>
      `| [\`${fn.name}\`](${fn.name}) | ${escapeMarkdownTable(fn.description)} |`
    ).join('\n');

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
${functionsTable}
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

      if (fn.since) {
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
          content += `
### ${ex.title}

${ex.description || ''}

\`\`\`ts
${ex.code}
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
      `| [${dep.name}](${dep.homepage || dep.repository || '#'}) | ${dep.license} | ${cats.map(c => `\`${c}\``).join(', ')} |`
    )
    .join('\n');

  const content = `---
sidebar_label: "Library Dependencies"
sidebar_position: 2
---

# Library Dependencies

Third-party packages used by \`@helpers4/*\` TypeScript helpers at runtime:

| Package | License | Used by |
|---------|:-------:|---------|
${rows}
`;

  fs.writeFileSync(path.join(legalDir, 'open-source-libraries.md'), content);
  console.log('  ✓ legal/open-source-libraries (auto-generated)');
}

/**
 * Generate a single page listing all functions across all categories.
 * Useful for search (Ctrl+F) and SEO indexing.
 */
function generateAllFunctionsPage(categories) {
  const refDir = path.join(rootDir, 'docs', 'typescript', 'docs', 'reference');
  fs.mkdirSync(refDir, { recursive: true });

  let rows = [];

  for (const category of categories) {
    const api = readJson(path.join(buildPath, category, 'meta', 'api.json'));
    if (!api?.functions) continue;

    for (const fn of api.functions) {
      rows.push(
        `| [\`${fn.name}\`](../categories/${category}/${fn.name}) | [${category}](../categories/${category}/) | ${escapeMarkdownTable(fn.description)} |`
      );
    }
  }

  const content = `---
sidebar_label: "All Functions"
sidebar_position: 1
title: "All Functions"
description: "Complete alphabetical list of all @helpers4 TypeScript utility functions across every category."
---

# All Functions

All **${rows.length}** helpers available in \`@helpers4/*\`, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
${rows.sort((a, b) => a.localeCompare(b)).join('\n')}
`;

  fs.writeFileSync(path.join(refDir, 'all-functions.md'), content);
  console.log('  ✓ reference/all-functions (auto-generated)');
}
