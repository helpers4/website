/**
 * @license LGPL-3.0-or-later
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
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px 48px' }}>
      <Header />

      <section style={{ marginBottom: '24px' }}>
        <p>
          Open-source developer tools built for real projects.
        </p>
        <p>
          Free to use under the LGPL-3.0 license, including in commercial products.
          Distribute modified source? Share those changes. Run it as a service? No obligations.
        </p>
      </section>

      <CardsList projects={PROJECTS} />
    </div>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
