---
title: "onPointerIntent"
sidebar:
  label: "onPointerIntent"
description: "Tells a tap from a drag, and hover from touch, on one element: the pointer-event logic every draggable or clickable wid…"
version: "3.1.8"
---

Tells a tap from a drag, and hover from touch, on one element: the pointer-event logic every
draggable or clickable widget rewrites. Press, then either release within `threshold` pixels
(`onTap`) or move past it (`onDragStart`, `onDrag`…, `onDragEnd`).

Only the first pointer that presses is followed (multi-touch ignores the others), and it is
captured with `setPointerCapture` so a drag keeps going outside the element — which means the
element receives the `pointerup` even when released elsewhere. Without pointer events (no
`addEventListener` on `target`), it does nothing and returns a function that does nothing.

> Available since v3.1.8

## Import

```ts
import { onPointerIntent } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { onPointerIntent } from 'helpers4/browser';
```

## Signature


```ts
onPointerIntent(target: Element, handlers: PointerIntentHandlers, options: PointerIntentOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `target` | `Element` | The element to listen on |
| `handlers` | `PointerIntentHandlers` | What to do for each intent — see PointerIntentHandlers |
| `options` | `PointerIntentOptions` | Threshold, button and cancellation — see PointerIntentOptions |

## Returns

`function` — A function that stops listening

## Examples

### Tell a tap from a drag

A press released within the threshold is a tap; moving past it starts a drag.

```ts
const stop = onPointerIntent(handle, {
  onTap: () => select(),
  onDrag: ({ dx, dy }) => move(dx, dy),
});
stop();
```

### Stop with an AbortSignal

One abort() removes the listeners, as on unmount.

```ts
const controller = new AbortController();
onPointerIntent(handle, { onPress }, { signal: controller.signal });
controller.abort();
```

## Related Types

### `PointerIntent`

What a pointer is doing, passed to the handlers of onPointerIntent.

```ts
interface PointerIntent {
  dx: number;
  dy: number;
  event: PointerEvent;
  startX: number;
  startY: number;
  x: number;
  y: number;
}
```

### `PointerIntentHandlers`

Handlers for onPointerIntent; every one is optional.

```ts
interface PointerIntentHandlers {
  onCancel?: function;
  onDrag?: function;
  onDragEnd?: function;
  onDragStart?: function;
  onHover?: function;
  onPress?: function;
  onTap?: function;
}
```

### `PointerIntentOptions`

Options for onPointerIntent.

```ts
interface PointerIntentOptions {
  button?: number;
  signal?: AbortSignal;
  threshold?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/onPointerIntent.ts)
