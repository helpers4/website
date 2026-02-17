import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dev-container/',
    component: ComponentCreator('/dev-container/', 'd38'),
    routes: [
      {
        path: '/dev-container/',
        component: ComponentCreator('/dev-container/', '39e'),
        routes: [
          {
            path: '/dev-container/',
            component: ComponentCreator('/dev-container/', '55b'),
            routes: [
              {
                path: '/dev-container/features/vite-plus',
                component: ComponentCreator('/dev-container/features/vite-plus', 'a46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dev-container/getting-started',
                component: ComponentCreator('/dev-container/getting-started', 'bac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dev-container/intro',
                component: ComponentCreator('/dev-container/intro', 'ee6'),
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
