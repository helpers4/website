---
title: "matrixToCss"
sidebar:
  label: "matrixToCss"
description: "Writes a matrix as a CSS `transform` or SVG `transform` value."
version: "3.1.8"
---

Writes a matrix as a CSS `transform` or SVG `transform` value.

Entries are written as JavaScript prints them, without rounding; non-finite entries give a
value CSS rejects.

> Available since v3.1.5

## Import

```ts
import { matrixToCss } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { matrixToCss } from 'helpers4/geometry';
```

## Signature


```ts
matrixToCss(m: Matrix): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `m` | `Matrix` | The matrix |

## Returns

`string` — `matrix(a, b, c, d, e, f)`

## Examples

### Write a CSS transform

The six entries in CSS and SVG order.

```ts
matrixToCss({ a: 2, b: 0, c: 0, d: 2, e: 10, f: -5 }) // => 'matrix(2, 0, 0, 2, 10, -5)'
```

### Fit a frame into a viewport

Combine with fitContain to scale an element with CSS.

```ts
element.style.transform = matrixToCss(fitContain(frame, viewport));
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/matrixToCss.ts)
