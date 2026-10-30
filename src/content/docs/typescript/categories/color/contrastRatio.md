---
title: "contrastRatio"
sidebar:
  label: "contrastRatio"
description: "Computes the WCAG 2 contrast ratio between two colors, from 1 (identical) to 21 (black on white)."
version: "3.1.10"
---

Computes the WCAG 2 contrast ratio between two colors, from 1 (identical) to 21 (black on
white). The lighter color is always put over the darker one, so the order of the arguments does
not matter. The ratio is not rounded, so it can be compared as it is with the WCAG thresholds:
4.5 (AA, normal text), 3 (AA, large text and UI components), 7 (AAA, normal text) and 4.5 (AAA,
large text). Alpha is ignored: flatten translucent colors first (see blendColors).

> Available since v3.1.10

## Import

```ts
import { contrastRatio } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { contrastRatio } from 'helpers4/color';
```

## Signature


```ts
contrastRatio(foreground: RgbColor, background: RgbColor): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `foreground` | `RgbColor` | The text \(or foreground\) color |
| `background` | `RgbColor` | The color behind it |

## Returns

`number` — The contrast ratio, between 1 and 21

## Examples

### Black on white is the maximum contrast

The ratio goes from 1 (identical colors) to 21.

```ts
contrastRatio({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 }) // => 21
```

### Check a text color against the WCAG AA threshold

Normal text needs 4.5; #777777 on white is just under it, #767676 just over.

```ts
const white = { r: 255, g: 255, b: 255 };
contrastRatio({ r: 0x77, g: 0x77, b: 0x77 }, white) >= 4.5 // => false (4.48)
contrastRatio({ r: 0x76, g: 0x76, b: 0x76 }, white) >= 4.5 // => true (4.54)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/contrastRatio.ts)
