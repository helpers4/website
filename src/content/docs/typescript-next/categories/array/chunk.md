---
title: "chunk"
sidebar:
  label: "chunk"
---

Chunks an array into smaller arrays of specified size.
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v1.9.0

## Import

```ts
import { chunk } from '@helpers4/array';
```

## Signature


```ts
chunk<T>(array: readonly T[] | null | undefined, size: number): T[][]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to chunk |
| `size` | `number` | The size of each chunk |

## Returns

`T[][]` — Array of chunks

## Examples

### Split an array into pairs

Chunks an array of 5 elements into groups of 2, with the last chunk containing the remainder.

```ts
chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

### Handle exact divisions

When the array length is evenly divisible by the chunk size, all chunks are equal.

```ts
chunk([1, 2, 3, 4], 2)
// => [[1, 2], [3, 4]]
```

### Return empty array for invalid size

A size of 0 or negative returns an empty array.

```ts
chunk([1, 2, 3], 0)
// => []
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/chunk.ts)
