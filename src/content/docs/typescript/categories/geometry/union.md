---
title: "union"
sidebar:
  label: "union"
description: "The smallest rectangle that contains all the given rectangles, e.g."
version: "3.1.10"
---

The smallest rectangle that contains all the given rectangles, e.g. the bounds of a group of
layers.

> Available since v3.1.5

## Import

```ts
import { union } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { union } from 'helpers4/geometry';
```

## Signature


```ts
union(rects: readonly Rect[]): Rect | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `rects` | `readonly Rect[]` | The rectangles |

## Returns

`Rect | undefined` — Their bounding rectangle, or `undefined` for none

## Examples

### Bounds of a group

The smallest rectangle containing every layer.

```ts
union([{ x: 0, y: 0, width: 10, height: 10 }, { x: 20, y: 5, width: 10, height: 10 }])
// => { x: 0, y: 0, width: 30, height: 15 }
```

### Empty group

No rectangle, no bounds.

```ts
union([]) // => undefined
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/union.ts)
