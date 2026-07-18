---
title: "once"
sidebar:
  label: "once"
---

Creates a function that is restricted to be called only once.
Subsequent calls return the cached result of the first invocation.

The returned function exposes a `.reset()` method to clear the cache and
allow the original function to be called again.

> Available since v2.0.0

## Import

```ts
import { once } from '@helpers4/function';
```

## Signature


```ts
once<A extends unknown[], R>(fn: function): OnceFn<A, R>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to wrap |

## Returns

`OnceFn<A, R>` — A function that invokes `fn` at most once, with a `.reset()` method

## Examples

### Run expensive setup only once

The wrapped function executes only on the first call; all subsequent calls return the cached result.

```ts
const init = once(() => ({ config: 'loaded' }));

const a = init(); // runs the function
const b = init(); // returns cached result
a === b; // => true

init.reset(); // clear cache
const c = init(); // runs the function again
a === c; // => false (new object)
```

### Guard against multiple event-listener registrations

Ensure a side-effecting setup (e.g. addEventListener) runs at most once.

```ts
const register = once((el: HTMLElement) => {
  el.addEventListener('click', handler);
});

register(button); // registers handler
register(button); // no-op — handler already registered
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/function/once.ts)
