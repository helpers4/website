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
