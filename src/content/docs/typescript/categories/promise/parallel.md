---
title: "parallel"
sidebar:
  label: "parallel"
---

Runs an array of async functions with a concurrency limit.
At most `limit` functions will be running at any time. `Infinity` means no cap (every
function starts immediately); any other non-finite or non-positive value (`NaN`, `0`,
negative) is clamped to `1` (fully sequential) rather than rejected.

> Available since v2.0.0

## Import

```ts
import { parallel } from '@helpers4/promise';
```

## Signature


```ts
parallel<T>(functions: readonly function[], limit: number): Promise<T[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `functions` | `readonly function[]` | Array of functions that return promises |
| `limit` | `number` | Maximum number of concurrent executions |

## Returns

`Promise<T[]>` — Promise that resolves with an array of results in the same order as the input

## Examples

### Run tasks with concurrency limit

Executes async functions with at most N running concurrently.

```ts
const results = await parallel(
  [() => fetch('/a'), () => fetch('/b'), () => fetch('/c')],
  2
)
// At most 2 requests run at a time; results are in order
```

### Sequential execution with limit of 1

Setting limit to 1 runs functions one at a time.

```ts
await parallel([fnA, fnB, fnC], 1)
// Runs fnA, then fnB, then fnC
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/parallel.ts)
