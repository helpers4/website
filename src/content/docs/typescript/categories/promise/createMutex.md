---
title: "createMutex"
sidebar:
  label: "createMutex"
---

Creates a mutex: a lock allowing at most one holder at a time, queueing excess `acquire()`
callers in FIFO order. A createSemaphore with a single permit.

A factory function rather than a class, matching this package's other stateful helpers
(`debounce`, `throttle`): the returned object closes over an internal semaphore.

Typical use: deduplicating concurrent callers of a non-reentrant operation, e.g. making
sure only one in-flight token-refresh call happens at a time while others wait for it.

> Available since v3.0.4

## Import

```ts
import { createMutex } from '@helpers4/promise';
```

## Signature


```ts
createMutex(): Mutex
```

## Returns

`Mutex` — A Mutex

## Examples

### Deduplicate concurrent token refreshes

Only one caller actually refreshes; the rest wait and reuse its result.

```ts
const mutex = createMutex();
let cached: string | undefined;

async function getToken() {
  return mutex.run(async () => {
    if (cached) return cached;
    cached = await refreshToken(); // only ever runs once per cache miss
    return cached;
  });
}

await Promise.all([getToken(), getToken(), getToken()]);
// refreshToken() was called exactly once
```

### isLocked() reports whether the lock is currently held

Useful for diagnostics or conditionally skipping work while locked.

```ts
const mutex = createMutex();
mutex.isLocked() // => false
const release = await mutex.acquire();
mutex.isLocked() // => true
release();
mutex.isLocked() // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/createMutex.ts)
