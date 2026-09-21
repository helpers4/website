/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Checks every internal link of the built site (`dist/`). Each `href` is resolved against the URL
 * of the page that contains it, exactly as a browser does, and must land on a file that exists.
 * Exits with 1 when any link is broken. Run it after `pnpm build`: `pnpm run check:links`.
 *
 * External links are not checked here (see the lychee workflow).
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
if (!fs.existsSync(dist)) {
  console.error(`No build output at ${dist}: run "pnpm build" first.`);
  process.exit(2);
}

const SKIPPED = /^(https?:|mailto:|tel:|javascript:|data:|#)/i;

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

function exists(urlPath) {
  const target = path.join(dist, decodeURIComponent(urlPath));
  return (
    (fs.existsSync(target) && fs.statSync(target).isFile()) ||
    fs.existsSync(path.join(target, 'index.html')) ||
    fs.existsSync(`${target}.html`)
  );
}

const broken = new Map();
let pages = 0;
let links = 0;
for (const file of htmlFiles(dist)) {
  pages += 1;
  const pageUrl = `/${path.relative(dist, file).split(path.sep).join('/')}`.replace(/index\.html$/, '');
  const body = fs.readFileSync(file, 'utf8').replace(/<head>[\s\S]*?<\/head>/, '');
  for (const [, href] of body.matchAll(/\shref="([^"]+)"/g)) {
    if (SKIPPED.test(href)) continue;
    links += 1;
    const { pathname } = new URL(href, `http://site.invalid${pageUrl}`);
    if (!exists(pathname)) broken.set(`${pageUrl} -> ${href}`, pathname);
  }
}

console.log(`${pages} pages, ${links} internal links, ${broken.size} broken`);
for (const [where, resolved] of [...broken].slice(0, 50)) console.log(`  ${where}  (${resolved})`);
if (broken.size > 50) console.log(`  … and ${broken.size - 50} more`);
process.exit(broken.size ? 1 : 0);
