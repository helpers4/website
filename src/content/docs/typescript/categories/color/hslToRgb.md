---
title: "hslToRgb"
sidebar:
  label: "hslToRgb"
---

Converts an HSL(A) color into RGB(A).

> Available since v3.0.0

## Import

```ts
import { hslToRgb } from '@helpers4/color';
```

## Signature


```ts
hslToRgb(color: HslColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `HslColor` | The color to convert. `h` is normalized modulo 360 (negative   values wrap around), `s`/`l` are expected in 0-100, `a` defaults to 1   (opaque) when omitted. |

## Returns

`RgbColor` — The equivalent RGB(A) color, with `r`/`g`/`b` rounded to 0-255

## Examples

### Convert an HSL color to RGB

Useful after generating a hue programmatically (e.g. evenly spaced chart colors).

```ts
hslToRgb({ h: 120, s: 100, l: 50 })
// => { r: 0, g: 255, b: 0, a: 1 }
```

### Hue wraps around 360 degrees

Negative or out-of-range hues are normalized before conversion.

```ts
hslToRgb({ h: -360, s: 100, l: 50 })
// => { r: 255, g: 0, b: 0, a: 1 }  (same as h: 0)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/hslToRgb.ts)
