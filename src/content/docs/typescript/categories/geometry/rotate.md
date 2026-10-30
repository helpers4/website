---
title: "rotate"
sidebar:
  label: "rotate"
description: "A matrix that rotates points around the origin."
version: "3.1.10"
---

A matrix that rotates points around the origin. With the y axis pointing down (screen, CSS,
SVG), a positive angle turns clockwise, like CSS `rotate()`.

> Available since v3.1.5

## Import

```ts
import { rotate } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { rotate } from 'helpers4/geometry';
```

## Signature


```ts
rotate(radians: number): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `radians` | `number` | The angle, in radians |

## Returns

`Matrix` — The rotation matrix

## Examples

### Quarter turn

With y pointing down, a positive angle turns clockwise, like CSS rotate().

```ts
applyToPoint(rotate(Math.PI / 2), { x: 1, y: 0 }) // => { x: 0, y: 1 } (rounded)
```

### Degrees

Convert degrees to radians first.

```ts
rotate((45 * Math.PI) / 180)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/rotate.ts)
