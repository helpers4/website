---
title: "rgbToUnit"
sidebar:
  label: "rgbToUnit"
description: "Converts an RgbColor (channels from `0` to `255`) into a color whose channels are floats from `0` to `1`, the way Figma…"
version: "3.1.10"
---

Converts an RgbColor (channels from `0` to `255`) into a color whose channels are floats
from `0` to `1`, the way Figma, Sketch and Penpot store them. Alpha is kept as it is.

> Available since v3.1.10

## Import

```ts
import { rgbToUnit } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { rgbToUnit } from 'helpers4/color';
```

## Signature


```ts
rgbToUnit(color: RgbColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color\. \`a\` defaults to 1 \(opaque\) |

## Returns

`RgbColor` — The color with `r`, `g`, `b` from `0` to `1`

## Examples

### Write a design tool color

Channels from 0 to 1, alpha unchanged.

```ts
rgbToUnit({ r: 255, g: 51, b: 0 }) // => { r: 1, g: 0.2, b: 0, a: 1 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/rgbToUnit.ts)
