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
        'categories/array/index',
        'categories/date/index',
        'categories/function/index',
        'categories/number/index',
        'categories/object/index',
        'categories/observable/index',
        'categories/promise/index',
        'categories/string/index',
        'categories/type/index',
        'categories/url/index',
        'categories/version/index',
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
