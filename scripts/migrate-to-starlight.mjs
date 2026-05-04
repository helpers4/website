/**
 * Migration script: Docusaurus docs → Starlight src/content/docs/
 *
 * Transformations appliquées :
 *  - intro.md (slug: /) → index.md
 *  - sidebar_position: N → sidebar.order (dans frontmatter)
 *  - sidebar_label: "X"  → sidebar.label / title (dans frontmatter)
 *  - slug: /             → supprimé (géré par index.md)
 *  - slug: /xxx          → supprimé (Starlight gère par chemin de fichier)
 */

import fs from 'node:fs';
import path from 'node:path';

const SRC_DOCS = [
  { src: 'docs/typescript/docs', dest: 'src/content/docs/typescript' },
  { src: 'docs/devcontainer/docs', dest: 'src/content/docs/devcontainer' },
  { src: 'docs/github-action/docs', dest: 'src/content/docs/action' },
];

const ROOT = new URL('..', import.meta.url).pathname;

/**
 * Transform Docusaurus frontmatter to Starlight frontmatter.
 * Returns the transformed file content.
 */
function transformFrontmatter(content, isIntroFile) {
  // Extract frontmatter block
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return content;

  const fmRaw = fmMatch[1];
  const afterFm = content.slice(fmMatch[0].length);

  // Parse key: value lines (simple, no nested yaml)
  const lines = fmRaw.split('\n');
  const fields = {};
  for (const line of lines) {
    const m = line.match(/^(\w[\w_-]*):\s*(.+)$/);
    if (m) fields[m[1]] = m[2].trim();
  }

  // Build new frontmatter
  const newFields = {};

  // title
  if (fields.title) {
    newFields.title = fields.title;
  }

  // description
  if (fields.description) {
    newFields.description = fields.description;
  }

  // sidebar
  const sidebarEntries = [];
  if (fields.sidebar_label) {
    // Remove surrounding quotes if present
    const label = fields.sidebar_label.replace(/^["']|["']$/g, '');
    sidebarEntries.push(`  label: ${JSON.stringify(label)}`);
  }
  if (fields.sidebar_position) {
    sidebarEntries.push(`  order: ${fields.sidebar_position}`);
  }
  if (fields.sidebar_class_name) {
    // drop it — not needed in Starlight
  }

  // slug → drop (Starlight uses file path)
  // hide_table_of_contents → tableOfContents: false
  if (fields.hide_table_of_contents === 'true') {
    newFields.tableOfContents = false;
  }

  // Build output
  const outLines = [];
  for (const [k, v] of Object.entries(newFields)) {
    if (typeof v === 'boolean') {
      outLines.push(`${k}: ${v}`);
    } else {
      outLines.push(`${k}: ${v}`);
    }
  }
  if (sidebarEntries.length > 0) {
    outLines.push('sidebar:');
    outLines.push(...sidebarEntries);
  }

  const newFm = outLines.length > 0
    ? `---\n${outLines.join('\n')}\n---`
    : '---\n---';

  return newFm + afterFm;
}

function copyDir(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destName = entry.name;

    if (entry.isDirectory()) {
      copyDir(srcPath, path.join(destDir, destName));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      let content = fs.readFileSync(srcPath, 'utf8');

      // Detect if this is an intro file (slug: /) → rename to index.md
      const isIntro = /^---[\s\S]*?^slug:\s*\/\s*$/m.test(content);
      const outName = isIntro ? 'index.md' : destName;
      const outPath = path.join(destDir, outName);

      content = transformFrontmatter(content, isIntro);
      fs.writeFileSync(outPath, content, 'utf8');
      console.log(`  ✓ ${path.relative(ROOT, srcPath)} → ${path.relative(ROOT, outPath)}`);
    }
  }
}

console.log('Migrating Markdown content to src/content/docs/...\n');

for (const { src, dest } of SRC_DOCS) {
  const srcAbs = path.join(ROOT, src);
  const destAbs = path.join(ROOT, dest);
  console.log(`📁 ${src} → ${dest}`);
  if (!fs.existsSync(srcAbs)) {
    console.warn(`  ⚠️  Source not found, skipping.`);
    continue;
  }
  copyDir(srcAbs, destAbs);
  console.log();
}

console.log('Done.');
