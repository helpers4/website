/**
 * @license AGPL-3.0-or-later
 */

import { createRoot } from 'react-dom/client';
import '@awesome.me/webawesome-pro/dist/styles/webawesome.css';
import '@awesome.me/webawesome-pro/dist/styles/themes/tailspin.css';
import '@awesome.me/webawesome-pro/dist/components/card/card.js';
import '@awesome.me/webawesome-pro/dist/components/button/button.js';
import '@awesome.me/webawesome-pro/dist/components/icon/icon.js';
import { Header, CardsList } from './components';
import { PROJECTS } from './const';

function App() {
  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px 48px' }}>
      <Header />

      <section style={{ marginBottom: '24px' }}>
        <p>Choose a library to explore its documentation:</p>
      </section>

      <CardsList projects={PROJECTS} />

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
