---
title: Getting Started — v1 (archived)
sidebar:
  order: 1
---

:::caution[Archived version]
v1 is the original 2022 release, kept for reference. It has 9 helpers across 4 categories —
looking for the current library? → **[TypeScript (latest)](/typescript/getting-started/)**
:::

:::info[Documented version]
v1 predates the unified `@helpers4/all` version line — each package released independently:

| Package | Version |
|---------|:-------:|
| [`@helpers4/observable`](https://www.npmjs.com/package/@helpers4/observable/v/1.0.1) | 1.0.1 |
| [`@helpers4/promise`](https://www.npmjs.com/package/@helpers4/promise/v/1.1.0) | 1.1.0 |
| [`@helpers4/string`](https://www.npmjs.com/package/@helpers4/string/v/1.0.1) | 1.0.1 |
| [`@helpers4/url`](https://www.npmjs.com/package/@helpers4/url/v/1.0.1) | 1.0.1 |

[Changelog](../reference/changelog)
:::

## Installation

v1 predates the `@helpers4/all` bundle — install each category you need directly:

```bash
pnpm add @helpers4/observable@1 @helpers4/promise@1 @helpers4/string@1 @helpers4/url@1
# or: npm install @helpers4/observable@1 @helpers4/promise@1 @helpers4/string@1 @helpers4/url@1
```

Available packages: `@helpers4/observable`, `@helpers4/promise`, `@helpers4/string`, `@helpers4/url`.

## Quick Start

```typescript
import { combine } from '@helpers4/observable';
import { meaningPromiseOrThrow } from '@helpers4/promise';
import { labelize } from '@helpers4/string';
import { removeEndingSlash } from '@helpers4/url';

const cleanUrl = removeEndingSlash('https://example.com/');
const label = labelize('hello-world');

Promise.resolve(cleanUrl)
  .then(meaningPromiseOrThrow('URL is required'))
  .then(console.log);
```

All imports are tree-shakable — your bundler will only include the functions you actually use.

## CommonJS

```javascript
const { removeEndingSlash } = require('@helpers4/url');
```

## Runtime Compatibility

| Runtime | Support |
|---------|:-------:|
| Node.js | `>=10` |

Browser, Deno, and Bun compatibility were not explicitly tracked for v1 — no formal support
matrix like the current one existed yet.

## Quality Standards

v1 predates the current testing infrastructure (property-based tests, contract tests, mutation
testing, OpenSSF Scorecard, ...). Each package shipped with a basic unit test suite
(`*.spec.ts`, colocated with the implementation) — nothing beyond that was formally tracked.

## Next Steps

- Browse the [Categories](./categories/observable/)
- Looking for the current library? → [TypeScript (latest)](/typescript/getting-started/)

## License

AGPL-3.0 — See [License](./legal/license/) for details.
