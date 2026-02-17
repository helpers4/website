import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/action/',
    component: ComponentCreator('/action/', '84a'),
    routes: [
      {
        path: '/action/',
        component: ComponentCreator('/action/', 'f5c'),
        routes: [
          {
            path: '/action/',
            component: ComponentCreator('/action/', '485'),
            routes: [
              {
                path: '/action/actions/conventional-commits',
                component: ComponentCreator('/action/actions/conventional-commits', 'f8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/action/getting-started',
                component: ComponentCreator('/action/getting-started', '16f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/action/intro',
                component: ComponentCreator('/action/intro', '17f'),
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
