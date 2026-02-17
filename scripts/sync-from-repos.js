#!/usr/bin/env node

/**
 * Script: sync-from-repos.js
 * 
 * Synchronizes documentation from source repositories:
 * - typescript: Generate category docs from helpers/
 * - devcontainer: Pull README from features
 * - action: Pull README from actions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

console.log('🔄 Syncing documentation from all repositories...\n');

const generators = [
  { name: 'TypeScript', script: 'generate-typescript-docs.js', cmd: 'pnpm generate-docs:typescript' },
  { name: 'DevContainer', script: 'generate-devcontainer-docs.js', cmd: 'pnpm generate-docs:devcontainer' },
  { name: 'Action', script: 'generate-action-docs.js', cmd: 'pnpm generate-docs:action' }
];

let failed = [];

for (const generator of generators) {
  try {
    console.log(`📚 Generating ${generator.name} documentation...`);
    execSync(`node scripts/${generator.script}`, {
      cwd: rootDir,
      stdio: 'inherit'
    });
  } catch (error) {
    console.error(`❌ Failed to generate ${generator.name} docs`);
    failed.push(generator.name);
  }
}

console.log('\n' + '='.repeat(60));

if (failed.length === 0) {
  console.log('✅ All documentation synced successfully!\n');
} else {
  console.log(`⚠️  ${failed.length} repositories failed to sync:`);
  failed.forEach(f => console.log(`   - ${f}`));
  console.log('');
}
