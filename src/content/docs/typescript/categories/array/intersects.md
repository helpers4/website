---
title: "intersects"
sidebar:
  label: "intersects"
---

Simple helper that check if two lists shared at least an item in common.

> Available since v1.0.0

## Import

```ts
import { intersects } from '@helpers4/array';
```

## Signature


```ts
intersects<T>(a: readonly T[], b: readonly T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `readonly T[]` | One list |
| `b` | `readonly T[]` | Another list |

## Returns

`boolean` — `true` if one item is in common, `false` otherwise.

## Examples

### Detect shared element

Returns true when at least one element is shared between both arrays.

```ts
intersects([1, 2, 3], [3, 4, 5])
// => true
```

### No common elements

Returns false when no elements are shared.

```ts
intersects([1, 2], [3, 4])
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/intersects.ts)
