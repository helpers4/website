---
title: "argbToRgb"
sidebar:
  label: "argbToRgb"
---

Converts a 32-bit packed ARGB integer (as used by e.g. Chromium's
`Local State` profile `background_color` field) into a CSS `rgb()` string.
The alpha byte (top 8 bits) is read but discarded — the result is always opaque.

> Available since next

## Import

```ts
import { argbToRgb } from '@helpers4/color';
```

## Signature


```ts
argbToRgb(argb: number): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `argb` | `number` | A 32-bit integer where bits 24-31 are alpha, 16-23 are red,   8-15 are green, and 0-7 are blue |

## Returns

`string` — A `rgb(r,g,b)` CSS color string

## Examples

### Convert a packed ARGB integer to a CSS color

The top byte (alpha) is discarded — the result is always opaque.

```ts
argbToRgb(0xffff0000)
// => 'rgb(255,0,0)'
```

### Alpha byte does not affect the result

Two ARGB values differing only in the alpha byte produce the same rgb() string.

```ts
argbToRgb(0x00ff0000) === argbToRgb(0x80ff0000)
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/color/argbToRgb.ts)
