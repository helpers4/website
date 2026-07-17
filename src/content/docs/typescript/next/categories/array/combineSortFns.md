---
title: "combineSortFns"
sidebar:
  label: "combineSortFns"
---

Chains multiple sort functions into a single comparator: the first function
decides the order unless it reports a tie (`0`), in which case the next
function is tried, and so on.

Lets you compose comparators of different kinds — e.g. a boolean-property
comparator from createSortByBooleanFn followed by a string-property
comparator from `createSortByStringFn` — which a single multi-key call
cannot express, since that coerces every key to the same comparison type.

> Available since next

## Import

```ts
import { combineSortFns } from '@helpers4/array';
```

## Signature


```ts
combineSortFns<T>(fns: readonly SortFn<T>[]): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fns` | `readonly SortFn<T>[]` | Sort functions to try, in priority order. An empty list produces   a stable no-op comparator (all elements compare equal). |

## Returns

`SortFn<T>` — A single sort function equivalent to applying `fns` in order

## Examples

### Default items first, then alphabetical

Chain a boolean comparator with a string comparator to break ties.

```ts
const items = [
  { isDefault: false, label: 'Bob' },
  { isDefault: true, label: 'Zoe' },
  { isDefault: false, label: 'Alice' },
];
items.sort(combineSortFns(
  createSortByBooleanFn('isDefault'),
  createSortByStringFn('label'),
))
// => [Zoe (default), Alice, Bob]
```

### Falls through when the first comparator ties

A `0` result from the first function moves on to the next one.

```ts
const rows = [{ a: 1, b: 2 }, { a: 1, b: 1 }];
rows.sort(combineSortFns<{ a: number; b: number }>(
  (x, y) => x.a - y.a,
  (x, y) => x.b - y.b,
))
// => [{ a: 1, b: 1 }, { a: 1, b: 2 }]
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/combineSortFns.ts)
