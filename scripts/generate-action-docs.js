#!/usr/bin/env node

/**
 * Script: generate-action-docs.js
 * 
 * Generates GitHub Action documentation from README files.
 * Converts from GitHub markdown to Docusaurus format.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const actionRepoPath = path.join(rootDir, '..', 'action');
const docsOutputPath = path.join(rootDir, 'src', 'content', 'docs', 'action', 'actions');

console.log('📚 Generating GitHub Action documentation...\n');

// Check if action repo exists
if (!fs.existsSync(actionRepoPath)) {
  console.error('❌ Action repo not found at:', actionRepoPath);
  console.error('Make sure the action repo is cloned alongside this repo.');
  process.exit(1);
}

// Create output directory
if (!fs.existsSync(docsOutputPath)) {
  fs.mkdirSync(docsOutputPath, { recursive: true });
}

try {
  const actions = [];
  const entries = fs.readdirSync(actionRepoPath);

  // Find all action directories (has action.yml)
  for (const entry of entries) {
    const entryPath = path.join(actionRepoPath, entry);
    const stat = fs.statSync(entryPath);

    if (stat.isDirectory()) {
      const actionYml = path.join(entryPath, 'action.yml');
      if (fs.existsSync(actionYml)) {
        actions.push({
          name: entry,
          path: entryPath,
          readme: path.join(entryPath, 'README.md')
        });
      }
    }
  }

  if (actions.length === 0) {
    console.error('❌ No actions found (looking for action.yml files)');
    process.exit(0);
  }

  console.log(`📁 Found ${actions.length} actions:\n`);

  for (const [index, action] of actions.entries()) {
    if (fs.existsSync(action.readme)) {
      let content = fs.readFileSync(action.readme, 'utf-8');

      // Extract H1 for frontmatter title and remove it from the body
      const h1Match = content.match(/^# (.+)$/m);
      const title = h1Match ? h1Match[1].trim() : action.name;
      if (h1Match) {
        content = content.replace(/^# .+\n?/m, '').replace(/^\n/, '');
      }

      const frontmatter = `---\ntitle: ${JSON.stringify(title)}\nsidebar:\n  order: ${index + 1}\n---\n\n`;

      content = frontmatter + content;

      const docsPath = path.join(docsOutputPath, `${action.name}.md`);
      fs.writeFileSync(docsPath, content);
      console.log(`  ✓ ${action.name}`);
    }
  }

  console.log(`\n✅ Generated documentation for ${actions.length} actions`);
  console.log(`📁 Output: ${docsOutputPath}\n`);

} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}
