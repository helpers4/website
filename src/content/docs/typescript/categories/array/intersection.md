---
title: "intersection"
sidebar:
  label: "intersection"
---

# intersection

Compute the intersection of two arrays, meaning the elements that are present
in both arrays.

> Available since v1.0.0

## Import

```ts
import { intersection } from '@helpers4/array';
```

## Signature


```ts
intersection<T>(a: readonly T[], b: readonly T[]): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `readonly T[]` | First array |
| `b` | `readonly T[]` | Second array |

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
