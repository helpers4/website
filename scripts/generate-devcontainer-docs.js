#!/usr/bin/env node

/**
 * Script: generate-devcontainer-docs.js
 *
 * Generates DevContainer feature documentation from README files.
 * Converts from GitHub markdown to Docusaurus format.
 *
 * Active features   → src/<name>/devcontainer-feature.json present → docs/features/
 * Deprecated features → src/<name>/devcontainer-feature.json absent  → docs/features/deprecated/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const devcontainerRepoPath = path.join(rootDir, '..', 'devcontainer');
const docsOutputPath = path.join(rootDir, 'src', 'content', 'docs', 'devcontainer', 'features');
const deprecatedOutputPath = path.join(docsOutputPath, 'deprecated');
const deprecatedSourcePath = path.join(devcontainerRepoPath, 'deprecated');

console.log('📚 Generating DevContainer feature documentation...\n');

// Check if devcontainer repo exists
if (!fs.existsSync(devcontainerRepoPath)) {
  console.error('❌ DevContainer repo not found at:', devcontainerRepoPath);
  console.error('Make sure the devcontainer repo is cloned alongside this repo.');
  process.exit(1);
}

// Create output directories
if (!fs.existsSync(docsOutputPath)) {
  fs.mkdirSync(docsOutputPath, { recursive: true });
}
if (!fs.existsSync(deprecatedOutputPath)) {
  fs.mkdirSync(deprecatedOutputPath, { recursive: true });
}

// Ensure _category_.json exists for the deprecated folder
const categoryFile = path.join(deprecatedOutputPath, '_category_.json');
if (!fs.existsSync(categoryFile)) {
  fs.writeFileSync(categoryFile, JSON.stringify({
    label: 'Deprecated',
    position: 99,
    collapsed: true,
    collapsible: true,
    description: 'Features that have been removed. Pages are kept for reference and migration guidance.',
  }, null, 2) + '\n');
}

try {
  const featuresPath = path.join(devcontainerRepoPath, 'src');

  if (!fs.existsSync(featuresPath)) {
    console.error('❌ Features directory not found at:', featuresPath);
    process.exit(1);
  }

  const activeFeatures = fs.readdirSync(featuresPath).filter(f =>
    fs.statSync(path.join(featuresPath, f)).isDirectory() &&
    fs.existsSync(path.join(featuresPath, f, 'devcontainer-feature.json'))
  );

  const deprecatedFeatures = fs.existsSync(deprecatedSourcePath)
    ? fs.readdirSync(deprecatedSourcePath).filter(f =>
        fs.statSync(path.join(deprecatedSourcePath, f)).isDirectory()
      )
    : [];

  console.log(`📁 Found ${activeFeatures.length} active features:\n`);

  for (const [index, feature] of activeFeatures.entries()) {
    const featureReadme = path.join(featuresPath, feature, 'README.md');
    const docsPath = path.join(docsOutputPath, `${feature}.md`);

    if (fs.existsSync(featureReadme)) {
      let content = fs.readFileSync(featureReadme, 'utf-8');

      // Strip HTML license comment if present
      content = content.replace(/^<!--[\s\S]*?-->\n\n?/, '');

      const frontmatter = `---
sidebar:
  order: ${index + 1}
---

`;

      fs.writeFileSync(docsPath, frontmatter + content);
      console.log(`  ✓ ${feature}`);
    }
  }

  if (deprecatedFeatures.length > 0) {
    console.log(`\n🗂️  Found ${deprecatedFeatures.length} deprecated feature(s):\n`);

    for (const [index, feature] of deprecatedFeatures.entries()) {
      const featureReadme = path.join(deprecatedSourcePath, feature, 'README.md');
      const docsPath = path.join(deprecatedOutputPath, `${feature}.md`);

      if (fs.existsSync(featureReadme)) {
        let content = fs.readFileSync(featureReadme, 'utf-8');

        // Strip HTML license comment if present
        content = content.replace(/^<!--[\s\S]*?-->\n\n?/, '');

        const frontmatter = `---
sidebar:
  order: ${index + 1}
deprecated: true
---

`;

        fs.writeFileSync(docsPath, frontmatter + content);
        console.log(`  ⚠️  ${feature} (deprecated)`);
      }
    }
  }

  console.log(`\n✅ Generated documentation for ${activeFeatures.length} active + ${deprecatedFeatures.length} deprecated features`);
  console.log(`📁 Output: ${docsOutputPath}\n`);

} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}
