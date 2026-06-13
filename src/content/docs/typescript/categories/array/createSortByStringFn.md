---
title: "createSortByStringFn"
sidebar:
  label: "createSortByStringFn"
---

Creates a sort function for objects by one or more string properties.
When multiple properties are given the array is sorted by the first key;
ties are broken by the second key, then the third, and so on.

> Available since v2.0.2

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
| `property` | `keyof T \| readonly keyof T[]` | The property (or ordered list of properties) to sort by.   Defaults to trying 'value', 'label', 'title', 'description' in that order. *(optional)* |
| `caseInsensitive` | `boolean` | Whether to ignore case (default: false) |

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
type SortFn<T> = (a: T, b: T) => number;

/**
 * Default property names checked (in order) by auto-detecting sort helpers
 * when no explicit property key is provided.
 * @since 2.0.2
 */
export const DEFAULT_SORT_STRING_PROPS = ['value', 'label', 'title', 'description'] as const;

/**
 * Sort numbers in ascending order
 * @param a - First number
 * @param b - Second number
 * @returns Sort order
 * @since 1.9.0
 */
export const sortNumberAscFn: SortFn<number> = (a: number, b: number) => a - b;

/**
 * Sort numbers in descending order
 * @param a - First number
 * @param b - Second number
 * @returns Sort order
 * @since 1.9.0
 */
export const sortNumberDescFn: SortFn<number> = (a: number, b: number) => b - a;

/**
 * Sort strings in ascending order
 * @param a - First string
 * @param b - Second string
 * @returns Sort order
 * @since 1.9.0
 */
export const sortStringAscFn: SortFn<string> = (a: string, b: string) => a.localeCompare(b);

/**
 * Sort strings in descending order
 * @param a - First string
 * @param b - Second string
 * @returns Sort order
 * @since 1.9.0
 */
export const sortStringDescFn: SortFn<string> = (a: string, b: string) => b.localeCompare(a);

/**
 * Sort strings in ascending order (case insensitive)
 * @param a - First string
 * @param b - Second string
 * @returns Sort order
 * @since 1.9.0
 */
export const sortStringAscInsensitiveFn: SortFn<string> = (a: string, b: string) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sortBy.ts)
