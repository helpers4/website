---
title: "retry"
sidebar:
  label: "retry"
description: "Retries a promise-returning function until it succeeds or runs out of attempts, then rejects with the last error."
version: "3.1.3"
---

Retries a promise-returning function until it succeeds or runs out of attempts, then rejects
with the last error.

Takes either `(fn, maxAttempts, delayMs)` for a fixed delay between attempts, or
`(fn, options)` to only retry some errors or to make the delay grow between attempts — see
RetryOptions.

> Available since v1.9.0

## Import

```ts
import { retry } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { retry } from 'helpers4/promise';
```

## Signature


```ts
retry<T>(fn: function, maxAttempts?: number, delayMs?: number): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to retry |
| `maxAttempts` | `number` |  *(optional)* |
| `delayMs` | `number` | Delay between attempts in milliseconds \(default \`1000\`\), when \`maxAttemptsOrOptions\` is a number *(optional)* |

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

### Exponential backoff

Pass a function as delayMs to make the wait grow after each failed attempt.

```ts
const waits: number[] = [];
await retry(() => Promise.reject(new Error('down')), {
  attempts: 4,
  delayMs: (attempt) => {
    const ms = 2 ** (attempt - 1); // 1, 2, 4
    waits.push(ms);
    return ms;
  },
}).catch(() => {});
// waits => [1, 2, 4]
```

### Only retry some errors

shouldRetry rethrows anything it rejects at once, without waiting or retrying.

```ts
let attempt = 0;
await retry(() => {
  attempt++;
  return Promise.reject(new Error('invalid input'));
}, { attempts: 5, delayMs: 10, shouldRetry: (error) => /timeout/.test(String(error)) })
// => rejects with 'invalid input' after a single attempt
```

## Related Types

### `RetryOptions`

Options for retry.

```ts
interface RetryOptions {
  attempts?: number;
  delayMs?: number | function;
  shouldRetry?: function;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/retry.ts)
