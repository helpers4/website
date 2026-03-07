/**
 * @license AGPL-3.0-or-later
 */

export type ProjectCard = {
  title: string;
  label: string;
  description: string;
  docsHref: string;
  repoPath: string;
  stars?: number;
};

export type RepoStars = Record<string, number | null>;
