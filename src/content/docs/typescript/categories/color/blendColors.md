---
title: "blendColors"
sidebar:
  label: "blendColors"
description: "Composites a source color over a backdrop with a blend mode, as the browser does for `mix-blend-mode` (W3C Compositing…"
version: "3.1.10"
---

Composites a source color over a backdrop with a blend mode, as the browser does for
`mix-blend-mode` (W3C Compositing and Blending Level 1, source-over). Both colors are straight
(non-premultiplied); the maths run in premultiplied space.

> Available since v3.1.8

## Import

```ts
import { blendColors } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { blendColors } from 'helpers4/color';
```

## Signature


```ts
blendColors(backdrop: RgbColor, source: RgbColor, mode: BlendMode): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `backdrop` | `RgbColor` | The color underneath |
| `source` | `RgbColor` | The color painted over it |
| `mode` | `BlendMode` | The blend mode\. Defaults to \`'normal'\`, a plain alpha composite\. |

## Returns

`RgbColor` — The straight result: channels rounded to integers, alpha to 3 decimals

## Examples

### Paint a half-transparent color over another

The default normal mode is a plain alpha composite.

```ts
blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255, a: 0.5 })
// => { r: 128, g: 0, b: 128, a: 1 }
```

### Use a CSS blend mode

Same maths as mix-blend-mode, handy to compute what the browser would paint.

```ts
blendColors({ r: 200, g: 100, b: 50 }, { r: 100, g: 100, b: 100 }, 'multiply')
// => { r: 78, g: 39, b: 20, a: 1 }
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

### `BlendMode`

The blend modes of the W3C Compositing and Blending specification, the same ones as CSS
`mix-blend-mode`. The last four (`hue`, `saturation`, `color`, `luminosity`) are non-separable:
they mix the three channels together instead of one channel at a time.

```ts
type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/blendColors.ts)
