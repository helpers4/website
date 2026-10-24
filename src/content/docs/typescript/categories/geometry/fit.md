---
title: "fit"
sidebar:
  label: "fit"
description: "Places content in a box like CSS `object-fit` and `object-position`, e.g."
version: "3.1.6"
---

Places content in a box like CSS `object-fit` and `object-position`, e.g. to show a design
frame in a viewport of another size.

The result is the matrix from content coordinates to box coordinates: its `a` and `d` are
the scales, `e` and `f` the position of the content's top-left corner. Combine it with
multiply, map points with applyToPoint, or write it with matrixToCss.
Sizes are expected to be positive.

> Available since v3.1.5

## Import

```ts
import { fit } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { fit } from 'helpers4/geometry';
```

## Signature


```ts
fit(content: Size, box: Size, options: FitOptions): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | `Size` | The size of the content |
| `box` | `Size` | The size of the box |
| `options` | `FitOptions` | Mode and alignment — see FitOptions |

## Returns

`Matrix` — The content-to-box matrix

## Examples

### Show a frame in a viewport

contain (the default) keeps the whole frame visible, centered.

```ts
fit({ width: 200, height: 100 }, { width: 100, height: 100 })
// => { a: 0.5, b: 0, c: 0, d: 0.5, e: 0, f: 25 }
```

### Cover, aligned to the left

Like object-fit: cover; object-position: left.

```ts
fit({ width: 200, height: 100 }, { width: 100, height: 100 }, { mode: 'cover', align: { x: 0 } })
// => { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }
```

## Related Types

### `FitAlign`

Where fit places content in the space left over (or overflowing), as CSS
`object-position`: `0` is left / top, `0.5` centered, `1` right / bottom.

```ts
interface FitAlign {
  x?: number;
  y?: number;
}
```

### `FitOptions`

Options for fit.

```ts
interface FitOptions {
  align?: FitAlign;
  mode?: FitMode;
}
```

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

### `Size`

A width and a height.

```ts
interface Size {
  height: number;
  width: number;
}
```

### `FitMode`

How fit sizes content in a box, as CSS `object-fit`:
- `'contain'`: as large as possible while staying entirely inside (bands remain on two sides);
- `'cover'`: as small as possible while covering the whole box (it overflows on two sides);
- `'fill'`: stretched to the box on each axis, proportions not kept;
- `'none'`: not scaled;
- `'scale-down'`: like `'contain'`, but never enlarged.

```ts
type FitMode = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/fit.ts)
