---
title: "timeout"
sidebar:
  label: "timeout"
description: "Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration."
version: "3.1.6"
---

Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration.

The timer is cleared as soon as `promise` settles. If it may never settle, pass a `signal` so
the timer can be cleared on teardown too.

> Available since v2.0.0

## Import

```ts
import { timeout } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { timeout } from 'helpers4/promise';
```

## Signature


```ts
timeout<T>(promise: Promise<T>, ms: number, options: TimeoutOptions): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `promise` | `Promise<T>` | The promise to wrap |
| `ms` | `number` | Timeout duration in milliseconds |
| `options` | `TimeoutOptions` | Cancellation — see TimeoutOptions |

## Returns

`Promise<T>` — A promise that rejects with `TimeoutError` if the timeout is exceeded, or with the
  signal's reason if aborted first

## Examples

### Reject a slow promise

Throws a TimeoutError if the promise does not resolve in time.

```ts
await timeout(fetch('/api/data'), 5000)
// Rejects with TimeoutError if fetch takes longer than 5s
```

### Resolve fast promise normally

Returns the value if the promise resolves before the timeout.

```ts
const result = await timeout(Promise.resolve('fast'), 1000)
// => 'fast'
```

### Cancel the timeout

An aborted signal clears the timer even if the promise never settles.

```ts
const controller = new AbortController()
const result = timeout(new Promise(() => {}), 5000, { signal: controller.signal })
controller.abort('disabled')
await result
// rejects with 'disabled', at once
```

## Related Types

### `TimeoutOptions`

Options for timeout.

```ts
interface TimeoutOptions {
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/timeout.ts)
