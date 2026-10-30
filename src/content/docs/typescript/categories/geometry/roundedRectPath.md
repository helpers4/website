---
title: "roundedRectPath"
sidebar:
  label: "roundedRectPath"
description: "The path of a rectangle with a radius per corner, as SVG path data."
version: "3.1.10"
---

The path of a rectangle with a radius per corner, as SVG path data. Each radius is clamped to
half the smaller side, and a radius of `0` gives a square corner (no arc is written).

> Available since v3.1.10

## Import

```ts
import { roundedRectPath } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { roundedRectPath } from 'helpers4/geometry';
```

## Signature


```ts
roundedRectPath(rect: Rect, radius: number | readonly [number, number, number, number]): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `rect` | `Rect` | The rectangle |
| `radius` | `number \| readonly [number, number, number, number]` | One radius for the four corners, or \`\[topLeft, topRight, bottomRight, bottomLeft\]\` as in CSS \`border\-radius\`\. Negative radii count as \`0\` |

## Returns

`string` — The path data, closed

## Examples

### Round one corner

A radius per corner, in CSS order; zero keeps a square corner.

```ts
roundedRectPath({ x: 0, y: 0, width: 10, height: 10 }, [5, 0, 0, 0])
```

## Related Types

### `Rect`

An axis-aligned rectangle: its top-left corner and its size. Width and height are expected to
be non-negative.

```ts
interface Rect {
  height: number;
  width: number;
  x: number;
  y: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/roundedRectPath.ts)
