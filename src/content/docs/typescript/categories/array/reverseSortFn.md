---
title: "reverseSortFn"
sidebar:
  label: "reverseSortFn"
description: "Reverses the order of a sort function: `reverseSortFn(fn)(a, b)` is `fn(b, a)`."
version: "3.1.5"
---

Reverses the order of a sort function: `reverseSortFn(fn)(a, b)` is `fn(b, a)`.

Gives a descending variant of any comparator, including the ones built by the
`createSortBy*Fn` factories, and composes with combineSortFns for mixed orders.
Ties stay ties, so the sort remains stable.

> Available since v3.1.4

## Import

```ts
import { reverseSortFn } from '@helpers4/array';
// or, from the all-in-one package (same code, one install):
import { reverseSortFn } from 'helpers4/array';
```

## Signature


```ts
reverseSortFn<T>(fn: SortFn<T>): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `SortFn<T>` | The sort function to reverse |

## Returns

`SortFn<T>` — A sort function with the opposite order

## Examples

### Newest first

Turns an ascending comparator into a descending one.

```ts
const releases = [{ date: '2026-01-01' }, { date: '2026-03-01' }];
releases.sort(reverseSortFn(createSortByStringFn('date')))
// => [{ date: '2026-03-01' }, { date: '2026-01-01' }]
```

### Mixed order

Newest first, then name ascending, by combining it with combineSortFns.

```ts
rows.sort(combineSortFns(
  reverseSortFn(createSortByStringFn('date')),
  createSortByStringFn('name'),
))
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/reverseSortFn.ts)
