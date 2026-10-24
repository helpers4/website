---
title: "invert"
sidebar:
  label: "invert"
description: "The matrix that undoes `m`, e.g."
version: "3.1.7"
---

The matrix that undoes `m`, e.g. to turn a pointer position on screen back into the
coordinates of a transformed layer.

A matrix that flattens the plane onto a line or a point (determinant `0`, like `scale(0)`)
cannot be undone. There is no tolerance: a nearly flat matrix is inverted, with very large
values, as long as they stay finite.

> Available since v3.1.5

## Import

```ts
import { invert } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { invert } from 'helpers4/geometry';
```

## Signature


```ts
invert(m: Matrix): Matrix | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `m` | `Matrix` | The matrix to invert |

## Returns

`Matrix | undefined` — The inverse, or `undefined` when `m` cannot be inverted

## Examples

### Pointer position in a layer

Invert the layer transform to map screen coordinates back into the layer.

```ts
const layer = multiply(translate(100, 50), scale(2));
applyToPoint(invert(layer)!, { x: 120, y: 70 }) // => { x: 10, y: 10 }
```

### Not invertible

A matrix that flattens the plane cannot be undone.

```ts
invert(scale(0)) // => undefined
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

:::caution[Name conflict]
A helper named `invert` also exists in [`@helpers4/object`](../object/invert/). If you need both in the same file, rename at import with `as`:

```ts
import { invert as invert4geometry } from '@helpers4/geometry';
import { invert as invert4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/invert.ts)
