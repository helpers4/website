// SPDX-License-Identifier: AGPL-3.0-or-later

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: false,
  },
  server: {
    port: 3000,
  },
});
