---
title: "rectToRect"
sidebar:
  label: "rectToRect"
description: "The translation and scale that put one rectangle exactly on another, for animating or fitting between two boxes."
version: "3.1.10"
---

The translation and scale that put one rectangle exactly on another, for animating or fitting
between two boxes. An axis where `from` has no extent is only translated (scale `1`).

> Available since v3.1.10

## Import

```ts
import { rectToRect } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { rectToRect } from 'helpers4/geometry';
```

## Signature


```ts
rectToRect(from: Rect, to: Rect): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `Rect` | The rectangle to move |
| `to` | `Rect` | The rectangle to reach |

## Returns

`Matrix` — The matrix that maps `from` onto `to`

## Examples

### Put one box on another

The matrix scales and moves the first rectangle exactly onto the second.

```ts
rectToRect({ x: 0, y: 0, width: 10, height: 10 }, { x: 5, y: 5, width: 20, height: 10 })
// => { a: 2, b: 0, c: 0, d: 1, e: 5, f: 5 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/rectToRect.ts)
