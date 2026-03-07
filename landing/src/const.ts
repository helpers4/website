/**
 * @license AGPL-3.0-or-later
 */

import { type ProjectCard } from './types';

export const PROJECTS: ProjectCard[] = [
  {
    title: 'For JS and TypeScript',
    label: 'TypeScript',
    description: 'Tree-shakable utility functions with strict typing.',
    docsHref: '/ts/',
    repoPath: 'helpers4/typescript',
    stars: 0,
  },
  {
    title: 'For Dev Container',
    label: 'Dev Container',
    description: 'Reusable development container features for consistent environments.',
    docsHref: '/dev-container/',
    repoPath: 'helpers4/devcontainer',
    stars: 0,
  },
  {
    title: 'For GitHub Action',
    label: 'GitHub Action',
    description: 'Automation workflows and publishing support for repositories.',
    docsHref: '/action/',
    repoPath: 'helpers4/action',
    stars: 0,
  },
];
