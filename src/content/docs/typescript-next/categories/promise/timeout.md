---
title: "timeout"
sidebar:
  label: "timeout"
---

Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration.

> Available since v2.0.0

## Import

```ts
import { timeout } from '@helpers4/promise';
```

## Signature


```ts
timeout<T>(promise: Promise<T>, ms: number): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `promise` | `Promise<T>` | The promise to wrap |
| `ms` | `number` | Timeout duration in milliseconds |

## Returns

`Promise<T>` — A promise that rejects with `TimeoutError` if the timeout is exceeded

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/promise/timeout.ts)
