---
title: "Name Conflicts Between Categories"
description: "Some helpers share the same name across multiple categories. This page explains how to resolve import conflicts."
sidebar:
  label: "Name Conflicts"
  order: 4
---

# Name Conflicts Between Categories

helpers4 is split into independent npm packages — one per category. Each package can be installed and tree-shaken independently. A deliberate consequence of this design is that **the same function name can exist in multiple categories** when the operation makes sense for different data types.

This is not a bug. `compact` for arrays and `compact` for objects are genuinely different operations, and merging them into a single overloaded function would break tree-shaking and make the types less precise.

## Known Conflicts

*Auto-generated from the current build — always reflects the documented version.*

| Function | Categories |
|----------|------------|
| `compact` | [`array`](../categories/array/compact/), [`object`](../categories/object/compact/) |
| `compare` | [`date`](../categories/date/compare/), [`version`](../categories/version/compare/) |
| `countBy` | [`array`](../categories/array/countby/), [`map`](../categories/map/countby/), [`set`](../categories/set/countby/) |
| `difference` | [`array`](../categories/array/difference/), [`date`](../categories/date/difference/) |
| `equalsDeep` | [`array`](../categories/array/equalsdeep/), [`object`](../categories/object/equalsdeep/) |
| `equalsShallow` | [`array`](../categories/array/equalsshallow/), [`object`](../categories/object/equalsshallow/) |
| `filter` | [`map`](../categories/map/filter/), [`set`](../categories/set/filter/) |
| `isEmpty` | [`array`](../categories/array/isempty/), [`object`](../categories/object/isempty/), [`string`](../categories/string/isempty/) |
| `isNonEmpty` | [`array`](../categories/array/isnonempty/), [`object`](../categories/object/isnonempty/), [`string`](../categories/string/isnonempty/) |
| `map` | [`object`](../categories/object/map/), [`set`](../categories/set/map/) |
| `toMapByKey` | [`map`](../categories/map/tomapbykey/), [`set`](../categories/set/tomapbykey/) |

## Resolving Conflicts

When you need **two helpers with the same name** in the same file, rename one (or both) at the import site using the `as` keyword.

### Recommended naming convention

Suffix with `4{category}` — consistent with the helpers4 naming identity:

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';

const numbers = compact4array([0, 1, null, 2, undefined]);
// => [1, 2]

const user = compact4object({ id: 1, name: null, role: undefined });
// => { id: 1 }
```

### All conflicts — resolution examples

### `compact`

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';
```

### `compare`

```ts
import { compare as compare4date } from '@helpers4/date';
import { compare as compare4version } from '@helpers4/version';
```

### `countBy`

```ts
import { countBy as countBy4array } from '@helpers4/array';
import { countBy as countBy4map } from '@helpers4/map';
import { countBy as countBy4set } from '@helpers4/set';
```

### `difference`

```ts
import { difference as difference4array } from '@helpers4/array';
import { difference as difference4date } from '@helpers4/date';
```

### `equalsDeep`

```ts
import { equalsDeep as equalsDeep4array } from '@helpers4/array';
import { equalsDeep as equalsDeep4object } from '@helpers4/object';
```

### `equalsShallow`

```ts
import { equalsShallow as equalsShallow4array } from '@helpers4/array';
import { equalsShallow as equalsShallow4object } from '@helpers4/object';
```

### `filter`

```ts
import { filter as filter4map } from '@helpers4/map';
import { filter as filter4set } from '@helpers4/set';
```

### `isEmpty`

```ts
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4object } from '@helpers4/object';
import { isEmpty as isEmpty4string } from '@helpers4/string';
```

### `isNonEmpty`

```ts
import { isNonEmpty as isNonEmpty4array } from '@helpers4/array';
import { isNonEmpty as isNonEmpty4object } from '@helpers4/object';
import { isNonEmpty as isNonEmpty4string } from '@helpers4/string';
```

### `map`

```ts
import { map as map4object } from '@helpers4/object';
import { map as map4set } from '@helpers4/set';
```

### `toMapByKey`

```ts
import { toMapByKey as toMapByKey4map } from '@helpers4/map';
import { toMapByKey as toMapByKey4set } from '@helpers4/set';
```

### Alternative: namespace import

If you use many helpers from both conflicting categories, a namespace import is more concise — but check that your bundler handles namespace tree-shaking (esbuild, Rollup, and Vite all do):

```ts
import * as A from '@helpers4/array';
import * as O from '@helpers4/object';

A.compact([0, 1, null]);
O.compact({ a: 1, b: null });
```

:::note
Prefer named `as` imports for maximum tree-shaking compatibility with all bundlers, including older Webpack 4 configurations.
:::

## Why not a single unified package?

The `@helpers4/all` bundle does export every category. Inside a single module context, the category name is not part of the export, so **the last `export *` wins** when two categories export the same name.

This means you cannot safely `import { compact } from '@helpers4/all'` if both `array` and `object` export `compact` — the result is undefined behavior depending on module bundler internals.

**Always use per-category packages** (`@helpers4/array`, `@helpers4/object`, …) when you need conflicting helpers. They are the canonical import source.

## Design rationale

See [Philosophy — Category independence](./philosophy#category-independence) for a deeper explanation of why cross-category deduplication is intentionally avoided.
