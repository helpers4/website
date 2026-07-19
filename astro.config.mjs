/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightSidebarTopics from 'starlight-sidebar-topics';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(rootDir, 'src', 'content', 'docs');
const versions = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'versions.json'), 'utf-8'));

/**
 * Builds one typescript topic's `items` for a given version slot (root/next/vN), reading the
 * real content directory to decide whether to include the Comparisons group — older archives
 * (e.g. v1) don't have one, and this way nothing has to remember to omit it by hand.
 */
function typescriptTopicItems(slug) {
  const items = [
    { slug },
    { slug: `${slug}/getting-started` },
    { label: 'Categories', items: [{ autogenerate: { directory: `${slug}/categories` } }] },
    { label: 'Reference', items: [{ autogenerate: { directory: `${slug}/reference` } }] },
  ];
  if (fs.existsSync(path.join(docsDir, slug, 'comparisons'))) {
    items.push({ label: 'Comparisons', items: [{ autogenerate: { directory: `${slug}/comparisons` } }] });
  }
  items.push({ label: 'Legal', items: [{ autogenerate: { directory: `${slug}/legal` } }] });
  items.push({ label: 'Ask DeepWiki', link: 'https://deepwiki.com/helpers4/typescript' });
  return items;
}

function typescriptTopic(id, slug) {
  return {
    id,
    label: 'TypeScript',
    link: `/${slug}/`,
    icon: 'seti:typescript',
    items: typescriptTopicItems(slug),
  };
}

// One real, independently-`autogenerate`d Starlight topic per typescript version — driven by
// src/data/versions.json instead of hand-listed, so a future archiveStableIfMajorBump() run
// (see scripts/generate-typescript-docs.js) that adds a new "archive" entry is picked up here
// automatically on the next build, with no manual edit to this file. They'd normally show up as
// separate "TypeScript" entries in the topic switcher; TopicsSwitcher.astro (registered as the
// Sidebar override, see src/components/Sidebar.astro) collapses same-label topics into one
// visible row instead — topic *resolution* is independent of what the switcher *displays*.
const ROLE_ORDER = { latest: 0, next: 1, archive: 2 };

function typescriptTopicId(entry) {
  if (entry.role === 'latest') return 'typescript';
  if (entry.role === 'next') return 'typescript-next';
  // archive: derive from the slug's own vN segment, e.g. "typescript/v1" -> "typescript-v1"
  return `typescript-${entry.slug.split('/').pop()}`;
}

const typescriptTopics = versions.typescript
  .filter((v) => v.role in ROLE_ORDER)
  .sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role])
  .map((v) => typescriptTopic(typescriptTopicId(v), v.slug));

export default defineConfig({
  site: 'https://helpers4.dev',
  integrations: [
    starlight({
      title: 'helpers4',
      description: 'Open-source developer tools built for real projects.',
      favicon: '/favicon.svg',
      lastUpdated: true,
      logo: {
        src: './src/assets/helpers4-logo.png',
        alt: 'helpers4',
      },
      plugins: [
        starlightSidebarTopics([
          ...typescriptTopics,
          {
            label: 'Dev Container',
            link: '/devcontainer/',
            icon: 'seti:docker',
            items: [
              { slug: 'devcontainer' },
              { slug: 'devcontainer/getting-started' },
              { label: 'Features', items: [{ autogenerate: { directory: 'devcontainer/features' } }] },
              { label: 'Deprecated', collapsed: true, items: [{ autogenerate: { directory: 'devcontainer/deprecated' } }] },
              { label: 'Reference', items: [{ autogenerate: { directory: 'devcontainer/reference' } }] },
              { label: 'Legal', items: [{ autogenerate: { directory: 'devcontainer/legal' } }] },
              { label: 'Ask DeepWiki', link: 'https://deepwiki.com/helpers4/devcontainer' },
            ],
          },
          {
            label: 'GitHub Actions',
            link: '/action/',
            icon: 'github',
            items: [
              { slug: 'action' },
              { slug: 'action/getting-started' },
              { label: 'Actions', items: [{ autogenerate: { directory: 'action/actions' } }] },
              { label: 'Reference', items: [{ autogenerate: { directory: 'action/reference' } }] },
              { label: 'Legal', items: [{ autogenerate: { directory: 'action/legal' } }] },
              { label: 'Ask DeepWiki', link: 'https://deepwiki.com/helpers4/action' },
            ],
          },
        ]),
        starlightThemeNova(),
      ],
      components: {
        MarkdownContent: './src/components/MarkdownContent.astro',
        Search: './src/components/Search.astro',
        Sidebar: './src/components/Sidebar.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/helpers4/website/edit/main/',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/helpers4' },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
