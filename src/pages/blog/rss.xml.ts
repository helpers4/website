/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Blog feed (RSS 2.0) at /blog/rss.xml — static, generated at build time.
 */

import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET({ site }: APIContext) {
  const base = site!;
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  const feedUrl = new URL('/blog/rss.xml', base).href;

  const items = posts.map((post) => {
    const url = new URL(`/blog/${post.id}/`, base).href;
    const categories = post.data.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join('\n');
    return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <dc:date>${post.data.date.toISOString()}</dc:date>
      <dc:creator>${escapeXml(post.data.author)}</dc:creator>
${categories}
      <description>${escapeXml(post.data.excerpt)}</description>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>helpers4 blog</title>
    <link>${new URL('/blog/', base).href}</link>
    <description>Updates, releases, and thoughts on open-source developer tooling.</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
