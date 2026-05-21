---
title: "deepEquals"
sidebar:
  label: "deepEquals"
---

Deep comparison of two arrays that only returns true or false.
Arrays are considered equal if they have the same length and all elements 
at corresponding positions are strictly equal. Only compares arrays,
does not go into deep object comparison.

> Available since v2.0.0

## Import

```ts
import { deepEquals } from '@helpers4/array';
```

## Signature


```ts
deepEquals<T>(arrA: T[], arrB: T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrA` | `T[]` | First array to compare |
| `arrB` | `T[]` | Second array to compare |

## Returns

`boolean` — `true` if arrays are deeply equal, `false` otherwise

## Examples

### Compare nested arrays

Deeply compares two arrays including nested structures.

```ts
deepEquals([[1, 2], [3]], [[1, 2], [3]])
// => true
```

### Detect nested differences

Returns false when nested arrays differ.

```ts
deepEquals([[1, 2]], [[1, 3]])
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/deepEquals.ts)
