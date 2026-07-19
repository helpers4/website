---
title: "unzip"
sidebar:
  label: "unzip"
---

Splits an array of tuples into separate arrays, one per position.

The inverse of zip.

> Available since v2.0.0

## Import

```ts
import { unzip } from '@helpers4/array';
```

## Signature


```ts
unzip<A, B>(pairs: readonly [A, B][] | null | undefined): [A[], B[]]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pairs` | `readonly [A, B][] \| null \| undefined` | Array of 2\-tuples to unzip |

## Returns

`[A[], B[]]` — A tuple of two arrays: all first elements and all second elements

## Examples

### Split pairs into separate arrays

The inverse of zip — separate each position into its own array.

```ts
const pairs: [number, string][] = [[1, 'a'], [2, 'b'], [3, 'c']];
const [nums, letters] = unzip(pairs);

nums;    // => [1, 2, 3]
letters; // => ['a', 'b', 'c']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/unzip.ts)
