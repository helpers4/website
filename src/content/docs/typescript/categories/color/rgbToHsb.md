---
title: "rgbToHsb"
sidebar:
  label: "rgbToHsb"
description: "Converts an RGB(A) color into HSB(A), the model design tools (Figma, Sketch, XD) show in their color pickers."
version: "3.1.8"
---

Converts an RGB(A) color into HSB(A), the model design tools (Figma, Sketch, XD) show in their
color pickers. Unlike HSL lightness, brightness `100` is the pure color, not white.

`h`/`s`/`b` are rounded to 1 decimal place to avoid floating-point noise.

> Available since v3.1.5

## Import

```ts
import { rgbToHsb } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { rgbToHsb } from 'helpers4/color';
```

## Signature


```ts
rgbToHsb(color: RgbColor): HsbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color to convert\. \`r\`/\`g\`/\`b\` are expected in 0\-255,   \`a\` defaults to 1 \(opaque\) when omitted\. |

## Returns

`HsbColor` — The equivalent HSB(A) color: `h` in 0-360, `s`/`b` in 0-100

## Examples

### Show a color like a design tool picker

Pure colors have a brightness of 100.

```ts
rgbToHsb({ r: 255, g: 0, b: 0 }) // => { h: 0, s: 100, b: 100, a: 1 }
```

### White versus HSL

White is saturation 0 and brightness 100 (HSL would say lightness 100).

```ts
rgbToHsb({ r: 255, g: 255, b: 255 }) // => { h: 0, s: 0, b: 100, a: 1 }
```

## Related Types

### `HsbColor`

An HSB(A) color (also called HSV), the model of design tool color pickers.

```ts
interface HsbColor {
  a?: number;
  b: number;
  h: number;
  s: number;
}
```

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/rgbToHsb.ts)
