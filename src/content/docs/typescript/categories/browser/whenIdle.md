---
title: "whenIdle"
sidebar:
  label: "whenIdle"
description: "Runs `callback` when the browser is idle, with `requestIdleCallback`, for work that can wait (prefetching, analytics, w…"
version: "3.1.5"
---

Runs `callback` when the browser is idle, with `requestIdleCallback`, for work that can wait
(prefetching, analytics, warming a cache).

Where `requestIdleCallback` does not exist (Safari, Node.js), it falls back to `setTimeout`,
so the callback still runs, after the current task.

> Available since v3.1.5

## Import

```ts
import { whenIdle } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { whenIdle } from 'helpers4/browser';
```

## Signature


```ts
whenIdle(callback: function, options: WhenIdleOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | `function` | The work to run |
| `options` | `WhenIdleOptions` | Timeout — see WhenIdleOptions |

## Returns

`function` — A function that cancels the callback if it has not run yet

## Examples

### Defer non-urgent work

Runs when the browser is idle, or after the timeout at the latest.

```ts
whenIdle(() => preloadImages(nextScreens), { timeout: 2000 });
```

### Cancel it

The returned function cancels the callback if it has not run yet.

```ts
const cancel = whenIdle(warmCache);
cancel();
```

## Related Types

### `WhenIdleOptions`

Options for whenIdle.

```ts
interface WhenIdleOptions {
  timeout?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/whenIdle.ts)
