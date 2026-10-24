---
title: "hslToCss"
sidebar:
  label: "hslToCss"
description: "Formats an HSL(A) color as a CSS `hsl()` value, in the modern space-separated syntax."
version: "3.1.7"
---

Formats an HSL(A) color as a CSS `hsl()` value, in the modern space-separated syntax.

The hue is wrapped into 0-360, saturation and lightness are clamped to 0-100, all three rounded
to 1 decimal place; alpha is clamped to 0-1, rounded to 3 decimals, and left out when the color
is opaque.

> Available since v3.1.5

## Import

```ts
import { hslToCss } from '@helpers4/color';
// or, from the all-in-one package (same code, one install):
import { hslToCss } from 'helpers4/color';
```

## Signature


```ts
hslToCss(color: HslColor): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `color` | `HslColor` | The color to format\. \`a\` defaults to 1 \(opaque\) when omitted\. |

## Returns

`string` — `hsl(h s% l%)`, or `hsl(h s% l% / a)` when translucent

## Examples

### Opaque color

The alpha is left out.

```ts
hslToCss({ h: 210, s: 100, l: 50 }) // => 'hsl(210 100% 50%)'
```

### Translucent color with a negative hue

The hue is wrapped into 0-360 and the alpha comes after a slash.

```ts
hslToCss({ h: -30, s: 80, l: 40, a: 0.25 }) // => 'hsl(330 80% 40% / 0.25)'
```

## Related Types

### `HslColor`

An HSL(A) color with channels expressed as plain numbers.

```ts
interface HslColor {
  a?: number;
  h: number;
  l: number;
  s: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/color/hslToCss.ts)
