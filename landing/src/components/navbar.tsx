import { component$ } from '@builder.io/qwik';
import styles from './navbar.module.css';

export const NavBar = component$(() => {
  return (
    <div class={styles.navbar}>
      <div class={styles.container}>
        <a href="/" class={styles.logo}>
          <span class={styles.icon}>h4</span>
          <span>helpers4</span>
        </a>
        <div class={styles.links}>
          <wa-button
            appearance="plain"
            href="#libraries"
            size="small"
          >
            Libraries
          </wa-button>
          <wa-button
            appearance="plain"
            href="https://github.com/helpers4"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <wa-icon slot="start" name="github" library="fa-brands"></wa-icon>
            GitHub
          </wa-button>
          <wa-button
            appearance="plain"
            href="/ts"
            size="small"
          >
            <wa-icon slot="start" name="book-open"></wa-icon>
            Docs
          </wa-button>
        </div>
      </div>
    </div>
  );
});
