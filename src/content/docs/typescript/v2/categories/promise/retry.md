---
title: "retry"
sidebar:
  label: "retry"
---

Retries a promise-returning function up to maxAttempts times

> Available since v1.9.0

## Import

```ts
import { retry } from '@helpers4/promise';
```

## Signature


```ts
retry<T>(fn: function, maxAttempts: number, delayMs: number): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to retry |
| `maxAttempts` | `number` | Maximum number of attempts |
| `delayMs` | `number` | Delay between attempts in milliseconds |

## Returns

`Promise<T>` — Promise that resolves with the result or rejects with the last error

## Examples

### Retry a failing function

Retries the function up to maxAttempts times before giving up.

```ts
let attempt = 0;
await retry(() => {
  attempt++;
  if (attempt < 3) throw new Error('not yet');
  return Promise.resolve('success');
}, 3, 10)
// => 'success' (after 2 failures)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/promise/retry.ts)
