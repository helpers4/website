---
title: "hsbToRgb"
sidebar:
  label: "hsbToRgb"
description: "Converts an HSB(A) color (also called HSV), as shown by design tool color pickers, into RGB(A)."
version: "3.1.10"
---

Converts an HSB(A) color (also called HSV), as shown by design tool color pickers, into
RGB(A).

> Available since v3.1.5

## Import

```ts
import { hsbToRgb } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { hsbToRgb } from 'helpers4/color';
```

## Signature


```ts
hsbToRgb(color: HsbColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `HsbColor` | The color to convert: \`h\` in degrees \(any value, wrapped into 0\-360\), \`s\`/\`b\`   in 0\-100, \`a\` defaults to 1 \(opaque\) when omitted\. |

## Returns

`RgbColor` — The equivalent RGB(A) color, channels rounded to integers in 0-255

## Examples

### Convert a design tool color

From the HSB values of a color picker to RGB.

```ts
hsbToRgb({ h: 0, s: 100, b: 100 }) // => { r: 255, g: 0, b: 0, a: 1 }
```

### Darker shade

Lower the brightness to darken without changing the hue.

```ts
hsbToRgb({ h: 120, s: 100, b: 50 }) // => { r: 0, g: 128, b: 0, a: 1 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/hsbToRgb.ts)
