---
title: "defer"
sidebar:
  label: "defer"
---

Runs an async function and guarantees that all deferred callbacks are
executed afterwards, in LIFO order (last registered = first executed),
regardless of whether the main work succeeds or throws.

Inspired by Radashi's `defer`. Useful for resource cleanup, temporary file
removal, or any "undo" logic that must run even on failure.

> Available since v2.0.0

## Import

```ts
import { defer } from '@helpers4/promise';
```

## Signature


```ts
defer<T>(fn: function): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | An async function that receives a `defer` registration function. |

## Returns

`Promise<T>` — The resolved value of `fn`.

## Examples

### Cleanup always runs

Registered callbacks execute after the main function, even on success.

```ts
const result = await defer(async (d) => {
  d(() => console.log('cleanup'));
  return 42;
});
// logs: 'cleanup' — result is 42
```

### LIFO order

Multiple callbacks are called in reverse registration order.

```ts
await defer(async (d) => {
  d(() => console.log('step 1'));
  d(() => console.log('step 2'));
  d(() => console.log('step 3'));
});
// logs: 'step 3', 'step 2', 'step 1'
```

### Cleanup runs even on failure

Callbacks still execute when the main function throws; the error is re-thrown after.

```ts
const releaseLock = () => console.log('lock released');
await defer(async (d) => {
  d(releaseLock);
  throw new Error('something failed');
}).catch(() => {});
// logs: 'lock released'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/promise/defer.ts)
