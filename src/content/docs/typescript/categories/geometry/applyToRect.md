---
title: "applyToRect"
sidebar:
  label: "applyToRect"
description: "Transforms a rectangle by a matrix and returns its bounding box: the smallest axis-aligned rectangle that contains it."
version: "3.1.10"
---

Transforms a rectangle by a matrix and returns its bounding box: the smallest axis-aligned
rectangle that contains it. After a rotation or a skew, the box is larger than the rectangle.

> Available since v3.1.5

## Import

```ts
import { applyToRect } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { applyToRect } from 'helpers4/geometry';
```

## Signature


```ts
applyToRect(m: Matrix, r: Rect): Rect
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `m` | `Matrix` | The matrix |
| `r` | `Rect` | The rectangle |

## Returns

`Rect` — The bounding box of the transformed rectangle

## Examples

### Bounds of a scaled layer

The bounding box of the transformed rectangle.

```ts
applyToRect(scale(2), { x: 1, y: 1, width: 2, height: 3 }) // => { x: 2, y: 2, width: 4, height: 6 }
```

### Bounds of a rotated layer

After a rotation, the box is larger than the rectangle.

```ts
applyToRect(rotate(Math.PI / 4), { x: 0, y: 0, width: 1, height: 1 }).width // => √2
```

## Related Types

### `Matrix`

A 2D affine transformation, in the layout of CSS and SVG `matrix(a, b, c, d, e, f)`:

```text
x' = a·x + c·y + e
y' = b·x + d·y + f
```

```ts
interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}
```

### `Rect`

An axis-aligned rectangle: its top-left corner and its size. Width and height are expected to
be non-negative.

```ts
interface Rect {
  height: number;
  width: number;
  x: number;
  y: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/applyToRect.ts)
