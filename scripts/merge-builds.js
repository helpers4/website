/**
 * Script: merge-builds.js
 * 
 * Merges all build outputs into a single dist/ directory:
 * - Landing page (Qwik) → dist/
 * - TypeScript docs (Docusaurus) → dist/ts/
 * - DevContainer docs (Docusaurus) → dist/dev-container/
 * - Action docs (Docusaurus) → dist/action/
 * 
 * Creates a .nojekyll file to signal Github Pages to treat as raw HTML
 * and allow directories starting with underscore (_next, _document, etc.)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Clean existing dist directory
 */
function cleanDist() {
  const distPath = path.join(rootDir, 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
  }
}

/**
 * Main merge process
 */
function mergeBuild() {
  console.log('🔨 Merging build outputs...\n');

  cleanDist();

  const distRoot = path.join(rootDir, 'dist');
  fs.mkdirSync(distRoot, { recursive: true });

  // Copy landing page (Qwik) to root
  const landingDist = path.join(rootDir, 'landing', 'dist');
  if (fs.existsSync(landingDist)) {
    console.log('✓ Copying landing page to dist/');
    const entries = fs.readdirSync(landingDist);
    for (const entry of entries) {
      const src = path.join(landingDist, entry);
      const dest = path.join(distRoot, entry);
      const stat = fs.statSync(src);
      if (stat.isDirectory()) {
        copyDir(src, dest);
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  } else {
    console.warn('⚠ Landing build not found at:', landingDist);
  }

  // Copy TypeScript docs to dist/ts/
  const tsDist = path.join(rootDir, 'docs', 'typescript', 'build');
  if (fs.existsSync(tsDist)) {
    console.log('✓ Copying TypeScript docs to dist/ts/');
    copyDir(tsDist, path.join(distRoot, 'ts'));
  } else {
    console.warn('⚠ TypeScript docs build not found at:', tsDist);
  }

  // Copy DevContainer docs to dist/dev-container/
  const devcontainerDist = path.join(rootDir, 'docs', 'devcontainer', 'build');
  if (fs.existsSync(devcontainerDist)) {
    console.log('✓ Copying DevContainer docs to dist/dev-container/');
    copyDir(devcontainerDist, path.join(distRoot, 'dev-container'));
  } else {
    console.warn('⚠ DevContainer docs build not found at:', devcontainerDist);
  }

  // Copy Action docs to dist/action/
  const actionDist = path.join(rootDir, 'docs', 'github-action', 'build');
  if (fs.existsSync(actionDist)) {
    console.log('✓ Copying Action docs to dist/action/');
    copyDir(actionDist, path.join(distRoot, 'action'));
  } else {
    console.warn('⚠ Action docs build not found at:', actionDist);
  }

  // Create .nojekyll for Github Pages
  const nojekyllPath = path.join(distRoot, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll (Github Pages signal)');

  console.log('\n✅ Build merge complete!');
  console.log(`📦 Output directory: ${distRoot}\n`);
}

// Run script
mergeBuild();
