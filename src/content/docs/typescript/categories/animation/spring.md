---
title: "spring"
sidebar:
  label: "spring"
description: "Simulates a damped spring going from `0` to `1`, the curve behind \"spring\" transitions of design tools, and computes ho…"
version: "3.1.7"
---

Simulates a damped spring going from `0` to `1`, the curve behind "spring" transitions of
design tools, and computes how long it takes to settle.

The motion is solved exactly (under-, critically or over-damped), not by stepping a
simulation, so `at` can be called at any time, in any order.

> Available since v3.1.5

## Import

```ts
import { spring } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { spring } from 'helpers4/animation';
```

## Signature


```ts
spring(options: SpringOptions): Spring
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `SpringOptions` | Mass, stiffness, damping, initial velocity — see SpringOptions |

## Returns

`Spring` — A Spring

## Examples

### A bouncy transition

The duration comes from the physics: play it for durationMs.

```ts
const bouncy = spring({ stiffness: 300, damping: 15 });
bouncy.durationMs // => about 900
bouncy.at(bouncy.durationMs) // => 1
```

### Drive a frame loop

at() takes the elapsed time in milliseconds.

```ts
const s = spring();
const start = performance.now();
requestAnimationFrame(function frame(now) {
  draw(s.at(now - start));
  if (now - start < s.durationMs) requestAnimationFrame(frame);
});
```

## Related Types

### `Spring`

A spring animation from `0` to `1`, created by spring.

```ts
interface Spring {
  durationMs: number;
  at(timeMs: number): number;
  easing(t: number): number;
}
```

### `SpringOptions`

Physical parameters of a spring, as design tools (Figma, Framer, ...) expose them.

```ts
interface SpringOptions {
  damping?: number;
  initialVelocity?: number;
  mass?: number;
  stiffness?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/spring.ts)
