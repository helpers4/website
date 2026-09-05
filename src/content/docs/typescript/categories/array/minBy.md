---
title: "minBy"
sidebar:
  label: "minBy"
description: "Returns the element of an array with the smallest derived key, computed by `keyFn`."
version: "3.1.0"
---

Returns the element of an array with the smallest derived key, computed by `keyFn`.
Unlike min, which only compares raw numbers, `minBy` returns the *item* itself,
not the key. On a tie, the earliest element with that key wins.
`null` and `undefined` are treated as empty arrays and return `undefined`.

> Available since v3.0.8

## Import

```ts
import { minBy } from '@helpers4/array';
```

## Signature


```ts
minBy<T>(array: readonly T[] | null | undefined, keyFn: function): T | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | Array of items |
| `keyFn` | `function` | Derives the comparable key for an item |

## Returns

`T | undefined` — The element with the smallest key, or `undefined` for empty arrays, `null`, `undefined`

## Examples

### Pick the item with the smallest derived value

Unlike min(), minBy() returns the whole item, chosen by a key derived from it.

```ts
minBy(
  [{ name: 'a', size: 3 }, { name: 'b', size: 9 }, { name: 'c', size: 1 }],
  (item) => item.size,
)
// => { name: 'c', size: 1 }
```

### Empty array returns undefined

There is no minimum to return for an empty array.

```ts
minBy([], (item: { size: number }) => item.size)
// => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/minBy.ts)
