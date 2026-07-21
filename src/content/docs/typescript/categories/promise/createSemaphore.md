---
title: "createSemaphore"
sidebar:
  label: "createSemaphore"
---

Creates a semaphore limiting concurrent access to `permits` holders at a time, queueing
excess `acquire()` callers in FIFO order (first to call `acquire` is first granted a
permit when one frees up).

A factory function rather than a class, matching this package's other stateful helpers
(`debounce`, `throttle`): the returned object closes over its internal queue/counter.

Use for concurrency limiting, e.g. rate-limiting calls to an external API. For
mutual-exclusion (at most one holder), see createMutex, which is a semaphore
with one permit.

> Available since v3.0.4

## Import

```ts
import { createSemaphore } from '@helpers4/promise';
```

## Signature


```ts
createSemaphore(permits: number): Semaphore
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `permits` | `number` | Maximum number of concurrent holders\. Must be \`>= 1\` \(\`Infinity\` is   accepted, for an effectively uncapped semaphore\); a non\-integer is floored \(\`2\.9\`   behaves as \`2\`\)\. |

## Returns

`Semaphore` — A Semaphore

## Examples

### Limit concurrent calls to an external API

At most `permits` calls run at once; the rest queue and wait their turn.

```ts
const semaphore = createSemaphore(2);
const results = await Promise.all(
  urls.map((url) => semaphore.run(() => fetch(url)))
);
// at most 2 fetch() calls in flight at any time
```

### run() releases the permit even on error

Prefer run() over manual acquire()/release() — it cannot leak a permit.

```ts
const semaphore = createSemaphore(1);
await semaphore.run(() => {
  throw new Error('oops');
}).catch(() => {});
semaphore.availablePermits() // => 1, the permit was released
```

### Manual acquire() returns a one-shot release function

Calling the same release function twice throws — always caught, even under contention.

```ts
const semaphore = createSemaphore(1);
const release = await semaphore.acquire();
release();
release(); // throws RangeError: this permit was already released
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/createSemaphore.ts)
