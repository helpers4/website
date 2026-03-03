import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export const Hero = component$(() => {
  return (
    <section class={styles.hero}>
      <div class={styles.content}>
        <h1 class={styles.title}>helpers4</h1>
        <p class={styles.subtitle}>
          Modern open-source utilities for TypeScript, DevContainers, and GitHub Actions.<br />
          Tree-shakable • Zero dependencies • Modular
        </p>
        
        <div class={styles.stats}>
          <wa-card appearance="filled" class={styles.stat}>
            <div class={styles.statValue}>3</div>
            <div class={styles.statLabel}>Libraries</div>
          </wa-card>
          <wa-card appearance="filled" class={styles.stat}>
            <div class={styles.statValue}>12+</div>
            <div class={styles.statLabel}>Categories</div>
          </wa-card>
          <wa-card appearance="filled" class={styles.stat}>
            <div class={styles.statValue}>∞</div>
            <div class={styles.statLabel}>Tree-shakable</div>
          </wa-card>
        </div>
        
        <div class={styles.cta}>
          <wa-button variant="brand" href="#libraries">
            <wa-icon slot="start" name="grid"></wa-icon>
            Explore Libraries
          </wa-button>
          <wa-button variant="brand" appearance="outlined" href="https://github.com/helpers4" target="_blank">
            <wa-icon slot="start" name="github" library="fa-brands"></wa-icon>
            View on GitHub
          </wa-button>
        </div>
      </div>
    </section>
  );
});
