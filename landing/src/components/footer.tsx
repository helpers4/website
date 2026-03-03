import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export const Footer = component$(() => {
  return (
    <div class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.grid}>
          <div class={styles.section}>
            <h4>Organization</h4>
            <ul>
              <li>
                <wa-button appearance="plain" href="https://github.com/helpers4" target="_blank">
                  <wa-icon slot="start" name="github" library="fa-brands"></wa-icon>
                  GitHub Organization
                </wa-button>
              </li>
              <li>
                <wa-button appearance="plain" href="https://github.com/helpers4?tab=repositories" target="_blank">
                  <wa-icon slot="start" name="folder"></wa-icon>
                  All Repositories
                </wa-button>
              </li>
            </ul>
          </div>

          <div class={styles.section}>
            <h4>Libraries</h4>
            <ul>
              <li>
                <wa-button appearance="plain" href="/ts/">
                  <wa-icon slot="start" name="code"></wa-icon>
                  TypeScript
                </wa-button>
              </li>
              <li>
                <wa-button appearance="plain" href="/dev-container/">
                  <wa-icon slot="start" name="cube"></wa-icon>
                  DevContainer
                </wa-button>
              </li>
              <li>
                <wa-button appearance="plain" href="/action/">
                  <wa-icon slot="start" name="bolt"></wa-icon>
                  GitHub Actions
                </wa-button>
              </li>
            </ul>
          </div>

          <div class={styles.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <wa-button appearance="plain" href="https://www.npmjs.com/org/helpers4" target="_blank">
                  <wa-icon slot="start" name="npm" library="fa-brands"></wa-icon>
                  npm Organization
                </wa-button>
              </li>
              <li>
                <wa-button appearance="plain" href="https://github.com/marketplace?type=actions&query=helpers4" target="_blank">
                  <wa-icon slot="start" name="store"></wa-icon>
                  GitHub Marketplace
                </wa-button>
              </li>
            </ul>
          </div>
        </div>

        <wa-divider></wa-divider>

        <div class={styles.bottom}>
          <p>
            Built with ❤️ by the helpers4 community
          </p>
          <p class={styles.license}>
            AGPL-3.0 License - See individual repositories for details
          </p>
        </div>
      </div>
    </div>
  );
});
