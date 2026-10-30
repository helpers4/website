---
title: "intersects"
sidebar:
  label: "intersects"
description: "Whether two rectangles have an area in common, exactly when intersection returns a rectangle: rectangles that only touc…"
version: "3.1.10"
---

Whether two rectangles have an area in common, exactly when intersection returns
a rectangle: rectangles that only touch do not, and neither does an empty (zero width or
height) rectangle.

> Available since v3.1.5

## Import

```ts
import { intersects } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { intersects } from 'helpers4/geometry';
```

## Signature


```ts
intersects(a: Rect, b: Rect): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `Rect` | A rectangle |
| `b` | `Rect` | Another rectangle |

## Returns

`boolean` — `true` if they have an area in common

## Examples

### Is a layer on screen?

True when the rectangles have an area in common.

```ts
intersects(layer, viewport)
```

### Touching is not overlapping

Adjacent rectangles do not intersect.

```ts
intersects({ x: 0, y: 0, width: 10, height: 10 }, { x: 10, y: 0, width: 10, height: 10 }) // => false
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

:::caution[Name conflict]
A helper named `intersects` also exists in [`@helpers4/array`](../array/intersects/). If you need both in the same file, rename at import with `as`:

```ts
import { intersects as intersects4geometry } from '@helpers4/geometry';
import { intersects as intersects4array } from '@helpers4/array';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/intersects.ts)
