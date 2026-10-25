---
title: "steps"
sidebar:
  label: "steps"
description: "Builds the easing function of CSS `steps(count, position)`: progress moves by jumps instead of continuously, for frame-…"
version: "3.1.8"
---

Builds the easing function of CSS `steps(count, position)`: progress moves by jumps instead
of continuously, for frame-by-frame sprites, ticking counters, or a design tool's "instant"
transition.

The input is clamped to `[0, 1]`, like cubicBezier.

> Available since v3.1.5

## Import

```ts
import { steps } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { steps } from 'helpers4/animation';
```

## Signature


```ts
steps(count: number, position: StepPosition): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `count` | `number` | Number of steps, a positive integer \(at least 2 with \`'jump\-none'\`\) |
| `position` | `StepPosition` | Where the jumps happen — see StepPosition\. Defaults to \`'jump\-end'\`\. |

## Returns

`function` — The easing function

## Examples

### A four-frame sprite

Progress moves by jumps instead of continuously.

```ts
const fourFrames = steps(4);
fourFrames(0.3) // => 0.25
fourFrames(1)   // => 1
```

### Jump at the start

With 'jump-start', the first jump happens right away.

```ts
steps(4, 'jump-start')(0.3) // => 0.5
```

## Related Types

### `StepPosition`

Where the jumps of a steps easing happen, as in CSS `steps()`:
- `'jump-end'` (or `'end'`, the default): the last jump at the end, so the first value lasts the first step;
- `'jump-start'` (or `'start'`): the first jump at the start;
- `'jump-both'`: a jump at both ends, so neither `0` nor `1` is held;
- `'jump-none'`: no jump at either end, `0` and `1` are held for a step each.

```ts
type StepPosition = 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/steps.ts)
