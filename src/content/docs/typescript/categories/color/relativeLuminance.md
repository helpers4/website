---
title: "relativeLuminance"
sidebar:
  label: "relativeLuminance"
description: "Computes the WCAG 2.x relative luminance of a color: the perceived brightness from 0 (black) to 1 (white), after linear…"
version: "3.1.10"
---

Computes the WCAG 2.x relative luminance of a color: the perceived brightness from 0 (black) to
1 (white), after linearising the sRGB channels. The alpha channel is ignored: flatten a
translucent color over its background first (see blendColors).

> Available since v3.1.10

## Import

```ts
import { relativeLuminance } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { relativeLuminance } from 'helpers4/color';
```

## Signature


```ts
relativeLuminance(color: RgbColor): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | An sRGB color, channels 0\-255 |

## Returns

`number` — The relative luminance, between 0 and 1

## Examples

### Measure how bright a color is

Black is 0, white is 1, and green weighs the most of the three primaries.

```ts
relativeLuminance({ r: 0, g: 0, b: 0 }) // => 0
relativeLuminance({ r: 0, g: 255, b: 0 }) // => 0.7152
```

### Pick light or dark text for a background

A background brighter than about 0.18 takes dark text better than white text.

```ts
relativeLuminance({ r: 255, g: 220, b: 0 }) > 0.18 // => true
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/relativeLuminance.ts)
