---
title: "mixColors"
sidebar:
  label: "mixColors"
description: "Mixes two colors in sRGB, as CSS `color-mix(in srgb, color P%, base)` does: `percent`% of `color` and the rest of `base…"
version: "3.1.10"
---

Mixes two colors in sRGB, as CSS `color-mix(in srgb, color P%, base)` does: `percent`% of
`color` and the rest of `base`. Alpha is interpolated in premultiplied space (CSS Color 4), so a
translucent color weighs less in the result. Opaque colors give a plain weighted average of the
channels.

> Available since v3.1.10

## Import

```ts
import { mixColors } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { mixColors } from 'helpers4/color';
```

## Signature


```ts
mixColors(color: RgbColor, base: RgbColor, percent: number): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | The color to mix in |
| `base` | `RgbColor` | The color it is mixed into |
| `percent` | `number` | Share of \`color\`, from 0 \(all \`base\`\) to 100 \(all \`color\`\); clamped\. Defaults to 50\. |

## Returns

`RgbColor` — The straight result: channels rounded to integers, alpha to 3 decimals

## Examples

### Tint a color toward another

The same as color-mix(in srgb, red 25%, blue), usable where there is no CSS engine.

```ts
mixColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 25)
// => { r: 64, g: 0, b: 191, a: 1 }
```

### Mix a translucent color

Alpha is interpolated in premultiplied space, as CSS Color 4 specifies.

```ts
mixColors({ r: 255, g: 0, b: 0, a: 0.5 }, { r: 0, g: 0, b: 255 })
// => { r: 85, g: 0, b: 170, a: 0.75 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/mixColors.ts)
