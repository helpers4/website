/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveRelativeLink } from './remark-file-relative-links.mjs';

const known = new Set([
  '/lib/array',
  '/lib/array/compact',
  '/lib/array/countby',
  '/lib/object',
  '/lib/object/compact',
  '/lib/guide',
]);
const resolve = (url, page, isIndex = false) => resolveRelativeLink(url, page, isIndex, known);

test('the directory reading wins when it matches (what the browser does)', () => {
  // From /lib/array/compact/, `../countby/` is /lib/array/countby/.
  assert.equal(resolve('../countby/', '/lib/array/compact'), '/lib/array/countby/');
});

test('the file reading is used when it is the only one that matches', () => {
  // Written for the file /lib/array/compact.md: `../object/compact/` meant /lib/object/compact/.
  assert.equal(resolve('../object/compact/', '/lib/array/compact'), '/lib/object/compact/');
});

test('an index page is the directory itself, so both readings agree', () => {
  assert.equal(resolve('./compact/', '/lib/array', true), '/lib/array/compact/');
});

test('a link that matches no page is left exactly as written', () => {
  assert.equal(resolve('../nothing/here/', '/lib/array/compact'), '../nothing/here/');
});

test('matching ignores case: pages are served in lowercase', () => {
  assert.equal(resolve('../CountBy/', '/lib/array/compact'), '/lib/array/countby/');
});

test('anchors and queries survive', () => {
  assert.equal(resolve('../countby/#usage', '/lib/array/compact'), '/lib/array/countby/#usage');
  assert.equal(resolve('../countby/?v=2', '/lib/array/compact'), '/lib/array/countby/?v=2');
});

test('absolute paths, URLs, anchors and queries alone are never touched', () => {
  for (const url of ['/lib/array/', 'https://example.org/x', 'mailto:a@b.c', '#top', '?q=1', '']) {
    assert.equal(resolve(url, '/lib/array/compact'), url);
  }
});
