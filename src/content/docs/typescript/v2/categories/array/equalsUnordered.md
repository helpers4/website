---
title: "equalsUnordered"
sidebar:
  label: "equalsUnordered"
---

Order-independent (set-style) array equality.

Two arrays are considered equal when they have the same length and every
element of `arr1` has at least one structural match in `arr2` (and vice
versa via the length check). Nested arrays are compared recursively with
the same order-independent semantics. Nested plain objects are compared
with equalsShallow from `object/`. All other values use strict
equality (`===`).

Use this when the inputs represent unordered collections (sets, tags…).
For positional equality use equalsShallow or equalsDeep
from this category.

> Available since v2.0.0

## Import

```ts
import { equalsUnordered } from '@helpers4/array';
```

## Signature


```ts
equalsUnordered<T>(arr1: readonly T[], arr2: readonly T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arr1` | `readonly T[]` | First array |
| `arr2` | `readonly T[]` | Second array |

## Returns

`boolean` — `true` if both arrays contain the same items regardless of order, `false` otherwise.

## Examples

### Compare identical arrays regardless of order

Returns true when both arrays contain the same elements, in any order.

```ts
equalsUnordered([1, 2, 3], [3, 2, 1])
// => true
```

### Detect different arrays

Returns false when arrays contain different elements.

```ts
equalsUnordered([1, 2], [1, 3])
// => false
```

### Compare arrays of objects

Supports shallow comparison of nested objects.

```ts
equalsUnordered([{ a: 1 }], [{ a: 1 }])
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/equalsUnordered.ts)
