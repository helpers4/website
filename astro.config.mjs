/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightSidebarTopics from 'starlight-sidebar-topics';

export default defineConfig({
  site: 'https://helpers4.dev',
  integrations: [
    starlight({
      title: 'helpers4',
      description: 'Open-source developer tools built for real projects.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/helpers4-logo.png',
        alt: 'helpers4',
      },
      plugins: [
        starlightSidebarTopics([
          // One topic per typescript version, each independently `autogenerate`d from its own
          // directory — this is what makes every version's sidebar correct by construction
          // (v1 really only has 4 categories, no Comparisons section; next has full parity with
          // root). They'd normally all show up as separate "TypeScript" entries in the topic
          // switcher; TopicsSwitcher.astro (registered as the Sidebar override, see
          // src/components/Sidebar.astro) collapses same-label topics into one visible row
          // instead — topic *resolution* is independent of what the switcher *displays*.
          // Order matters: TopicsSwitcher keeps the first same-label topic as the visible
          // link/icon, so the latest stable stays listed first.
          {
            id: 'typescript',
            label: 'TypeScript',
            link: '/typescript/',
            icon: 'seti:typescript',
            items: [
              { slug: 'typescript' },
              { slug: 'typescript/getting-started' },
              { label: 'Categories', items: [{ autogenerate: { directory: 'typescript/categories' } }] },
              { label: 'Reference', items: [{ autogenerate: { directory: 'typescript/reference' } }] },
              { label: 'Comparisons', items: [{ autogenerate: { directory: 'typescript/comparisons' } }] },
              { label: 'Legal', items: [{ autogenerate: { directory: 'typescript/legal' } }] },
            ],
          },
          {
            id: 'typescript-next',
            label: 'TypeScript',
            link: '/typescript/next/',
            icon: 'seti:typescript',
            items: [
              { slug: 'typescript/next' },
              { slug: 'typescript/next/getting-started' },
              { label: 'Categories', items: [{ autogenerate: { directory: 'typescript/next/categories' } }] },
              { label: 'Reference', items: [{ autogenerate: { directory: 'typescript/next/reference' } }] },
              { label: 'Comparisons', items: [{ autogenerate: { directory: 'typescript/next/comparisons' } }] },
              { label: 'Legal', items: [{ autogenerate: { directory: 'typescript/next/legal' } }] },
            ],
          },
          {
            id: 'typescript-v1',
            label: 'TypeScript',
            link: '/typescript/v1/',
            icon: 'seti:typescript',
            items: [
              { slug: 'typescript/v1' },
              { slug: 'typescript/v1/getting-started' },
              { label: 'Categories', items: [{ autogenerate: { directory: 'typescript/v1/categories' } }] },
              { label: 'Reference', items: [{ autogenerate: { directory: 'typescript/v1/reference' } }] },
              { label: 'Legal', items: [{ autogenerate: { directory: 'typescript/v1/legal' } }] },
            ],
          },
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
