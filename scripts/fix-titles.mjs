/**
 * Fix missing `title` in frontmatter: extracts first H1 and inserts as title.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = new URL('../src/content/docs', import.meta.url).pathname;
let fixed = 0, skipped = 0;

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) { processDir(fullPath); continue; }
    if (!entry.name.endsWith('.md')) continue;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if frontmatter exists
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fmMatch) { skipped++; continue; }

    const fmBlock = fmMatch[0]; // "---\n...\n---\n"
    const fmInner = fmMatch[1];
    const hasTitle = /^title:/m.test(fmInner);

    // Body = everything after the closing "---\n"
    let body = content.slice(fmBlock.length);

    // Find H1 only before any code block (to avoid stripping shell comments like "# On host")
    const codeBlockIdx = body.search(/^```/m);
    const searchZone = codeBlockIdx === -1 ? body : body.slice(0, codeBlockIdx);
    const h1Match = searchZone.match(/^# (.+)\n?/m);

    let changed = false;

    if (!hasTitle) {
      if (!h1Match) { console.log('⚠ no H1:', path.relative(ROOT, fullPath)); skipped++; continue; }
      const title = h1Match[1].trim();
      // Add title to frontmatter
      const newFm = fmBlock.replace(/^---\n/, `---\ntitle: ${JSON.stringify(title)}\n`);
      // Strip the H1 line from body
      body = body.replace(h1Match[0], '').replace(/^\n/, '');
      content = newFm + body;
      changed = true;
    } else if (h1Match) {
      // Already has title but still has H1 in body: strip it
      body = body.replace(h1Match[0], '').replace(/^\n/, '');
      content = fmBlock + body;
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
      fixed++;
    } else {
      skipped++;
    }
  }
}

processDir(ROOT);
console.log(`Fixed: ${fixed} / Skipped (already ok): ${skipped}`);
