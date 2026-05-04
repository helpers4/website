/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

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
      plugins: [starlightThemeNova()],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/helpers4' },
      ],
      sidebar: [
        {
          label: 'TypeScript',
          items: [
            { slug: 'typescript' },
            { slug: 'typescript/getting-started' },
            { label: 'Categories', autogenerate: { directory: 'typescript/categories' } },
            { label: 'Reference', autogenerate: { directory: 'typescript/reference' } },
            { label: 'Comparisons', autogenerate: { directory: 'typescript/comparisons' } },
            { label: 'Legal', autogenerate: { directory: 'typescript/legal' } },
          ],
        },
        {
          label: 'Dev Container',
          items: [
            { slug: 'devcontainer' },
            { slug: 'devcontainer/getting-started' },
            { label: 'Features', autogenerate: { directory: 'devcontainer/features' } },
            { label: 'Reference', autogenerate: { directory: 'devcontainer/reference' } },
            { label: 'Legal', autogenerate: { directory: 'devcontainer/legal' } },
          ],
        },
        {
          label: 'GitHub Actions',
          items: [
            { slug: 'action' },
            { slug: 'action/getting-started' },
            { label: 'Actions', autogenerate: { directory: 'action/actions' } },
            { label: 'Reference', autogenerate: { directory: 'action/reference' } },
            { label: 'Legal', autogenerate: { directory: 'action/legal' } },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
