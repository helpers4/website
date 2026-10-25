---
title: "contains"
sidebar:
  label: "contains"
description: "Whether a point or a rectangle is inside a rectangle."
version: "3.1.9"
---

Whether a point or a rectangle is inside a rectangle.

For a point (hit-testing), the left and top edges are inside and the right and bottom ones are
not, so a point on the edge between two adjacent rectangles hits exactly one of them. A
rectangle is inside when it does not stick out: it may touch any edge.

> Available since v3.1.5

## Import

```ts
import { contains } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { contains } from 'helpers4/geometry';
```

## Signature


```ts
contains(r: Rect, target: Point | Rect): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `r` | `Rect` | The containing rectangle |
| `target` | `Point \| Rect` | A point, or a rectangle |

## Returns

`boolean` — `true` if `target` is inside `r`

## Examples

### Hit-test a click

Shared edges hit once: the right and bottom edges are outside.

```ts
const hit = hotspots.find((zone) => contains(zone, { x: event.offsetX, y: event.offsetY }));
```

### Is a layer fully on screen?

A rectangle is inside when it does not stick out.

```ts
contains(viewport, layerBounds)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/contains.ts)
