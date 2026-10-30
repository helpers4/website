---
title: "unitToRgb"
sidebar:
  label: "unitToRgb"
description: "Converts a color whose channels are floats from `0` to `1` (as Figma, Sketch and Penpot store them) into an RgbColor, w…"
version: "3.1.10"
---

Converts a color whose channels are floats from `0` to `1` (as Figma, Sketch and Penpot store
them) into an RgbColor, with channels from `0` to `255`. Alpha is already `0`–`1` and
is kept as it is. The channels are not rounded: rgbToCss and rgbToHex do it.

> Available since v3.1.10

## Import

```ts
import { unitToRgb } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { unitToRgb } from 'helpers4/color';
```

## Signature


```ts
unitToRgb(color: RgbColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color, with \`r\`, \`g\`, \`b\` from \`0\` to \`1\`\. \`a\` defaults to 1 \(opaque\) |

## Returns

`RgbColor` — The color with channels from `0` to `255`

## Examples

### Read a design tool color

Figma, Sketch and Penpot store channels from 0 to 1.

```ts
rgbToHex(unitToRgb({ r: 1, g: 0.5, b: 0, a: 0.5 })) // => '#ff800080'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/unitToRgb.ts)
