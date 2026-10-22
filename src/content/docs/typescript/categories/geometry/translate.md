---
title: "translate"
sidebar:
  label: "translate"
description: "A matrix that moves points by `(tx, ty)`."
version: "3.1.5"
---

A matrix that moves points by `(tx, ty)`.

> Available since v3.1.5

## Import

```ts
import { translate } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { translate } from 'helpers4/geometry';
```

## Signature


```ts
translate(tx: number, ty: number): Matrix
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tx` | `number` | Horizontal offset |
| `ty` | `number` | Vertical offset |

## Returns

`Matrix` — The translation matrix

## Examples

### Move a point

e and f hold the offset.

```ts
applyToPoint(translate(10, 5), { x: 1, y: 1 }) // => { x: 11, y: 6 }
```

### Negative offsets

Move up and to the left.

```ts
applyToPoint(translate(-1, -1), { x: 0, y: 0 }) // => { x: -1, y: -1 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/translate.ts)
