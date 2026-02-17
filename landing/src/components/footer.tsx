import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export const Footer = component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.grid}>
          <div class={styles.section}>
            <h4>Organization</h4>
            <ul>
              <li>
                <a href="https://github.com/helpers4">GitHub Organization</a>
              </li>
              <li>
                <a href="https://github.com/helpers4?tab=repositories">All Repositories</a>
              </li>
              <li>
                <a href="https://github.com/helpers4/helpers4.github.io">Website Source</a>
              </li>
            </ul>
          </div>

          <div class={styles.section}>
            <h4>Libraries</h4>
            <ul>
              <li>
                <a href="/ts/">TypeScript Helpers</a>
              </li>
              <li>
                <a href="/dev-container/">DevContainer Features</a>
              </li>
              <li>
                <a href="/action/">GitHub Actions</a>
              </li>
            </ul>
          </div>

          <div class={styles.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <a href="https://www.npmjs.com/org/helpers4" target="_blank" rel="noopener noreferrer">
                  npm Organization
                </a>
              </li>
              <li>
                <a href="https://github.com/marketplace?type=actions&query=helpers4" target="_blank" rel="noopener noreferrer">
                  GitHub Marketplace
                </a>
              </li>
              <li>
                <a href="https://github.com/helpers4" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class={styles.bottom}>
          <p>
            Built with ❤️ by the helpers4 community
          </p>
          <p class={styles.license}>
            MIT License - See individual repositories for details
          </p>
        </div>
      </div>
    </footer>
  );
});
