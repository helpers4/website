---
title: "createSortByDateFn"
sidebar:
  label: "createSortByDateFn"
---

Creates a sort function for objects by date property.

> Available since v2.0.2

## Import

```ts
import { createSortByDateFn } from '@helpers4/array';
```

## Signature


```ts
createSortByDateFn<T extends Record<string, unknown>>(property?: keyof T): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T` | The property to sort by (defaults to 'date') *(optional)* |

## Returns

`SortFn<T>` — Sort function

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
