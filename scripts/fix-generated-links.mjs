#!/usr/bin/env node

/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

/**
 * One-time repair script for broken links in the committed generated TypeScript docs.
 *
 * Fixes applied:
 * 1. categories/all-functions.md  — add ../ prefix + lowercase + trailing slash
 * 2. categories/<cat>/index.md    — bare function name → ./funcname/
 * 3. reference/changelog.md       — ../categories/cat/FuncName → lowercase + trailing slash
 * 4. reference/naming-conflicts.md — same
 * 5. categories/<cat>/<fn>.md     — cross-category ../cat/FuncName → lowercase + trailing slash
 *                                  — ../../reference/naming-conflicts → add trailing slash
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const tsDocsDir = path.join(rootDir, 'src', 'content', 'docs', 'typescript');
const categoriesDir = path.join(tsDocsDir, 'categories');
const referenceDir = path.join(tsDocsDir, 'reference');

let totalFixed = 0;
let totalPatches = 0;

function patchFile(filePath, ...patchFns) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  for (const fn of patchFns) {
    content = fn(content);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    const rel = path.relative(rootDir, filePath);
    console.log(`  ✓ ${rel}`);
    totalFixed++;
  }
}

/**
 * Fix 1: all-functions.md
 * - ](cat/FuncName) → ](../cat/funcname/)   — add ../ prefix, lowercase, trailing slash
 * - ](cat/) → ](../cat/)                     — add ../ prefix (cat links)
 */
function fixAllFunctions(content) {
  // Function links: ](cat/FuncName) without ../ prefix — add prefix, lowercase fn, trailing slash
  content = content.replace(
    /\]\(([a-z]+)\/([A-Za-z][A-Za-z0-9]*)\)/g,
    (_, cat, fn) => {
      totalPatches++;
      return `](../${cat}/${fn.toLowerCase()}/)`;
    }
  );
  // Category links: ](cat/) without ../ prefix
  content = content.replace(
    /\]\(([a-z]+)\/\)/g,
    (_, cat) => {
      totalPatches++;
      return `](../${cat}/)`;
    }
  );
  return content;
}

/**
 * Fix 2: category index.md
 * - [`FuncName`](FuncName) → [`FuncName`](./funcname/)
 * Only matches bare identifier links (no /, no ., no :// in target).
 */
function fixCategoryIndex(content) {
  // Match backtick-wrapped function links with bare target name
  content = content.replace(
    /\]\(([A-Za-z][A-Za-z0-9]*)\)(?=\s*\|)/g,
    (match, name) => {
      // Skip if it looks like it already has path separators (shouldn't, but safety check)
      if (name.includes('/') || name.includes('.')) return match;
      totalPatches++;
      return `](./${name.toLowerCase()}/)`;
    }
  );
  return content;
}

/**
 * Fix 3: reference/changelog.md and reference/naming-conflicts.md
 * - ](../categories/cat/FuncName) → ](../categories/cat/funcname/)
 */
function fixReferenceLinks(content) {
  content = content.replace(
    /\]\(\.\.\/categories\/([a-z]+)\/([A-Za-z][A-Za-z0-9]*)\)/g,
    (_, cat, fn) => {
      totalPatches++;
      return `](../categories/${cat}/${fn.toLowerCase()}/)`;
    }
  );
  return content;
}

/**
 * Fix 4: individual function pages (categories/<cat>/<fn>.md)
 * - ](../otherCat/FuncName) → ](../othercat/funcname/)   — cross-category links
 * - ](../../reference/naming-conflicts) → add trailing slash
 */
function fixFunctionPageLinks(content) {
  // Cross-category links: ../cat/FuncName → ../cat/funcname/
  content = content.replace(
    /\]\(\.\.\/([a-z]+)\/([A-Za-z][A-Za-z0-9]*)\)/g,
    (_, cat, fn) => {
      totalPatches++;
      return `](../${cat}/${fn.toLowerCase()}/)`;
    }
  );
  // Naming-conflicts reference without trailing slash
  content = content.replace(
    /\]\(\.\.\/\.\.\/reference\/naming-conflicts\)/g,
    () => {
      totalPatches++;
      return '](../../reference/naming-conflicts/)';
    }
  );
  return content;
}

// ─── Run ─────────────────────────────────────────────────────────────────────

console.log('🔧 Fixing broken links in generated TypeScript docs...\n');

// 1. all-functions.md
console.log('📄 categories/all-functions.md');
patchFile(path.join(categoriesDir, 'all-functions.md'), fixAllFunctions);

// 2. Category index pages
const categories = fs.readdirSync(categoriesDir)
  .filter(name => fs.statSync(path.join(categoriesDir, name)).isDirectory());

console.log(`\n📁 Category indexes (${categories.length} categories)`);
for (const cat of categories) {
  patchFile(path.join(categoriesDir, cat, 'index.md'), fixCategoryIndex);
}

// 3. Reference pages
console.log('\n📄 reference/changelog.md and reference/naming-conflicts.md');
patchFile(path.join(referenceDir, 'changelog.md'), fixReferenceLinks);
patchFile(path.join(referenceDir, 'naming-conflicts.md'), fixReferenceLinks);

// 4. Individual function pages
console.log(`\n📁 Individual function pages`);
for (const cat of categories) {
  const catDir = path.join(categoriesDir, cat);
  const files = fs.readdirSync(catDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md');
  for (const file of files) {
    patchFile(path.join(catDir, file), fixFunctionPageLinks);
  }
}

console.log(`\n✅ Fixed ${totalFixed} files (${totalPatches} link patches applied)`);
