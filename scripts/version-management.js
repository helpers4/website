#!/usr/bin/env node

/**
 * Script: version-management.js
 * 
 * Manages Docusaurus versioning for TypeScript documentation.
 * 
 * Commands:
 *   node version-management.js list           - List versions
 *   node version-management.js create <v>     - Create new version
 *   node version-management.js current        - Show current version
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const docusaurusPath = path.join(rootDir, 'docs', 'typescript');
const versionsPath = path.join(docusaurusPath, 'versioned_docs');
const versionsJsonPath = path.join(docusaurusPath, 'versions.json');

const command = process.argv[2];
const arg = process.argv[3];

function readVersionsJson() {
  if (fs.existsSync(versionsJsonPath)) {
    return JSON.parse(fs.readFileSync(versionsJsonPath, 'utf-8'));
  }
  return ['2.0.0'];
}

function listVersions() {
  console.log('📦 Available versions:\n');
  
  const versions = readVersionsJson();
  versions.forEach((v, i) => {
    console.log(`  ${i + 1}. ${v}`);
  });

  // Check for versioned_docs
  if (fs.existsSync(versionsPath)) {
    const versionedDirs = fs.readdirSync(versionsPath);
    if (versionedDirs.length > 0) {
      console.log('\n📁 Versioned docs:');
      versionedDirs.forEach(dir => {
        console.log(`  - ${dir}`);
      });
    }
  }
}

function showCurrent() {
  const versions = readVersionsJson();
  console.log(`\n📍 Current version: ${versions[0]}\n`);
}

if (command === 'list') {
  listVersions();
} else if (command === 'current') {
  showCurrent();
} else if (command === 'create' && arg) {
  console.log(`📝 Version creation would go here: ${arg}`);
  console.log('Note: Use Docusaurus CLI: npm run docusaurus docs:version');
} else {
  console.log('Version Management Script');
  console.log('Usage:');
  console.log('  node version-management.js list     - List all versions');
  console.log('  node version-management.js current  - Show current version');
  console.log('  node version-management.js create <v> - Create new version');
}
