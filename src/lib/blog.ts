/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Blog posts are ordinary Starlight docs pages under docs/blog/ with a `date` in their
 * frontmatter (see src/content.config.ts). Starlight's own `draft: true` keeps a post out of
 * production builds; it is filtered here too so lists, the feed and the homepage agree.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'docs'> & { data: { date: Date; description: string } };

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'docs',
    ({ id, data }) => id.startsWith('blog/') && data.date !== undefined && !(import.meta.env.PROD && data.draft),
  );
  return (posts as Post[]).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postHref(post: Post): string {
  return `/${post.id}/`;
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
