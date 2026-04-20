/**
 * @license LGPL-3.0-or-later
 */

import { type ProjectCard } from './types';

export const PROJECTS: ProjectCard[] = [
  {
    title: 'For JS and TypeScript',
    label: 'TypeScript',
    description: 'Modular utility functions — tree-shakable, strictly typed, zero dependencies, battle-tested.',
    docsHref: '/typescript/',
    repoPath: 'helpers4/typescript',
    stars: 0,
  },
  {
    title: 'For Dev Container',
    label: 'Dev Container',
    description: 'Plug-and-play devcontainer features for consistent, reproducible development environments.',
    docsHref: '/dev-container/',
    repoPath: 'helpers4/devcontainer',
    stars: 0,
  },
  {
    title: 'For GitHub Action',
    label: 'GitHub Action',
    description: 'Reusable GitHub Actions for commit validation, CI automation, and release workflows.',
    docsHref: '/action/',
    repoPath: 'helpers4/action',
    stars: 0,
  },
];
