#!/usr/bin/env node

/**
 * Script: generate-helper-docs.js
 * 
 * Reads all TypeScript helper source files from a cloned helpers4/typescript repo
 * and generates individual Markdown documentation pages for each helper function.
 * Also generates the Docusaurus sidebar configuration.
 */

import fs from 'fs';
import path from 'path';

const HELPERS_SRC = process.argv[2] || '/tmp/helpers4-ts/helpers';
const DOCS_OUT = process.argv[3] || path.join(import.meta.dirname, '..', 'docs', 'typescript', 'docs', 'categories');

const CATEGORIES = [
  'array', 'date', 'function', 'math', 'number', 'object',
  'observable', 'promise', 'string', 'type', 'url', 'version'
];

/**
 * Extract JSDoc blocks and exported function/const signatures from a TS file
 */
function parseHelperFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.ts');
  
  // Find all JSDoc + export pairs
  // We want the LAST JSDoc before the actual implementation (not overloads)
  const lines = content.split('\n');
  
  const helpers = [];
  let currentJsdoc = null;
  let jsdocStart = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Start of JSDoc
    if (line.startsWith('/**')) {
      const jsdocLines = [];
      for (let j = i; j < lines.length; j++) {
        jsdocLines.push(lines[j]);
        if (lines[j].trim().endsWith('*/')) {
          currentJsdoc = jsdocLines.join('\n');
          jsdocStart = j + 1;
          i = j;
          break;
        }
      }
      continue;
    }
    
    // Export line after JSDoc or export without JSDoc
    const isExport = line.startsWith('export function') || line.startsWith('export const') || line.startsWith('export type') || line.startsWith('export interface') || line.startsWith('export async function');
    
    if (isExport && currentJsdoc && currentJsdoc.includes('This file is part of')) {
      currentJsdoc = null;
    }
    
    if (isExport && !currentJsdoc) {
      // Export without JSDoc - create a minimal one from the function name
      const name = extractName(line.replace('async ', ''));
      currentJsdoc = `/**\n * ${name}\n */`;
    }
    
    if (currentJsdoc && isExport) {
      
      // Get the full signature (may span multiple lines)
      let signature = '';
      let parenDepth = 0;
      let braceFound = false;
      for (let j = i; j < lines.length; j++) {
        signature += lines[j] + '\n';
        // Track parentheses depth
        for (const ch of lines[j]) {
          if (ch === '(') parenDepth++;
          if (ch === ')') parenDepth--;
          if (ch === '{' && parenDepth === 0) braceFound = true;
        }
        if (braceFound || (parenDepth === 0 && lines[j].includes(';'))) {
          break;
        }
      }
      
      // Clean up - just get the declaration
      signature = signature.split('{')[0].trim();
      if (signature.endsWith(')')) {
        // missing return type - that's ok
      }
      
      helpers.push({
        name: extractName(line),
        kind: extractKind(line),
        jsdoc: currentJsdoc,
        signature: signature,
      });
      
      currentJsdoc = null;
    }
  }
  
  return helpers;
}

function extractName(exportLine) {
  const match = exportLine.match(/export\s+(?:async\s+)?(?:function|const|type|interface)\s+(\w+)/);
  return match ? match[1] : 'unknown';
}

function extractKind(exportLine) {
  const match = exportLine.match(/export\s+(?:async\s+)?(function|const|type|interface)/);
  return match ? match[1] : 'function';
}

/**
 * Parse JSDoc into structured data
 */
