/**
 * Fix missing `title` in frontmatter: extracts first H1 and inserts as title.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/workspaces/website/src/content/docs';
let fixed = 0, skipped = 0;

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) { processDir(fullPath); continue; }
    if (!entry.name.endsWith('.md')) continue;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if frontmatter already has title
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) { skipped++; continue; }

    if (/^title:/m.test(fmMatch[1])) { skipped++; continue; }

    // Extract first H1 from content body (after frontmatter)
    const body = content.slice(fmMatch[0].length);
    const h1Match = body.match(/^# (.+)/m);
    if (!h1Match) { console.log('⚠ no H1:', path.relative(ROOT, fullPath)); skipped++; continue; }

    const title = h1Match[1].trim();
    // Insert title at start of frontmatter
    content = content.replace(/^---\n/, `---\ntitle: ${JSON.stringify(title)}\n`);
    fs.writeFileSync(fullPath, content, 'utf8');
    fixed++;
  }
}

processDir(ROOT);
console.log(`Fixed: ${fixed} / Skipped (already ok): ${skipped}`);
