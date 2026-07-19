---
title: "rgbToHex"
sidebar:
  label: "rgbToHex"
---

Converts an RGB(A) color into a hex color string.

`r`/`g`/`b` are clamped to 0-255 and rounded to the nearest integer before
formatting. The alpha channel is only appended (as `#rrggbbaa`) when it is
below 1 — fully opaque colors format as the plain 6-digit `#rrggbb`.

> Available since v3.0.0

## Import

```ts
import { rgbToHex } from '@helpers4/color';
```

## Signature


```ts
rgbToHex(color: RgbColor): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color to convert\. \`a\` defaults to 1 \(opaque\) when omitted\. |

## Returns

`string` — A lowercase hex color string

## Examples

### Format an opaque color as hex

Alpha defaults to 1 (opaque) and is omitted from the output.

```ts
rgbToHex({ r: 255, g: 0, b: 0 })
// => '#ff0000'
```

### Include alpha when the color is translucent

A non-opaque color formats as an 8-digit #rrggbbaa string.

```ts
rgbToHex({ r: 0, g: 255, b: 0, a: 0.5 })
// => '#00ff0080'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/rgbToHex.ts)
