import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@awesome.me/webawesome-pro/dist/styles/webawesome.css';
import '@awesome.me/webawesome-pro/dist/styles/themes/tailspin.css';
import '@awesome.me/webawesome-pro/dist/components/card/card.js';
import '@awesome.me/webawesome-pro/dist/components/button/button.js';

type ProjectCard = {
  name: string;
  description: string;
  docsHref: string;
  repoPath: string;
};

type RepoStars = Record<string, number | null>;

const projects: ProjectCard[] = [
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

function formatStars(value: number | null): string {
  if (value === null) {
    return 'N/A';
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return String(value);
}

async function fetchRepoStars(repoPath: string): Promise<number | null> {
  const response = await fetch(`https://api.github.com/repos/${repoPath}`);
  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { stargazers_count?: number };
  return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
}

async function fetchAllStars(cards: ProjectCard[]): Promise<RepoStars> {
  const entries = await Promise.all(
    cards.map(async (card) => {
      try {
        const stars = await fetchRepoStars(card.repoPath);
        return [card.repoPath, stars] as const;
      } catch {
        return [card.repoPath, null] as const;
      }
    }),
  );

  return Object.fromEntries(entries);
}

function CardItem({ card, stars }: { card: ProjectCard; stars: number | null }): JSX.Element {
  return (
    <wa-card>
      // Header
      <h3 slot="header">{card.name}</h3>
      <wa-button slot="header-actions" appearance="plain" href={`https://github.com/${card.repoPath}`} target="_blank" rel="noopener noreferrer">
        <wa-icon name="star" variant="solid" label="Settings"></wa-icon>
        {formatStars(stars)}
      </wa-button>

      // Body
      {card.description}
      
      // Footer
      <span slot="footer"></span>
      <wa-button slot="footer-actions" variant="brand" href={card.docsHref}>
        Open {card.name} docs
      </wa-button>
    </wa-card>
  );
}

function App(): JSX.Element {
  const [starsByRepo, setStarsByRepo] = useState<RepoStars>({});

  useEffect(() => {
    let active = true;

    void fetchAllStars(projects).then((stars) => {
      if (active) {
        setStarsByRepo(stars);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const cards = useMemo(
    () =>
      projects.map((project) => (
        <CardItem key={project.repoPath} card={project} stars={starsByRepo[project.repoPath] ?? null} />
      )),
    [starsByRepo],
  );

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px 48px' }}>
      <header style={{ marginBottom: '20px' }}>
        <img src="/helpers4-logo.png" alt="helpers4 logo" style={{ height: '56px', width: 'auto', marginBottom: '12px' }} />
        <h1>helpers4</h1>
        <p>Open-source tooling for TypeScript helpers, DevContainer features, and GitHub Actions.</p>
      </header>

      <section style={{ marginBottom: '24px' }}>
        <p>Choose a library to explore its documentation:</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>{cards}</section>

      <section>
        <p>More updates are coming soon across all helpers4 projects.</p>
      </section>
    </main>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
