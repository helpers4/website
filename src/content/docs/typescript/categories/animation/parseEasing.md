---
title: "parseEasing"
sidebar:
  label: "parseEasing"
description: "Reads a CSS easing into an easing function, to play in JavaScript the timing a stylesheet or a design tool export descr…"
version: "3.1.10"
---

Reads a CSS easing into an easing function, to play in JavaScript the timing a stylesheet or a
design tool export describes. It is the inverse of toCssLinear.

Accepts every CSS `<easing-function>`:
- the keywords `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`;
- `cubic-bezier(x1, y1, x2, y2)` (see cubicBezier);
- `steps(count[, position])` (see steps);
- `linear(0, 0.25 40%, 1)`: points with optional input positions, as CSS fills them in.

Case and extra spaces are ignored. The input is clamped to `[0, 1]`.

> Available since v3.1.5

## Import

```ts
import { parseEasing } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { parseEasing } from 'helpers4/animation';
```

## Signature


```ts
parseEasing(css: string): function | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `css` | `string` | The CSS easing |

## Returns

`function | null` — The easing function, or `null` if `css` is not a valid CSS easing

## Examples

### Play an exported CSS easing in JavaScript

Keywords, cubic-bezier(), steps() and linear() are all read.

```ts
parseEasing('ease-out')!(0.5)               // => 0.6846...
parseEasing('steps(4, jump-start)')!(0.3)   // => 0.5
parseEasing('linear(0, 0.9 50%, 1)')!(0.25) // => 0.45
```

### Reject unknown easings

Anything that is not a CSS easing gives null.

```ts
parseEasing('bounce') // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/parseEasing.ts)
