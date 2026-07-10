---
title: "hexToRgb"
sidebar:
  label: "hexToRgb"
---

Parses a hex color string (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` — the
leading `#` is optional) into its RGB(A) channels.

> Available since next

## Import

```ts
import { hexToRgb } from '@helpers4/color';
```

## Signature


```ts
hexToRgb(hex: string): RgbColor | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `hex` | `string` | The hex color string to parse |

## Returns

`RgbColor | null` — The parsed color, or `null` if `hex` is not a valid hex color

## Examples

### Parse a hex color into RGB channels

The leading # is optional; shorthand 3/4-digit forms are also supported.

```ts
hexToRgb('#ff0000')
// => { r: 255, g: 0, b: 0, a: 1 }
```

### Returns null for an invalid color

Lets you branch on parse failure instead of getting a garbage color.

```ts
hexToRgb('not-a-color')
// => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/color/hexToRgb.ts)
