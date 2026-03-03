import { component$, Resource } from '@builder.io/qwik';
import { GithubCard, useGithubStats } from '../lib/github-stats';
import styles from './libraries.module.css';

export const Libraries = component$(() => {
  const githubStats = useGithubStats();

  return (
    <section id="libraries" class={styles.section}>
      <div class={styles.container}>
        <h2 class={styles.title}>Libraries</h2>
        <p class={styles.subtitle}>
          Essential tools for modern development
        </p>

        <div class={styles.grid}>
          <Resource
            value={githubStats}
            onPending={() => (
              <div class={styles.loading}>
                <wa-spinner></wa-spinner>
                <span>Loading stats...</span>
              </div>
            )}
            onRejected={() => (
              <wa-callout variant="danger" class={styles.error}>
                <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
                Failed to load stats
              </wa-callout>
            )}
            onResolved={(stats) => (
              <>
                <wa-card appearance="outlined" class={styles.card}>
                  <div slot="header">
                    <h3>TypeScript Helpers</h3>
                    <GithubCard repo={stats?.typescript} />
                  </div>
                  <p class={styles.description}>
                    Tree-shakable utility functions: arrays, dates, numbers, objects, promises, strings, URLs, versions, and more.
                  </p>
                  <div class={styles.badges}>
                    <wa-badge variant="brand">TypeScript</wa-badge>
                    <wa-badge variant="success">ESM</wa-badge>
                    <wa-badge variant="neutral">Versioned</wa-badge>
                  </div>
                  <div slot="footer">
                    <wa-button variant="brand" appearance="plain" href="/ts/">
                      <wa-icon slot="start" name="arrow-right"></wa-icon>
                      Learn more
                    </wa-button>
                  </div>
                </wa-card>

                <wa-card appearance="outlined" class={styles.card}>
                  <div slot="header">
                    <h3>DevContainer Features</h3>
                    <GithubCard repo={stats?.devcontainer} />
                  </div>
                  <p class={styles.description}>
                    Pre-configured dev container features for modern web development. Vite, TypeScript, Git tools, and more.
                  </p>
                  <div class={styles.badges}>
                    <wa-badge variant="brand">Docker</wa-badge>
                    <wa-badge variant="success">7 Features</wa-badge>
                    <wa-badge variant="neutral">Dev</wa-badge>
                  </div>
                  <div slot="footer">
                    <wa-button variant="brand" appearance="plain" href="/dev-container/">
                      <wa-icon slot="start" name="arrow-right"></wa-icon>
                      Learn more
                    </wa-button>
                  </div>
                </wa-card>

                <wa-card appearance="outlined" class={styles.card}>
                  <div slot="header">
                    <h3>GitHub Actions</h3>
                    <GithubCard repo={stats?.action} />
                  </div>
                  <p class={styles.description}>
                    Reusable actions for CI/CD workflows. Commit validation, releases, and automation.
                  </p>
                  <div class={styles.badges}>
                    <wa-badge variant="brand">CI/CD</wa-badge>
                    <wa-badge variant="success">GitHub</wa-badge>
                    <wa-badge variant="neutral">Automation</wa-badge>
                  </div>
                  <div slot="footer">
                    <wa-button variant="brand" appearance="plain" href="/action/">
                      <wa-icon slot="start" name="arrow-right"></wa-icon>
                      Learn more
                    </wa-button>
                  </div>
                </wa-card>
              </>
            )}
          />
        </div>
      </div>
    </section>
  );
});