function parseJsdoc(jsdoc) {
  // Remove comment markers
  const lines = jsdoc
    .split('\n')
    .map(l => l.replace(/^\s*\/\*\*/, '').replace(/^\s*\*\//, '').replace(/^\s*\*\s?/, ''))
    .filter(l => l !== undefined);
  
  let description = '';
  const params = [];
  let returns = '';
  const examples = [];
  let see = '';
  let inExample = false;
  let currentExample = '';
  
  for (const line of lines) {
    if (line.startsWith('@param')) {
      const match = line.match(/@param\s+(\S+)\s*-?\s*(.*)/);
      if (match) params.push({ name: match[1], desc: match[2] });
    } else if (line.startsWith('@returns')) {
      returns = line.replace(/@returns?\s*/, '');
    } else if (line.startsWith('@see')) {
      see = line.replace(/@see\s*/, '');
    } else if (line.startsWith('@example')) {
      inExample = true;
      currentExample = '';
    } else if (inExample) {
      if (line.startsWith('```')) {
        if (currentExample) {
          examples.push(currentExample.trim());
          currentExample = '';
          inExample = false;
        }
        // Skip opening ```ts
      } else {
        currentExample += line + '\n';
      }
    } else if (!line.startsWith('@')) {
      description += line + '\n';
    }
  }
  
  if (currentExample.trim()) {
    examples.push(currentExample.trim());
  }
  
  return { description: description.trim(), params, returns, examples, see };
}

/**
 * Generate a clean function signature for display
 */
function cleanSignature(sig) {
  return sig
    .replace(/^export\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate Markdown for a single helper
 */
function generateHelperMd(helper, category) {
  const parsed = parseJsdoc(helper.jsdoc);
  const sig = cleanSignature(helper.signature);
  
  let md = `---\nsidebar_label: "${helper.name}"\n---\n\n`;
  md += `# ${helper.name}\n\n`;
  
  if (parsed.description) {
    md += `${parsed.description}\n\n`;
  }
  
  // Import
  md += `## Import\n\n`;
  md += `\`\`\`ts\nimport { ${helper.name} } from '@helpers4/${category}';\n\`\`\`\n\n`;
  
  // Signature
  md += `## Signature\n\n`;
  md += `\`\`\`ts\n${sig}\n\`\`\`\n\n`;
  
  // Parameters
  if (parsed.params.length > 0) {
    md += `## Parameters\n\n`;
    md += `| Parameter | Description |\n`;
    md += `|-----------|-------------|\n`;
    for (const p of parsed.params) {
      md += `| \`${p.name}\` | ${p.desc} |\n`;
    }
    md += `\n`;
  }
  
  // Returns
  if (parsed.returns) {
    md += `## Returns\n\n`;
    md += `${parsed.returns}\n\n`;
  }
  
  // Examples
  if (parsed.examples.length > 0) {
    md += `## Example\n\n`;
    for (const example of parsed.examples) {
      md += `\`\`\`ts\n${example}\n\`\`\`\n\n`;
    }
  }
  
  // Source link
  md += `## Source\n\n`;
  md += `[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/${category}/${path.basename(helper.name)}.ts)\n`;
  
  return md;
}

/**
 * Generate category index page
 */
function generateCategoryIndexMd(category, helpers) {
  let md = `---\nsidebar_label: "Overview"\nsidebar_position: 0\n---\n\n`;
  md += `# ${capitalize(category)} Helpers\n\n`;
  md += `Utility functions for working with ${category}s.\n\n`;
  md += `## Functions\n\n`;
  md += `| Function | Description |\n`;
  md += `|----------|-------------|\n`;
  
  for (const h of helpers) {
    const parsed = parseJsdoc(h.jsdoc);
    const desc = parsed.description.split('\n')[0] || '';
    md += `| [\`${h.name}\`](${h.name}) | ${desc} |\n`;
  }
  
  md += `\n`;
  return md;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate sidebar items for docusaurus
 */
function generateSidebarItems(categoryHelpers) {
  const items = [];
  
  for (const [category, helpers] of Object.entries(categoryHelpers)) {
    if (helpers.length === 0) continue;
    
    const helperItems = helpers.map(h => `categories/${category}/${h.fileName}`);
    
    items.push({
      type: 'category',
      label: capitalize(category),
      collapsed: false,
      link: { type: 'doc', id: `categories/${category}/index` },
      items: helperItems,
    });
  }
  
  return items;
}

// Main
function main() {
  console.log(`📚 Generating helper documentation...`);
  console.log(`   Source: ${HELPERS_SRC}`);
  console.log(`   Output: ${DOCS_OUT}`);
  
  const categoryHelpers = {};
  
  for (const category of CATEGORIES) {
    const categoryDir = path.join(HELPERS_SRC, category);
    if (!fs.existsSync(categoryDir)) {
      console.log(`   ⚠️  Category "${category}" not found, skipping`);
      categoryHelpers[category] = [];
      continue;
    }
    
    const files = fs.readdirSync(categoryDir)
      .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts') && !f.endsWith('.spec.ts') && !f.endsWith('.bench.ts') && f !== 'index.ts')
      .sort();
    
    const helpers = [];
    
    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      let parsed = parseHelperFile(filePath);
      
      if (parsed.length === 0) {
        console.log(`   ⚠️  No exports found in ${category}/${file}`);
        continue;
      }
      
      // Deduplicate overloads: group by name, keep first JSDoc + last signature
      const byName = new Map();
      for (const h of parsed) {
        if (byName.has(h.name)) {
          // This is an overload - keep the first JSDoc, update signature to this one (implementation)
          const existing = byName.get(h.name);
          existing.signature = h.signature;
        } else {
          byName.set(h.name, { ...h });
        }
      }
      parsed = Array.from(byName.values());
      
      // Use the filename as the primary helper name
      const primaryName = path.basename(file, '.ts');
      const primaryHelper = parsed.find(h => h.name === primaryName) || parsed[0];
      
      // If file has multiple DIFFERENT exports, merge them
      if (parsed.length > 1) {
        primaryHelper.name = primaryName;
        primaryHelper.additionalExports = parsed.filter(h => h !== primaryHelper);
      }
      
      helpers.push({ ...primaryHelper, fileName: primaryName, allExports: parsed });
    }
    
    categoryHelpers[category] = helpers;
    console.log(`   ✅ ${category}: ${helpers.length} helpers`);
  }
  
  // Generate files
  for (const [category, helpers] of Object.entries(categoryHelpers)) {
    if (helpers.length === 0) continue;
    
    const catDir = path.join(DOCS_OUT, category);
    fs.mkdirSync(catDir, { recursive: true });
    
    // Category index
    const indexMd = generateCategoryIndexMd(category, helpers);
    fs.writeFileSync(path.join(catDir, 'index.md'), indexMd);
    
    // Individual helper pages
    for (const helper of helpers) {
      let md;
      
      if (helper.allExports && helper.allExports.length > 1) {
        // Multi-export file (e.g., sort.ts with multiple sort functions)
        md = generateMultiExportMd(helper, category);
      } else {
        md = generateHelperMd(helper, category);
      }
      
      fs.writeFileSync(path.join(catDir, `${helper.fileName}.md`), md);
    }
  }
  
  // Generate sidebar
  const sidebarItems = generateSidebarItems(categoryHelpers);
  console.log('\n📋 Sidebar configuration:');
  console.log(JSON.stringify(sidebarItems, null, 2));
  
  // Write sidebar snippet
  const sidebarPath = path.join(DOCS_OUT, '..', '..', 'sidebar-categories.json');
  fs.writeFileSync(sidebarPath, JSON.stringify(sidebarItems, null, 2));
  console.log(`\n✅ Sidebar config written to ${sidebarPath}`);
  
  console.log('\n🎉 Done! Generated documentation for all helpers.');
}

/**
 * Generate MD for files with multiple exports (like sort.ts)
 */
function generateMultiExportMd(helper, category) {
  let md = `---\nsidebar_label: "${helper.fileName}"\n---\n\n`;
  md += `# ${helper.fileName}\n\n`;
  
  // Main description from the first or primary export
  const primaryParsed = parseJsdoc(helper.jsdoc);
  if (primaryParsed.description) {
    md += `${primaryParsed.description}\n\n`;
  }
  
  md += `## Import\n\n`;
  const names = helper.allExports.map(e => e.name).join(', ');
  md += `\`\`\`ts\nimport { ${names} } from '@helpers4/${category}';\n\`\`\`\n\n`;
  
  // Each export as a section
  for (const exp of helper.allExports) {
    const parsed = parseJsdoc(exp.jsdoc);
    const sig = cleanSignature(exp.signature);
    
    md += `## \`${exp.name}\`\n\n`;
    
    if (parsed.description) {
      md += `${parsed.description}\n\n`;
    }
    
    md += `\`\`\`ts\n${sig}\n\`\`\`\n\n`;
    
    if (parsed.params.length > 0) {
      md += `| Parameter | Description |\n`;
      md += `|-----------|-------------|\n`;
      for (const p of parsed.params) {
        md += `| \`${p.name}\` | ${p.desc} |\n`;
      }
      md += `\n`;
    }
    
    if (parsed.returns) {
      md += `**Returns:** ${parsed.returns}\n\n`;
    }
    
    if (parsed.examples.length > 0) {
      for (const example of parsed.examples) {
        md += `\`\`\`ts\n${example}\n\`\`\`\n\n`;
      }
    }
  }
  
  md += `## Source\n\n`;
  md += `[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/${category}/${helper.fileName}.ts)\n`;
  
  return md;
}

main();
