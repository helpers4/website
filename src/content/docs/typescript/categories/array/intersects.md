---
title: "intersects"
sidebar:
  label: "intersects"
---

Simple helper that check if two lists shared at least an item in common.
`null` and `undefined` are treated as empty arrays and return `false`.

> Available since v1.0.0

## Import

```ts
import { intersects } from '@helpers4/array';
```

## Signature


```ts
intersects<T>(a: readonly T[] | null | undefined, b: readonly T[] | null | undefined): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `readonly T[] \| null \| undefined` | One list |
| `b` | `readonly T[] \| null \| undefined` | Another list |

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
