---
title: "scale"
sidebar:
  label: "scale"
description: "A matrix that scales points from the origin."
version: "3.1.7"
---

A matrix that scales points from the origin.

> Available since v3.1.5

## Import

```ts
import { scale } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { scale } from 'helpers4/geometry';
```

## Signature


```ts
scale(sx: number, sy: number): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sx` | `number` | Horizontal factor |
| `sy` | `number` | Vertical factor, \`sx\` by default |

## Returns

`Matrix` — The scaling matrix

## Examples

### Uniform scale

One factor scales both axes.

```ts
applyToPoint(scale(2), { x: 3, y: 4 }) // => { x: 6, y: 8 }
```

### Flip vertically

A negative factor mirrors the axis.

```ts
applyToPoint(scale(1, -1), { x: 3, y: 4 }) // => { x: 3, y: -4 }
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/scale.ts)
