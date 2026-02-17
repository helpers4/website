#!/usr/bin/env node

/**
 * Script: generate-devcontainer-docs.js
 * 
 * Generates DevContainer feature documentation from README files.
 * Converts from GitHub markdown to Docusaurus format.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const devcontainerRepoPath = path.join(rootDir, '..', 'devcontainer');
const docsOutputPath = path.join(rootDir, 'docs', 'devcontainer', 'docs', 'features');

console.log('📚 Generating DevContainer feature documentation...\n');

// Check if devcontainer repo exists
if (!fs.existsSync(devcontainerRepoPath)) {
  console.error('❌ DevContainer repo not found at:', devcontainerRepoPath);
  console.error('Make sure the devcontainer repo is cloned alongside this repo.');
  process.exit(1);
}

// Create output directory
if (!fs.existsSync(docsOutputPath)) {
  fs.mkdirSync(docsOutputPath, { recursive: true });
}

try {
  const featuresPath = path.join(devcontainerRepoPath, 'src');
  
  if (!fs.existsSync(featuresPath)) {
    console.error('❌ Features directory not found at:', featuresPath);
    process.exit(1);
  }

  const features = fs.readdirSync(featuresPath).filter(f =>
    fs.statSync(path.join(featuresPath, f)).isDirectory()
  );

  console.log(`📁 Found ${features.length} features:\n`);

  for (const [index, feature] of features.entries()) {
    const featureReadme = path.join(featuresPath, feature, 'README.md');
    const docsPath = path.join(docsOutputPath, `${feature}.md`);

    if (fs.existsSync(featureReadme)) {
      let content = fs.readFileSync(featureReadme, 'utf-8');

      // Convert GitHub markdown to Docusaurus format
      // Add frontmatter
      const frontmatter = `---
sidebar_position: ${index + 1}
---

`;

      content = frontmatter + content;

      fs.writeFileSync(docsPath, content);
      console.log(`  ✓ ${feature}`);
    }
  }

  console.log(`\n✅ Generated documentation for ${features.length} features`);
  console.log(`📁 Output: ${docsOutputPath}\n`);

} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}
