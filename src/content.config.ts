import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // `version` is set on generated typescript function pages (see
    // scripts/generate-typescript-docs.js) — the library version that generation run reflects,
    // rendered next to "Last updated" (see src/components/LastUpdated.astro). Optional: hand-
    // authored pages (comparisons, philosophy, ...) have no single version to attribute to.
    schema: docsSchema({ extend: z.object({ version: z.string().optional() }) }),
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string(),
      tags: z.array(z.string()).default([]),
      excerpt: z.string(),
      draft: z.boolean().default(false),
    }),
  }),
};
