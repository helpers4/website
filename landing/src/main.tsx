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
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px 48px' }}>
      <Header />

      <section style={{ marginBottom: '24px' }}>
        <p>
          Open-source libraries for developers.
        </p>
        <p>
          Free to use under the AGPL-3.0 license, including commercial use.
          Modifications must be shared under the same license.
          If you use this code to provide a network service, you must make the source code available to users.
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
