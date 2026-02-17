#!/usr/bin/env node

/**
 * Script: generate-typescript-docs.js
 * 
 * Generates TypeScript API documentation from the typescript repo's source code.
 * 
 * This script:
 * 1. Clones/updates the typescript repo (if not exists)
 * 2. Runs typedoc to generate API docs
 * 3. Converts to Docusaurus format
 * 4. Handles versioning (v1, v2, current)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const typescriptRepoPath = path.join(rootDir, '..', 'typescript');
const docsOutputPath = path.join(rootDir, 'docs', 'typescript', 'docs', 'categories');

console.log('📚 Generating TypeScript API documentation...\n');

// Check if typescript repo exists
if (!fs.existsSync(typescriptRepoPath)) {
  console.error('❌ TypeScript repo not found at:', typescriptRepoPath);
  console.error('Make sure the typescript repo is cloned alongside this repo.');
  process.exit(1);
}

// Create output directory
if (!fs.existsSync(docsOutputPath)) {
  fs.mkdirSync(docsOutputPath, { recursive: true });
}

try {
  // List all helper categories
  const helpersPath = path.join(typescriptRepoPath, 'helpers');
  
  if (!fs.existsSync(helpersPath)) {
    console.warn('⚠ Helpers directory not found');
    process.exit(0);
  }

  const categories = fs.readdirSync(helpersPath).filter(f => 
    fs.statSync(path.join(helpersPath, f)).isDirectory()
  );

  console.log(`📁 Found ${categories.length} categories:\n`);

  // Generate stub documentation for each category
  for (const category of categories) {
    const docFile = path.join(docsOutputPath, `${category}.md`);
    
    const content = `---
sidebar_position: ${categories.indexOf(category) + 1}
title: ${category.charAt(0).toUpperCase() + category.slice(1)}
---

# ${category.charAt(0).toUpperCase() + category.slice(1)} Utilities

Helpers for ${category} operations.

## Available Functions

Browse the category in the [API reference](#).

### Common Functions

- Check the [API Reference](../api) for all available functions in this category

## Examples

See the documentation for detailed examples.

---

For more information, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/${category})
`;

    fs.writeFileSync(docFile, content);
    console.log(`  ✓ ${category}`);
  }

  console.log(`\n✅ Generated documentation for ${categories.length} categories`);
  console.log(`📁 Output: ${docsOutputPath}\n`);

} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}
