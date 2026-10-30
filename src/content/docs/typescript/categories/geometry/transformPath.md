---
title: "transformPath"
sidebar:
  label: "transformPath"
description: "Transforms SVG path data by a matrix."
version: "3.1.10"
---

Transforms SVG path data by a matrix. The result is written with absolute `M`, `L`, `C`, `Q`
and `Z` only: relative commands are made absolute, `H`/`V`/`S`/`T` are expanded, and arcs
become cubic curves (so any matrix works, skews included). Moving a path is the common case.

> Available since v3.1.10

## Import

```ts
import { transformPath } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { transformPath } from 'helpers4/geometry';
```

## Signature


```ts
transformPath(d: string, m: Matrix, precision: number): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `d` | `string` | The path data |
| `m` | `Matrix` | The matrix, in the CSS/SVG layout |
| `precision` | `number` | Decimals kept per number\. Defaults to \`6\` |

## Returns

`string` — The transformed path data

## Examples

### Move a path

Relative commands are made absolute, then every point is transformed.

```ts
transformPath('M0 0 h10 v10 z', translate(5, 5)) // => 'M5 5 L15 5 L15 15 Z'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/transformPath.ts)
