---
title: "applyToPoint"
sidebar:
  label: "applyToPoint"
description: "Transforms a point by a matrix."
version: "3.1.8"
---

Transforms a point by a matrix.

> Available since v3.1.5

## Import

```ts
import { applyToPoint } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { applyToPoint } from 'helpers4/geometry';
```

## Signature


```ts
applyToPoint(m: Matrix, p: Point): Point
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `m` | `Matrix` | The matrix |
| `p` | `Point` | The point |

## Returns

`Point` — The transformed point

## Examples

### Transform a point

x' = a·x + c·y + e, y' = b·x + d·y + f.

```ts
applyToPoint({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }, { x: 1, y: 1 }) // => { x: 9, y: 12 }
```

### With a helper matrix

Any matrix built by translate, scale, rotate or multiply.

```ts
applyToPoint(translate(10, 5), { x: 1, y: 1 }) // => { x: 11, y: 6 }
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

### `Point`

A point in 2D space.

```ts
interface Point {
  x: number;
  y: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/applyToPoint.ts)
