---
title: "simplifyPolyline"
sidebar:
  label: "simplifyPolyline"
description: "Removes the points of a polyline that change its shape by less than `tolerance`, with the Ramer–Douglas–Peucker algorit…"
version: "3.1.10"
---

Removes the points of a polyline that change its shape by less than `tolerance`, with the
Ramer–Douglas–Peucker algorithm: each removed point is at most `tolerance` away from the
simplified line. It shrinks map outlines or traced paths by orders of magnitude while keeping
their look.

The first and last points are always kept. With a `tolerance` of `0`, only points exactly on a
straight line are removed. It is iterative, so very long polylines do not overflow the stack.

> Available since v3.1.5

## Import

```ts
import { simplifyPolyline } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { simplifyPolyline } from 'helpers4/geometry';
```

## Signature


```ts
simplifyPolyline(points: readonly Point[], tolerance: number): Point[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `points` | `readonly Point[]` | The polyline |
| `tolerance` | `number` | The maximum distance between a removed point and the result, in the units of the points |

## Returns

`Point[]` — The kept points, in their original order

## Examples

### Drop a nearly straight point

A point closer than the tolerance to the simplified line is removed.

```ts
simplifyPolyline([{ x: 0, y: 0 }, { x: 1, y: 0.1 }, { x: 2, y: 0 }], 0.5)
// => [{ x: 0, y: 0 }, { x: 2, y: 0 }]
```

### Shrink a map outline

Pick the tolerance in the units of the points, e.g. a fraction of a pixel at the final scale.

```ts
const outline = simplifyPolyline(border, 0.5);
```

## Related Types

### `Point`

A point in 2D space.

```ts
interface Point {
  x: number;
  y: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/simplifyPolyline.ts)
