/**
 * Script: merge-builds.js
 *
 * Wrapper around the canonical merge flow implemented in /merge-builds.sh.
 * Keeps backward compatibility for callers that still invoke this JS entrypoint.
 */

import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const mergeScript = path.join(rootDir, 'merge-builds.sh');

execSync(`sh "${mergeScript}"`, {
  cwd: rootDir,
  stdio: 'inherit',
});
