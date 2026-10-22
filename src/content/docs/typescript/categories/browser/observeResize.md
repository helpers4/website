---
title: "observeResize"
sidebar:
  label: "observeResize"
description: "Calls `callback` each time the size of `element` changes, with a `ResizeObserver` dedicated to it."
version: "3.1.5"
---

Calls `callback` each time the size of `element` changes, with a `ResizeObserver` dedicated to
it. Like `ResizeObserver` itself, it is also called once soon after it starts observing.

To limit how often it runs, wrap the callback with `debounce` or `throttle` from
`helpers4/function`. Without `ResizeObserver`, it does nothing and returns a function that
does nothing.

> Available since v3.1.5

## Import

```ts
import { observeResize } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { observeResize } from 'helpers4/browser';
```

## Signature


```ts
observeResize(element: Element, callback: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | `Element` | The element to observe |
| `callback` | `function` | Receives the \`ResizeObserverEntry\` of \`element\` |

## Returns

`function` — A function that stops observing

## Examples

### Redraw when an element is resized

The callback receives the ResizeObserverEntry of the element.

```ts
const stop = observeResize(canvas, (entry) => redraw(entry.contentRect));
```

### Limit how often it runs

Compose with debounce from helpers4/function instead of an option.

```ts
const stop = observeResize(frame, debounce(() => fitToViewport(), 100));
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/observeResize.ts)
