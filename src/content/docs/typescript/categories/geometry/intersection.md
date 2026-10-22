---
title: "intersection"
sidebar:
  label: "intersection"
description: "The area two rectangles have in common."
version: "3.1.5"
---

The area two rectangles have in common.

Rectangles that only touch (along an edge or at a corner) have no area in common.

> Available since v3.1.5

## Import

```ts
import { intersection } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { intersection } from 'helpers4/geometry';
```

## Signature


```ts
intersection(a: Rect, b: Rect): Rect | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `Rect` | A rectangle |
| `b` | `Rect` | Another rectangle |

## Returns

`Rect | undefined` — The overlapping rectangle, or `undefined` when they do not overlap

## Examples

### Visible part of a layer

Intersect a layer with the viewport.

```ts
intersection({ x: 0, y: 0, width: 10, height: 10 }, { x: 5, y: 5, width: 10, height: 10 })
// => { x: 5, y: 5, width: 5, height: 5 }
```

### Touching rectangles

Sharing an edge is not overlapping.

```ts
intersection({ x: 0, y: 0, width: 10, height: 10 }, { x: 10, y: 0, width: 10, height: 10 }) // => undefined
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
A helper named `intersection` also exists in [`@helpers4/array`](../array/intersection/). If you need both in the same file, rename at import with `as`:

```ts
import { intersection as intersection4geometry } from '@helpers4/geometry';
import { intersection as intersection4array } from '@helpers4/array';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/intersection.ts)
