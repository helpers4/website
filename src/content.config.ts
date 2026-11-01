import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // `version` is set on generated typescript function pages (see
        // scripts/generate-typescript-docs.js) — the library version that generation run reflects,
        // rendered next to "Last updated" (see src/components/LastUpdated.astro). Optional: hand-
        // authored pages (comparisons, philosophy, ...) have no single version to attribute to.
        version: z.string().optional(),
        // Blog posts (docs/blog/*.md, see src/lib/blog.ts): `date` is what makes a page a post.
        // The post's summary is Starlight's own `description`.
        date: z.coerce.date().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).default([]),
        // Optional social-preview image (site-relative or absolute URL); falls back to the site default.
        image: z.string().optional(),
      }),
    }),
  }),
};
