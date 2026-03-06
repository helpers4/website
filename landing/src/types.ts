/**
 * @license AGPL-3.0-or-later
 */

export type ProjectCard = {
  name: string;
  description: string;
  docsHref: string;
  repoPath: string;
};

export type RepoStars = Record<string, number | null>;
