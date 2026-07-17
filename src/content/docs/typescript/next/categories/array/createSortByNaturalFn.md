---
title: "createSortByNaturalFn"
sidebar:
  label: "createSortByNaturalFn"
---

Creates a sort function for objects by one or more string properties using
natural ordering. Numbers embedded in values are compared numerically:
"W2" < "W11" < "W20". When multiple properties are given, ties on the
first key are broken by the second key, then the third, and so on.

> Available since v2.0.2

## Import

```ts
import { createSortByNaturalFn } from '@helpers4/array';
```

## Signature


```ts
createSortByNaturalFn<T extends Record<string, unknown>>(property?: keyof T | readonly keyof T[], caseInsensitive: boolean): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T \| readonly keyof T[]` | The property (or ordered list of properties) to sort by.   Defaults to trying 'value', 'label', 'title', 'description' in that order. *(optional)* |
| `caseInsensitive` | `boolean` | Whether to ignore case **and diacritics** (default: false).   Uses `Intl.Collator { sensitivity: 'base' }`, which treats é, E, and e as equal.   This differs from `createSortByStringFn(key, true)`, which only folds case and   still distinguishes accented characters (é ≠ e). |

## Returns

`SortFn<T>` — Sort function

## Examples

### createSortByNaturalFn



```ts
const items = [{ label: 'W11' }, { label: 'W2' }, { label: 'W20' }];
items.sort(createSortByNaturalFn('label'))
// => [{ label: 'W2' }, { label: 'W11' }, { label: 'W20' }]
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortNatural.ts)
