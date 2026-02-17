import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ts/',
    component: ComponentCreator('/ts/', 'b7b'),
    routes: [
      {
        path: '/ts/',
        component: ComponentCreator('/ts/', '800'),
        routes: [
          {
            path: '/ts/',
            component: ComponentCreator('/ts/', '2eb'),
            routes: [
              {
                path: '/ts/api',
                component: ComponentCreator('/ts/api', '6fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ts/getting-started',
                component: ComponentCreator('/ts/getting-started', '691'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ts/installation',
                component: ComponentCreator('/ts/installation', '8b8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ts/intro',
                component: ComponentCreator('/ts/intro', '270'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
