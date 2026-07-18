---
title: "rgbToHsl"
sidebar:
  label: "rgbToHsl"
---

Converts an RGB(A) color into HSL(A).

`h`/`s`/`l` are rounded to 1 decimal place to avoid floating-point noise.

> Available since v3.0.0

## Import

```ts
import { rgbToHsl } from '@helpers4/color';
```

## Signature


```ts
rgbToHsl(color: RgbColor): HslColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color to convert. `r`/`g`/`b` are expected in 0-255,   `a` defaults to 1 (opaque) when omitted. |

## Returns

`HslColor` — The equivalent HSL(A) color: `h` in 0-360, `s`/`l` in 0-100

## Examples

### Convert an RGB color to HSL

Useful for generating tints/shades by adjusting lightness.

```ts
rgbToHsl({ r: 255, g: 0, b: 0 })
// => { h: 0, s: 100, l: 50, a: 1 }
```

### Grayscale colors have no saturation

When r, g, and b are equal, the color is achromatic (s = 0).

```ts
rgbToHsl({ r: 128, g: 128, b: 128 })
// => { h: 0, s: 0, l: 50.2, a: 1 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/rgbToHsl.ts)
