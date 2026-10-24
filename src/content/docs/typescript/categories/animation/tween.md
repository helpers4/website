---
title: "tween"
sidebar:
  label: "tween"
description: "Animates a value from `from` to `to` over `durationMs`, calling `onUpdate` with the blended value at each frame, for wh…"
version: "3.1.6"
---

Animates a value from `from` to `to` over `durationMs`, calling `onUpdate` with the blended
value at each frame, for what CSS cannot animate: canvas drawing, a scroll position, WebGL
uniforms, numbers shown as text.

It runs on frameLoop: `onUpdate` is called right away with `from`, then once per
frame, and last with the value at progress `1` (exactly `to` with the default blending).

> Available since v3.1.5

## Import

```ts
import { tween } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { tween } from 'helpers4/animation';
```

## Signature


```ts
tween<T, V>(options: TweenOptions<T, V> & object): FrameLoop
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `TweenOptions<T, V> & object` | Values, duration, easing, blending, callback and cancellation — see TweenOptions |

## Returns

`FrameLoop` — A Tween, to cancel it or await its end

## Examples

### Animate what CSS cannot

onUpdate receives the interpolated value at each frame, here to draw on a canvas.

```ts
await tween({
  from: { x: 0, opacity: 0 },
  to: { x: 120, opacity: 1 },
  durationMs: 400,
  easing: parseEasing('ease-out')!,
  onUpdate: ({ x, opacity }) => draw(x, opacity),
}).finished;
```

### Cancel a running tween

finished resolves with false when cancelled before the end.

```ts
const counter = tween({ from: 0, to: 1000, durationMs: 2000, onUpdate: (n) => (label.textContent = String(Math.round(n))) });
counter.cancel();
await counter.finished // => false
```

## Related Types

### `FrameLoop`

A running frameLoop.

```ts
interface FrameLoop {
  finished: Promise<boolean>;
  cancel(): void;
}
```

### `TweenOptions`

Options for tween.

```ts
interface TweenOptions<T, V> {
  durationMs: number;
  easing?: function;
  from: T;
  interpolate?: function;
  now?: function;
  onUpdate: function;
  signal?: AbortSignal;
  to: T;
}
```

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

### `Tween`

A running tween: the FrameLoop that drives it.

```ts
type Tween = FrameLoop
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/tween.ts)
