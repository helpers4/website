import type { SidebarsConfig } from '@docusaurus/types';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'getting-started',
    'installation',
    {
      type: 'category',
      label: 'Categories',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'API Categories',
        description: 'Browse TypeScript utility functions organized by category.',
        slug: '/categories',
      },
      items: [
        'categories/array',
        'categories/date',
        'categories/function',
        'categories/number',
        'categories/object',
        'categories/observable',
        'categories/promise',
        'categories/string',
        'categories/type',
        'categories/url',
        'categories/version',
        'categories/math',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsible: true,
      collapsed: true,
      items: [
        'legal/license',
        'legal/open-source-libraries',
      ],
    },
  ],
};

export default sidebars;
