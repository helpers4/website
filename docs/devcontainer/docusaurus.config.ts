import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevContainer Features | helpers4',
  tagline: 'Development container features for modern web development',
  favicon: 'img/favicon.ico',
  url: 'https://helpers4.dev',
  baseUrl: '/dev-container/',
  organizationName: 'helpers4',
  projectName: 'devcontainer',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/helpers4/devcontainer/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/helpers4-og.png',
    navbar: {
      title: 'DevContainer Features',
      logo: {
        alt: 'helpers4 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Features',
        },
        {
          href: 'https://github.com/helpers4/devcontainer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'helpers4',
          items: [
            {
              label: 'Home',
              href: 'https://helpers4.dev',
            },
            {
              label: 'GitHub Org',
              href: 'https://github.com/helpers4',
            },
          ],
        },
        {
          title: 'Other Docs',
          items: [
            {
              label: 'TypeScript Helpers',
              href: 'https://helpers4.dev/ts',
            },
            {
              label: 'GitHub Actions',
              href: 'https://helpers4.dev/action',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} helpers4 - AGPL-3.0 License`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
