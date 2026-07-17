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
          {
            // Single entry: always mirrors the latest stable release (v2 today, v3 once
            // released). Older releases (typescript/v2/...) and the unreleased preview
            // (typescript/next/...) are reached via the VersionSelect in the sidebar,
            // not via a duplicate topic — see src/components/VersionSelect.astro. They're
            // associated with this topic via the `topics` option below, since they aren't
            // listed in `items` (their own sidebar comes from the route middleware instead).
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
        ], {
          // typescript/next/** (and future typescript/v*/** archives) aren't listed in the
          // 'typescript' topic's `items`, so associate them explicitly — otherwise the plugin
          // fails the build with "Failed to find the topic for the `typescript/next` page."
          topics: {
            typescript: ['/typescript/next', '/typescript/next/**/*', '/typescript/v*', '/typescript/v*/**/*'],
          },
        }),
        starlightThemeNova(),
        {
          // Registered after starlightSidebarTopics so its middleware runs after topics'
          // (which sets `starlightRoute.sidebar` to the topic's static tree) — this one
          // then rewrites that tree's hrefs to the current page's own version slot. See
          // src/route-middleware.ts.
          name: 'helpers4-route-middleware',
          hooks: {
            'config:setup'({ addRouteMiddleware }) {
              addRouteMiddleware({ entrypoint: './src/route-middleware.ts' });
            },
          },
        },
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
