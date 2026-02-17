import { component$, Resource } from '@builder.io/qwik';
import { GithubCard, useGithubStats } from '../lib/github-stats';
import styles from './libraries.module.css';

export const Libraries = component$(() => {
  const githubStats = useGithubStats();

  return (
    <section id="libraries" class={styles.section}>
      <div class={styles.container}>
        <h2 class={styles.title}>Our Libraries</h2>
        <p class={styles.subtitle}>
          Carefully crafted tools to power your development workflow
        </p>

        <div class={styles.grid}>
          <Resource
            value={githubStats}
            onPending={() => <div>Loading stats...</div>}
            onRejected={() => <div>Failed to load stats</div>}
            onResolved={(stats) => (
              <>
                <article class={styles.card}>
                  <div class={styles.cardHeader}>
                    <h3>TypeScript Helpers</h3>
                    <GithubCard repo={stats?.typescript} />
                  </div>
                  <p class={styles.description}>
                    Tree-shakable utility functions organized by category: arrays, dates, functions, numbers, objects, promises, strings, URLs, versions, and more.
                  </p>
                  <div class={styles.features}>
                    <span class={styles.badge}>TypeScript</span>
                    <span class={styles.badge}>ESM</span>
                    <span class={styles.badge}>Versioned</span>
                  </div>
                  <a href="/ts/" class={styles.link}>
                    Explore Documentation →
                  </a>
                </article>

                <article class={styles.card}>
                  <div class={styles.cardHeader}>
                    <h3>DevContainer Features</h3>
                    <GithubCard repo={stats?.devcontainer} />
                  </div>
                  <p class={styles.description}>
                    Pre-configured development container features for modern web development. Includes Vite, TypeScript, Angular, Git absorb, and shell history management.
                  </p>
                  <div class={styles.features}>
                    <span class={styles.badge}>Vite</span>
                    <span class={styles.badge}>7 Features</span>
                    <span class={styles.badge}>Docker</span>
                  </div>
                  <a href="/dev-container/" class={styles.link}>
                    Explore Documentation →
                  </a>
                </article>

                <article class={styles.card}>
                  <div class={styles.cardHeader}>
                    <h3>GitHub Actions</h3>
                    <GithubCard repo={stats?.action} />
                  </div>
                  <p class={styles.description}>
                    Reusable GitHub Actions for common development workflows. Validate commits, automate releases, and integrate with your CI/CD pipeline.
                  </p>
                  <div class={styles.features}>
                    <span class={styles.badge}>GitHub Marketplace</span>
                    <span class={styles.badge}>Actions</span>
                    <span class={styles.badge}>CI/CD</span>
                  </div>
                  <a href="/action/" class={styles.link}>
                    Explore Documentation →
                  </a>
                </article>
              </>
            )}
          />
        </div>
      </div>
    </section>
  );
});
