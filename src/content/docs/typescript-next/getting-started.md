---
title: Getting Started — v3 (alpha)
sidebar:
  order: 1
---

import { Badge, Aside } from '@astrojs/starlight/components';

<Badge text="v3 alpha — not yet released" variant="tip" />

<Aside type="caution">
v3 is not yet released. This page will be updated when the first alpha is published on npm.

For production use, see **[TypeScript v2 → Getting Started](/typescript/getting-started/)**.
</Aside>

## What will change at the import level

### Package renames

The `@helpers4/type` package is renamed to `@helpers4/guard`.

```diff
- import { isString, isNull } from '@helpers4/type';
+ import { isString, isNull } from '@helpers4/guard';
```

A new `@helpers4/type` package will be published for compile-time utility types:

```ts
import type { DeepPartial, Brand, Prettify } from '@helpers4/type';
```

### Removed exports

The following deprecated exports are removed. Use the indicated replacements:

| Removed | Replacement | Package |
|---|---|---|
| `isEmpty` | `isEmpty` | `@helpers4/array`, `@helpers4/string`, or `@helpers4/object` |
| `safeDate` | `ensureDate` | `@helpers4/date` |
| `dateToISOString` | `toISO8601` | `@helpers4/date` |
| `daysDifference` | `difference` | `@helpers4/date` |
| `deepClone` | `cloneDeep` | `@helpers4/object` |
| `deepMerge` | `mergeDeep` | `@helpers4/object` |

## Installation (once released)

```bash
pnpm add @helpers4/all@3
# or individual packages
pnpm add @helpers4/guard @helpers4/type
```
