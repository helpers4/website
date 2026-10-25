---
title: "premultiply"
sidebar:
  label: "premultiply"
description: "Multiplies the color channels by the alpha channel (premultiplied alpha), the form compositing and GPU blending work in."
version: "3.1.9"
---

Multiplies the color channels by the alpha channel (premultiplied alpha), the form compositing
and GPU blending work in. The channels are returned as they are, not rounded, so that
unpremultiply gives the color back.

> Available since v3.1.8

## Import

```ts
import { premultiply } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { premultiply } from 'helpers4/color';
```

## Signature


```ts
premultiply(color: RgbColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | A straight \(non\-premultiplied\) color; a missing alpha is 1 |

## Returns

`RgbColor` — The premultiplied color

## Examples

### Premultiply a half-transparent color

The channels are scaled by the alpha, the form GPU blending and canvas pixels use.

```ts
premultiply({ r: 255, g: 100, b: 0, a: 0.5 })
// => { r: 127.5, g: 50, b: 0, a: 0.5 }
```

### An opaque color is unchanged

A missing alpha counts as 1.

```ts
premultiply({ r: 10, g: 20, b: 30 })
// => { r: 10, g: 20, b: 30, a: 1 }
```

## Related Types

### `RgbColor`

An RGB(A) color with channels expressed as plain numbers, convenient for
further conversion or manipulation.

```ts
interface RgbColor {
  a?: number;
  b: number;
  g: number;
  r: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/premultiply.ts)
