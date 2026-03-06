/**
 * @license AGPL-3.0-or-later
 */

import { type ProjectCard } from './types';

export const PROJECTS: ProjectCard[] = [
  {
    name: 'TypeScript',
    description: 'Tree-shakable utility functions with strict typing.',
    docsHref: '/ts/',
    repoPath: 'helpers4/typescript',
  },
  {
    name: 'DevContainer',
    description: 'Reusable development container features for consistent environments.',
    docsHref: '/dev-container/',
    repoPath: 'helpers4/devcontainer',
  },
  {
    name: 'GitHub Action',
    description: 'Automation workflows and publishing support for repositories.',
    docsHref: '/action/',
    repoPath: 'helpers4/action',
  },
];
