---
title: "frameLoop"
sidebar:
  label: "frameLoop"
description: "Calls `onFrame` once per animation frame with the time elapsed since the start, until it returns `false` or the loop is…"
version: "3.1.9"
---

Calls `onFrame` once per animation frame with the time elapsed since the start, until it
returns `false` or the loop is cancelled: the engine behind tween, for anything that
moves on its own clock (a spring played with `at(elapsedMs)`, a physics step, a
progress counter).

The first call happens right away, with `0`, so the first state is drawn before the next
paint. Frames come from `requestAnimationFrame`, or a 16 ms timer where it does not exist
(Node.js, some workers).

> Available since v3.1.5

## Import

```ts
import { frameLoop } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { frameLoop } from 'helpers4/animation';
```

## Signature


```ts
frameLoop(onFrame: function, options: FrameLoopOptions): FrameLoop
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `onFrame` | `function` | Receives the elapsed milliseconds; return \`false\` to stop |
| `options` | `FrameLoopOptions` | Clock and cancellation — see FrameLoopOptions |

## Returns

`FrameLoop` — A FrameLoop, to cancel it or await its end

## Examples

### Play a spring on its own clock

Return false from onFrame to stop; finished then resolves with true.

```ts
const bounce = spring({ damping: 8 });
await frameLoop((elapsed) => {
  ball.style.translate = `0 ${bounce.at(elapsed) * 200}px`;
  return elapsed < bounce.durationMs;
}).finished;
```

### Cancel it

cancel() stops it; finished resolves with false.

```ts
const loop = frameLoop(drawFrame);
loop.cancel();
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

### `FrameLoopOptions`

Options for frameLoop.

```ts
interface FrameLoopOptions {
  now?: function;
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/frameLoop.ts)
