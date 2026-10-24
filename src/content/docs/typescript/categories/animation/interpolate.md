---
title: "interpolate"
sidebar:
  label: "interpolate"
description: "Blends two values of the same shape: every number goes from its value in `from` (`t = 0`) to its value in `to` (`t = 1`…"
version: "3.1.6"
---

Blends two values of the same shape: every number goes from its value in `from` (`t = 0`) to
its value in `to` (`t = 1`), with lerp, through arrays and plain objects.

`t` is not clamped, so an easing that overshoots (a spring, a back curve) carries the value
past `to` and back. Keys and lengths come from `from`; the result is a new value.

> Available since v3.1.5

## Import

```ts
import { interpolate } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { interpolate } from 'helpers4/animation';
```

## Signature


```ts
interpolate<T extends Interpolatable>(from: T, to: T, t: number): Interpolated<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `T` | The value at \`t = 0\` |
| `to` | `T` | The value at \`t = 1\`, with the same shape |
| `t` | `number` | The progress, usually the output of an easing |

## Returns

`Interpolated<T>` — The blended value

## Examples

### Blend a set of properties

Every number in the structure moves from its start to its end value.

```ts
interpolate({ x: 0, y: 100 }, { x: 50, y: 0 }, 0.5) // => { x: 25, y: 50 }
```

### With an easing

Pass the eased progress as t; overshooting easings carry the value past the end.

```ts
interpolate(0, 100, parseEasing('ease-out')!(0.5)) // => 68.46...
```

## Related Types

### `Interpolatable`

A value interpolate can blend: a number, or arrays and plain objects of them, nested
at will (a point, a color, a whole set of style properties).

```ts
type Interpolatable = number | readonly Interpolatable[] | { readonly [key: string]: Interpolatable }
```

### `Interpolated`

The type of an interpolated value: the shape of the input, with literal numbers widened to
`number` (`interpolate(0, 10, t)` is a `number`, not `0 | 10`).

```ts
type Interpolated<T> = T extends number
  ? number
  : T extends readonly unknown[]
    ? { -readonly [K in keyof T]: Interpolated<T[K]> }
    : { -readonly [K in keyof T]: Interpolated<T[K]> }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/interpolate.ts)
