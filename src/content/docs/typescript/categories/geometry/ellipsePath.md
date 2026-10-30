---
title: "ellipsePath"
sidebar:
  label: "ellipsePath"
description: "The path of the ellipse that fills a box, as SVG path data: two half-turn arcs."
version: "3.1.10"
---

The path of the ellipse that fills a box, as SVG path data: two half-turn arcs. A square box
gives a circle.

> Available since v3.1.10

## Import

```ts
import { ellipsePath } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { ellipsePath } from 'helpers4/geometry';
```

## Signature


```ts
ellipsePath(box: Rect): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `box` | `Rect` | The bounding box of the ellipse |

## Returns

`string` — The path data, closed

## Examples

### Fill a box with an ellipse

Two half-turn arcs; a square box gives a circle.

```ts
ellipsePath({ x: 0, y: 0, width: 10, height: 6 }) // => 'M0 3 A5 3 0 0 1 10 3 A5 3 0 0 1 0 3 Z'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/ellipsePath.ts)
