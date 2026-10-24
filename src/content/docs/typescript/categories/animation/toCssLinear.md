---
title: "toCssLinear"
sidebar:
  label: "toCssLinear"
description: "Samples an easing function into a CSS `linear()` easing, so any curve (a spring, a custom bounce) can be played by CSS…"
version: "3.1.7"
---

Samples an easing function into a CSS `linear()` easing, so any curve (a spring, a
custom bounce) can be played by CSS transitions and the Web Animations API, which do not take
JavaScript functions.

Values are rounded to 4 decimals. More samples follow the curve more closely, in a longer
string; 32 is smooth for most springs.

> Available since v3.1.5

## Import

```ts
import { toCssLinear } from '@helpers4/animation';
// or, from the all-in-one package (same code, one install):
import { toCssLinear } from 'helpers4/animation';
```

## Signature


```ts
toCssLinear(easing: function, samples: number): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `easing` | `function` | The easing function over \`\[0, 1\]\` |
| `samples` | `number` | Number of points, evenly spaced in time, at least \`2\`\. Defaults to \`32\`\. |

## Returns

`string` — A `linear(...)` string

## Examples

### Play a spring with the Web Animations API

Pass the spring duration and its sampled curve.

```ts
const s = spring({ damping: 15 });
element.animate({ opacity: [0, 1] }, { duration: s.durationMs, easing: toCssLinear(s.easing) });
```

### Any custom curve

Fewer samples give a shorter string.

```ts
toCssLinear((t) => t * t, 5) // => 'linear(0, 0.0625, 0.25, 0.5625, 1)'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/animation/toCssLinear.ts)
