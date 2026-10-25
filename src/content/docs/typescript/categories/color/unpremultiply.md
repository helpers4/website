---
title: "unpremultiply"
sidebar:
  label: "unpremultiply"
description: "Divides the color channels by the alpha channel: the inverse of premultiply."
version: "3.1.8"
---

Divides the color channels by the alpha channel: the inverse of premultiply. A fully
transparent color has lost its channels, so it comes back as transparent black.

> Available since v3.1.8

## Import

```ts
import { unpremultiply } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { unpremultiply } from 'helpers4/color';
```

## Signature


```ts
unpremultiply(color: RgbColor): RgbColor
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `RgbColor` | A premultiplied color; a missing alpha is 1 |

## Returns

`RgbColor` — The straight (non-premultiplied) color

## Examples

### Recover the straight color

Divides the channels by the alpha, the inverse of premultiply.

```ts
unpremultiply({ r: 127.5, g: 50, b: 0, a: 0.5 })
// => { r: 255, g: 100, b: 0, a: 0.5 }
```

### A transparent color becomes transparent black

The channels are lost at alpha 0, so there is nothing to recover.

```ts
unpremultiply({ r: 0, g: 0, b: 0, a: 0 })
// => { r: 0, g: 0, b: 0, a: 0 }
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/unpremultiply.ts)
