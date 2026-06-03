---
title: "zip"
sidebar:
  label: "zip"
---

Combines multiple arrays element-by-element into an array of tuples.
The result length equals the length of the shortest input array.

The inverse of unzip.

> Available since v2.0.0

## Import

```ts
import { zip } from '@helpers4/array';
```

## Signature


```ts
zip<A, B>(a: readonly A[], b: readonly B[]): [A, B][]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `readonly A[]` | First array |
| `b` | `readonly B[]` | Second array |

## Returns

`[A, B][]` — Array of `[a, b]` pairs

## Examples

### Pair keys with values

Combine two arrays element-by-element.

```ts
zip(['a', 'b', 'c'], [1, 2, 3])
// => [['a', 1], ['b', 2], ['c', 3]]
```

### Truncates to the shorter array

Stops at the end of the shorter array to avoid undefined entries.

```ts
zip([1, 2, 3], ['x', 'y'])
// => [[1, 'x'], [2, 'y']]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/zip.ts)
