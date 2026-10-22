---
title: "multiply"
sidebar:
  label: "multiply"
description: "Multiplies matrices, in the mathematical order: the last one applies first."
version: "3.1.5"
---

Multiplies matrices, in the mathematical order: the last one applies first. It is the order of
a CSS `transform` list, so `multiply(translate(10, 0), rotate(r))` is
`transform: translate(10px) rotate(r)`: rotate, then translate.

In other words, `applyToPoint(multiply(m1, m2), p)` equals
`applyToPoint(m1, applyToPoint(m2, p))`.

> Available since v3.1.5

## Import

```ts
import { multiply } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { multiply } from 'helpers4/geometry';
```

## Signature


```ts
multiply(matrices: readonly Matrix[]): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `matrices` | `readonly Matrix[]` | The matrices, outermost first |

## Returns

`Matrix` — Their product, or the identity for none

## Examples

### Same order as a CSS transform list

The last matrix applies first: here, scale then translate.

```ts
// transform: translate(10px, 0) scale(2)
applyToPoint(multiply(translate(10, 0), scale(2)), { x: 1, y: 1 }) // => { x: 12, y: 2 }
```

### Scale around a point

Move the point to the origin, scale, move it back.

```ts
const m = multiply(translate(50, 50), scale(2), translate(-50, -50));
applyToPoint(m, { x: 60, y: 50 }) // => { x: 70, y: 50 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/multiply.ts)
