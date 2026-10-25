---
title: "observeIntersection"
sidebar:
  label: "observeIntersection"
description: "Calls `callback` each time `element` enters or leaves the viewport (or `options.root`), with an `IntersectionObserver`…"
version: "3.1.9"
---

Calls `callback` each time `element` enters or leaves the viewport (or `options.root`), with an
`IntersectionObserver` dedicated to it: lazy loading, starting an animation when it becomes
visible, pausing a video when it scrolls away. Like `IntersectionObserver` itself, it is also
called once soon after it starts observing.

Without `IntersectionObserver`, it does nothing and returns a function that does nothing.

> Available since v3.1.5

## Import

```ts
import { observeIntersection } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { observeIntersection } from 'helpers4/browser';
```

## Signature


```ts
observeIntersection(element: Element, callback: function, options: ObserveIntersectionOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | `Element` | The element to observe |
| `callback` | `function` | Receives the \`IntersectionObserverEntry\` of \`element\` \(\`entry\.isIntersecting\`, \`entry\.intersectionRatio\`, \.\.\.\) |
| `options` | `ObserveIntersectionOptions` | \`root\`, \`rootMargin\` and \`threshold\`, as for \`IntersectionObserver\`, and a   \`signal\` to stop — see ObserveIntersectionOptions |

## Returns

`function` — A function that stops observing

## Examples

### Play a video only while visible

The callback receives the IntersectionObserverEntry of the element.

```ts
const stop = observeIntersection(video, (entry) => (entry.isIntersecting ? video.play() : video.pause()));
```

### Lazy-load once

Stop observing from the callback after the first load; rootMargin starts loading early.

```ts
const stop = observeIntersection(image, (entry) => {
  if (!entry.isIntersecting) return;
  image.src = image.dataset.src!;
  stop();
}, { rootMargin: '200px' });
```

## Related Types

### `ObserveIntersectionOptions`

Options for observeIntersection: those of `IntersectionObserver`, and a signal.

```ts
interface ObserveIntersectionOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  scrollMargin?: string;
  signal?: AbortSignal;
  threshold?: number | number[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/observeIntersection.ts)
