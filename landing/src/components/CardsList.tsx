/**
 * @license LGPL-3.0-or-later
 */

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { type ProjectCard, type RepoStars } from '../types';
import { fetchAllStars } from '../utils/github';
import { CardItem } from './CardItem';

interface CardsListProps {
  projects: ProjectCard[];
}

export function CardsList({ projects }: CardsListProps) {
  const gridStyle = {
    '--min-column-size': '40ch',
  } as CSSProperties;

  const [starsByRepo, setStarsByRepo] = useState<RepoStars>(() => {
    // Initialize with hardcoded stars to avoid GitHub API rate limit
    return Object.fromEntries(projects.map((p) => [p.repoPath, p.stars ?? null]));
  });

  useEffect(() => {
    let active = true;

    // Try to fetch live stars, but fallback to hardcoded values on rate limit
    void fetchAllStars(projects.map((p) => p.repoPath)).then((stars) => {
      if (active) {
        setStarsByRepo(stars);
      }
    });

    return () => {
      active = false;
    };
  }, [projects]);

  const cards = useMemo(
    () =>
      projects.map((project) => (
        <CardItem key={project.repoPath} card={project} stars={starsByRepo[project.repoPath] ?? project.stars ?? null} />
      )),
    [projects, starsByRepo],
  );

  return (
    <section className="wa-grid" style={gridStyle}>
      {cards}
    </section>
  );
}
