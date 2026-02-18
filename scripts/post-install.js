#!/usr/bin/env node

/**
 * Post-install script to copy webawesome-pro LLM documentation to .copilot folder.
 * 
 * This script:
 * 1. Creates the .copilot directory if it doesn't exist
 * 2. Copies llms.txt from @awesome.me/webawesome-pro
 * 3. Renames it with "webawesome-" prefix
 * 
 * Node 24+ features used:
 * - import.meta.dirname: No need for fileURLToPath
 * - fs/promises: Modern async API
 */

import { mkdir, access, copyFile } from 'fs/promises';
import path from 'path';

const rootDir = path.dirname(import.meta.dirname);
const source = path.join(
  rootDir,
  'landing/node_modules/@awesome.me/webawesome-pro/dist/llms.txt'
);
const copilotDir = path.join(rootDir, '.copilot');
const destination = path.join(copilotDir, 'webawesome-llms.txt');

try {
  // Create .copilot directory if it doesn't exist (recursive: true makes it safe)
  await mkdir(copilotDir, { recursive: true });
  console.log(`✓ Ensured .copilot directory exists`);

  // Check if source file exists
  try {
    await access(source);
  } catch {
    console.warn(`⚠ Source file not found: ${source}`);
    console.warn(`  Make sure @awesome.me/webawesome-pro is installed in landing/node_modules`);
    process.exit(0);
  }

  // Copy the file with new name
  await copyFile(source, destination);
  console.log(`✓ Copied webawesome llms.txt to .copilot/webawesome-llms.txt`);
} catch (error) {
  console.error('✗ Error in post-install script:', error.message);
  process.exit(1);
}
