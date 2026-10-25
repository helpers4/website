---
title: "prefersReducedMotion"
sidebar:
  label: "prefersReducedMotion"
description: "Whether the user asked the system to reduce motion (`prefers-reduced-motion: reduce`)."
version: "3.1.8"
---

Whether the user asked the system to reduce motion (`prefers-reduced-motion: reduce`).

Outside a browser, it returns `false`. To react to changes, use
`watchMedia('(prefers-reduced-motion: reduce)', listener)`.

> Available since v3.1.5

## Import

```ts
import { prefersReducedMotion } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { prefersReducedMotion } from 'helpers4/browser';
```

## Signature


```ts
prefersReducedMotion(): boolean
```

## Returns

`boolean` — `true` if animations should be reduced or removed

## Examples

### Skip an animation

Use a zero duration when the user asked to reduce motion.

```ts
const duration = prefersReducedMotion() ? 0 : 300;
```

### React to changes

Combine with watchMedia to follow the setting while the page is open.

```ts
watchMedia('(prefers-reduced-motion: reduce)', (reduce) => player.setAnimations(!reduce));
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/prefersReducedMotion.ts)
