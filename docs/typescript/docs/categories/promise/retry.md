---
sidebar_label: "retry"
---

# retry

Retries a promise-returning function up to maxAttempts times

## Import

```ts
import { retry } from '@helpers4/promise';
```

## Signature

```ts
async function retry<T>( fn: () => Promise<T>, maxAttempts: number = 3, delayMs: number = 1000 ): Promise<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `fn` | The function to retry |
| `maxAttempts` | Maximum number of attempts |
| `delayMs` | Delay between attempts in milliseconds |

## Returns

Promise that resolves with the result or rejects with the last error

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/retry.ts)
