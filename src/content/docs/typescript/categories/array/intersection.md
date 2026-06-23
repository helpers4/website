---
title: "intersection"
sidebar:
  label: "intersection"
---

Compute the intersection of two arrays, meaning the elements that are present
in both arrays.
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v1.0.0

## Import

```ts
import { intersection } from '@helpers4/array';
```

## Signature


```ts
intersection<T>(a: readonly T[] | null | undefined, b: readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `readonly T[] \| null \| undefined` | First array |
| `b` | `readonly T[] \| null \| undefined` | Second array |

## Returns

`T[]` — The intersection of the two arrays

## Examples

### Find common elements

Returns elements present in both arrays.

```ts
intersection([1, 2, 3], [2, 3, 4])
// => [2, 3]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/intersection.ts)
