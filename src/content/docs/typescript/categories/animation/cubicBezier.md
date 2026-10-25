---
title: "cubicBezier"
sidebar:
  label: "cubicBezier"
description: "Builds the easing function of CSS `cubic-bezier(x1, y1, x2, y2)`: given the progress of time (`0` to `1`), it returns t…"
version: "3.1.8"
---

Builds the easing function of CSS `cubic-bezier(x1, y1, x2, y2)`: given the progress of time
(`0` to `1`), it returns the progress of the animation.

`y1` and `y2` may leave `[0, 1]` to overshoot (the output then does too), but, as in CSS,
`x1` and `x2` may not. The input is clamped to `[0, 1]`. The curve is solved by bisection,
to within `1e-10`.

> Available since v3.1.5

## Import

```ts
import { cubicBezier } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { cubicBezier } from 'helpers4/animation';
```

## Signature


```ts
cubicBezier(x1: number, y1: number, x2: number, y2: number): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `x1` | `number` | x of the first control point, in \`\[0, 1\]\` |
| `y1` | `number` | y of the first control point |
| `x2` | `number` | x of the second control point, in \`\[0, 1\]\` |
| `y2` | `number` | y of the second control point |

## Returns

`function` — The easing function

## Examples

### Play a CSS curve in JavaScript

Same result as cubic-bezier() in CSS, e.g. to drive a canvas animation.

```ts
const ease = cubicBezier(0.25, 0.1, 0.25, 1); // CSS ease
ease(0.5) // => 0.8024...
```

### Overshoot

y control points outside [0, 1] make the animation go past its target and come back.

```ts
const back = cubicBezier(0.34, 1.56, 0.64, 1);
back(0.5) > 1 // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/cubicBezier.ts)
