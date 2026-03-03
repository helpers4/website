// SPDX-License-Identifier: AGPL-3.0-or-later

import '@awesome.me/webawesome-pro/dist/styles/webawesome.css';
import '@awesome.me/webawesome-pro/dist/styles/themes/tailspin.css';
import '@awesome.me/webawesome-pro';

import { render } from '@builder.io/qwik';
import App from './index';

const root = document.getElementById('root');
if (root) {
  render(root, <App />);
}
