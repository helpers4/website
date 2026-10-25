---
title: "rgbToCss"
sidebar:
  label: "rgbToCss"
description: "Formats an RGB(A) color as a CSS `rgb()` value, in the modern space-separated syntax that every current browser and SVG…"
version: "3.1.9"
---

Formats an RGB(A) color as a CSS `rgb()` value, in the modern space-separated syntax that
every current browser and SVG renderer reads.

Channels are clamped to 0-255 and rounded; alpha is clamped to 0-1, rounded to 3 decimals, and
left out when the color is opaque.

> Available since v3.1.5

## Import

```ts
import { rgbToCss } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { rgbToCss } from 'helpers4/color';
```

## Signature


```ts
rgbToCss(color: RgbColor): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color to format\. \`a\` defaults to 1 \(opaque\) when omitted\. |

## Returns

`string` — `rgb(r g b)`, or `rgb(r g b / a)` when translucent

## Examples

### Opaque color

The alpha is left out.

```ts
rgbToCss({ r: 255, g: 128, b: 0 }) // => 'rgb(255 128 0)'
```

### Translucent color

The alpha comes after a slash.

```ts
rgbToCss({ r: 255, g: 128, b: 0, a: 0.5 }) // => 'rgb(255 128 0 / 0.5)'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/rgbToCss.ts)
