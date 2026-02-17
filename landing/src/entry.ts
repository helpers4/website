import { qwikLoader } from '@builder.io/qwik';
import App from './index';

const root = document.getElementById('app');
if (root) {
  root.innerHTML = '';
  qwikLoader.then(qwik => {
    const app = <App />;
    // Note: For production, you'd want to use proper Qwik serialization
    // This is a simplified version for testing
  });
}
