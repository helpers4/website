#!/usr/bin/env node

/**
 * Script: generate-action-docs.js
 *
 * Generates GitHub Action documentation from README files, into one flat actions/ folder.
 *
 * Actions come from two kinds of repository, side by side in the same sidebar group:
 *   - the helpers4/action monorepo: one action per folder (<name>/action.yml),
 *     used as `helpers4/action/<name>@v1`;
 *   - one repository per action (MARKETPLACE_ACTIONS): action.yml at the root, which the
 *     GitHub Marketplace requires, used as `helpers4/<name>@vN`.
 *
 * Each source is generated only when its checkout is present (ACTION_REPOS_PATH, default: the
 * parent of this repo), so a release of one repository regenerates only its own pages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const reposPath = process.env.ACTION_REPOS_PATH || path.join(rootDir, '..');
const docsOutputPath = path.join(rootDir, 'src', 'content', 'docs', 'action', 'actions');

/** Actions released from their own repository (helpers4/<name>), for the Marketplace. */
const MARKETPLACE_ACTIONS = ['action-release'];

console.log('📚 Generating GitHub Action documentation...\n');

/** Strips the H1 (Starlight renders `title:`) and returns it with the remaining body. */
function splitTitle(content, fallback) {
  const h1Match = content.match(/^# (.+)$/m);
  if (!h1Match) return { title: fallback, body: content };
  return { title: h1Match[1].trim(), body: content.replace(/^# .+\n?/m, '').replace(/^\n/, '') };
}

function writePage(name, { title, badge, body }) {
  const badgeYaml = badge ? `\n  badge:\n    text: ${JSON.stringify(badge)}\n    variant: note` : '';
  const frontmatter = `---\ntitle: ${JSON.stringify(title)}\nsidebar:\n  label: ${JSON.stringify(name)}${badgeYaml}\n---\n\n`;
  fs.writeFileSync(path.join(docsOutputPath, `${name}.md`), frontmatter + body);
  console.log(`  ✓ ${name}`);
}

/** The monorepo: every folder with an action.yml. */
function generateMonorepoActions() {
  const repoPath = path.join(reposPath, 'action');
  if (!fs.existsSync(repoPath)) {
    console.log('  – helpers4/action not checked out, skipped');
    return 0;
  }
  let count = 0;
  for (const entry of fs.readdirSync(repoPath).sort()) {
    const entryPath = path.join(repoPath, entry);
    if (!fs.statSync(entryPath).isDirectory() || !fs.existsSync(path.join(entryPath, 'action.yml'))) continue;
    const readme = path.join(entryPath, 'README.md');
    if (!fs.existsSync(readme)) continue;
    const { title, body } = splitTitle(fs.readFileSync(readme, 'utf-8'), entry);
    const origin = `:::note[helpers4/action]\nPart of the [helpers4/action](https://github.com/helpers4/action/tree/main/${entry}) repository: \`uses: helpers4/action/${entry}@v1\`.\n:::\n\n`;
    writePage(entry, { title, body: origin + body });
    count += 1;
  }
  return count;
}

/** One repository per action: README.md, plus docs/troubleshooting.md appended when present. */
function generateMarketplaceActions() {
  let count = 0;
  for (const name of MARKETPLACE_ACTIONS) {
    const repoPath = path.join(reposPath, name);
    if (!fs.existsSync(path.join(repoPath, 'action.yml'))) {
      console.log(`  – helpers4/${name} not checked out, skipped`);
      continue;
    }
    const version = JSON.parse(fs.readFileSync(path.join(repoPath, 'package.json'), 'utf-8')).version ?? '0.0.0';
    const major = `v${version.split('.')[0]}`;
    let { title, body } = splitTitle(fs.readFileSync(path.join(repoPath, 'README.md'), 'utf-8'), name);

    const troubleshooting = path.join(repoPath, 'docs', 'troubleshooting.md');
    if (fs.existsSync(troubleshooting)) {
      // One level down: the doc's H1 becomes an H2 section of this page.
      const doc = fs.readFileSync(troubleshooting, 'utf-8').replace(/^(#+) /gm, '#$1 ');
      body = body.replace(/\[docs\/troubleshooting\.md\]\(docs\/troubleshooting\.md\)/g, '[Troubleshooting](#troubleshooting)');
      body = `${body.trimEnd()}\n\n${doc}`;
    }
    // Relative links point into the repository, not the site.
    body = body.replace(/\]\((?!https?:|#|\/)([^)]+)\)/g, `](https://github.com/helpers4/${name}/blob/main/$1)`);

    const origin = `:::note[Own repository]\nReleased from [helpers4/${name}](https://github.com/helpers4/${name}), as the GitHub Marketplace requires: \`uses: helpers4/${name}@${major}\` (latest: ${version}).\n:::\n\n`;
    writePage(name, { title, badge: 'Marketplace', body: origin + body });
    count += 1;
  }
  return count;
}

try {
  fs.mkdirSync(docsOutputPath, { recursive: true });
  const count = generateMonorepoActions() + generateMarketplaceActions();
  console.log(`\n✅ Generated documentation for ${count} actions`);
  console.log(`📁 Output: ${docsOutputPath}\n`);
} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
}
