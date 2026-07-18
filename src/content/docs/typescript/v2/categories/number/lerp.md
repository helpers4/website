---
title: "lerp"
sidebar:
  label: "lerp"
---

Linearly interpolates between `start` and `end` by the factor `t`.

- `t = 0` returns `start`.
- `t = 1` returns `end`.
- Values of `t` outside `[0, 1]` extrapolate beyond the range.

> Available since v2.0.0

## Import

```ts
import { lerp } from '@helpers4/number';
```

## Signature


```ts
lerp(start: number, end: number, t: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `start` | `number` | The start value. |
| `end` | `number` | The end value. |
| `t` | `number` | The interpolation factor. |

## Returns

`number` — The interpolated value.

## Examples

### Interpolate between two values

Returns the value between start and end at position t (0 = start, 1 = end).

```ts
lerp(0, 100, 0)    // => 0
lerp(0, 100, 0.5)  // => 50
lerp(0, 100, 1)    // => 100
```

### Animate a colour channel

t outside [0, 1] extrapolates beyond the range.

```ts
lerp(0, 255, 0.5) // => 127.5
lerp(0, 10, 2)    // => 20  (extrapolation)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/number/lerp.ts)
