/**
 * @license AGPL-3.0-or-later
 */

import { useEffect, useMemo, useState } from 'react';
import { type ProjectCard, type RepoStars } from '../types';
import { fetchAllStars } from '../utils/github';
import { CardItem } from './CardItem';

interface CardsListProps {
  projects: ProjectCard[];
}

export function CardsList({ projects }: CardsListProps) {
  const [starsByRepo, setStarsByRepo] = useState<RepoStars>({});

  useEffect(() => {
    let active = true;

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
        <CardItem key={project.repoPath} card={project} stars={starsByRepo[project.repoPath] ?? null} />
      )),
    [projects, starsByRepo],
  );

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {cards}
    </section>
  );
}
