---
title: "fitScaleDown"
sidebar:
  label: "fitScaleDown"
description: "Places content in a box, like fitContain, but never enlarged (CSS `object-fit: scale-down`)."
version: "3.1.6"
---

Places content in a box, like fitContain, but never enlarged (CSS `object-fit: scale-down`). Shortcut for `fit(content, box, { mode: 'scale-down', align })`.

> Available since v3.1.5

## Import

```ts
import { fitScaleDown } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { fitScaleDown } from 'helpers4/geometry';
```

## Signature


```ts
fitScaleDown(content: Size, box: Size, align?: FitAlign): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | `Size` | The size of the content |
| `box` | `Size` | The size of the box |
| `align` | `FitAlign` | Where to place it, centered by default — see FitAlign *(optional)* |

## Returns

`Matrix` — The content-to-box matrix (`a`/`d` scales, `e`/`f` position)

## Examples

### Centered

Same as fit(content, box, { mode: 'scale-down' }).

```ts
fitScaleDown({ width: 200, height: 100 }, { width: 100, height: 100 })
// => { a: 0.5, b: 0, c: 0, d: 0.5, e: 0, f: 25 }
```

### Aligned to the top-left corner

The third argument is the alignment, like CSS object-position.

```ts
fitScaleDown({ width: 200, height: 100 }, { width: 100, height: 100 }, { x: 0, y: 0 })
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/fitScaleDown.ts)
