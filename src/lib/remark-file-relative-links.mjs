/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Remark plugin: fixes the relative links of a docs page that resolve to a page that does not
 * exist.
 *
 * The site serves every page with a trailing slash (`/typescript/categories/array/compact/`), so
 * a browser resolves `../object/compact/` from there against the page's *directory*
 * (`/typescript/categories/array/object/compact/`, a 404). Part of the content was written that
 * way (and works); part was written relative to the Markdown *file* — `../object/compact/` meant
 * `/typescript/categories/object/compact/` — and only works with the other reading.
 *
 * For every relative link this plugin tries both readings against the set of docs pages that
 * exist. The directory reading wins when it matches (that is what the browser does today, so no
 * working link can change), the file reading is used when it is the only one that matches, and a
 * link that matches neither is left exactly as written. The result is an absolute path.
 *
 * Absolute paths, URLs with a scheme, `#anchors` and `?queries` are never touched, nor are images.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docsRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content', 'docs');

/** URL path of a docs file, without extension and without a trailing slash (`/a/b/c`, `/a/b`). */
function pageUrl(filePath) {
  const relative = path.relative(docsRoot, filePath).split(path.sep).join('/').replace(/\.mdx?$/, '');
  return `/${relative}`.replace(/\/index$/, '') || '/';
}

/** Page URLs are lowercase (`countBy.md` is served at `.../countby/`), so existence is compared in lowercase. */
const key = (pathname) => (pathname.replace(/\/+$/, '') || '/').toLowerCase();

let pages;
function existingPages() {
  if (pages) return pages;
  pages = new Set();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.mdx?$/.test(entry.name)) pages.add(key(pageUrl(full)));
    }
  };
  walk(docsRoot);
  return pages;
}

/**
 * `pageFileUrl` is the page's URL path without trailing slash (`/typescript/categories/array/compact`);
 * `isIndex` says whether the file is an `index.md`, whose URL is the directory itself.
 */
export function resolveRelativeLink(url, pageFileUrl, isIndex, known = existingPages()) {
  if (!url || /^([a-z][a-z0-9+.-]*:|\/|#|\?)/i.test(url)) return url;
  const directory = `${pageFileUrl}/`; // what the browser does: the served URL always ends with a slash
  const file = isIndex ? `${pageFileUrl}/` : pageFileUrl; // what a link written for the Markdown file means
  const candidates = [directory, file].map((base) => new URL(url, `http://docs.invalid${base}`));
  const match = candidates.find((c) => known.has(key(c.pathname)));
  // Starlight slugs are lowercase, so a link written in another case is emitted in lowercase.
  return match ? match.pathname.toLowerCase() + match.search + match.hash : url;
}

export default function remarkFileRelativeLinks() {
  return (tree, file) => {
    const filePath = file.path && path.resolve(file.path);
    if (!filePath || !filePath.startsWith(docsRoot + path.sep)) return;
    const isIndex = /(^|[\\/])index\.mdx?$/.test(filePath);
    const pageFileUrl = pageUrl(filePath);
    const walk = (node) => {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = resolveRelativeLink(node.url, pageFileUrl, isIndex);
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}
