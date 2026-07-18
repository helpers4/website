---
title: "createSortByStringFn"
sidebar:
  label: "createSortByStringFn"
---

Creates a sort function for objects by one or more string properties.
When multiple properties are given the array is sorted by the first key;
ties are broken by the second key, then the third, and so on.

Property values are coerced to strings via `String()` before comparison:
numbers sort as `'0'`, `'1'`, `'42'`, etc. (lexicographic, not numeric);
use `createSortByNumberFn` for numeric properties.

> Available since v1.9.0

## Import

```ts
import { createSortByStringFn } from '@helpers4/array';
```

## Signature


```ts
createSortByStringFn<T extends Record<string, unknown>>(property?: keyof T | readonly keyof T[], caseInsensitive: boolean): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T \| readonly keyof T[]` | The property (or ordered list of properties) to sort by.   Defaults to trying 'value', 'label', 'title', 'description' in that order.   Pass `undefined` explicitly to use auto-detect; an empty array `[]` produces a   stable no-op comparator (does **not** fall back to auto-detect). *(optional)* |
| `caseInsensitive` | `boolean` | Whether to ignore case (default: false).   Uses `Intl.Collator { sensitivity: 'accent' }`, which folds case but still   distinguishes accented characters (é ≠ e). This differs from   `createSortByNaturalFn(key, true)`, which also collapses diacritics. |

## Returns

`SortFn<T>` — Sort function

## Examples

### Sort objects by string property

Use createSortByStringFn to sort objects by a specific string property.

```ts
const items = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }];
items.sort(createSortByStringFn('name'))
// => [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```

### Sort objects by multiple keys

Pass an array of keys; ties on the first key are broken by the next.

```ts
const rows = [
  { dept: 'B', name: 'Alice' },
  { dept: 'A', name: 'Zoe' },
  { dept: 'B', name: 'Adam' },
  { dept: 'A', name: 'Anna' },
];
rows.sort(createSortByStringFn(['dept', 'name'] as const))
// => A:Anna, A:Zoe, B:Adam, B:Alice
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/sortBy.ts)
