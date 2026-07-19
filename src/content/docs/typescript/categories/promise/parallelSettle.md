---
title: "parallelSettle"
sidebar:
  label: "parallelSettle"
---

Runs an array of async functions with a concurrency limit, partitioning the outcomes
instead of rejecting on the first failure — parallel with settle's
fulfilled/rejected split.

Takes functions (not already-created promises, unlike settle) so it controls
*when* each one starts: that's what makes the concurrency limit meaningful. At most
`concurrency` functions run at any time; as soon as one settles, the next queued
function starts.

> Available since v3.0.2

## Import

```ts
import { parallelSettle } from '@helpers4/promise';
```

## Signature


```ts
parallelSettle<T>(functions: readonly function[], concurrency: number): Promise<object>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `functions` | `readonly function[]` | Array of functions that return promises |
| `concurrency` | `number` | Maximum number of concurrent executions |

## Returns

`Promise<object>` — An object with `fulfilled` values and `rejected` reasons, each in input order

## Examples

### Limit concurrency without one failure stopping the rest

Runs at most `concurrency` functions at a time and partitions outcomes instead of rejecting on the first failure.

```ts
const { fulfilled, rejected } = await parallelSettle(
  [() => fetch('/a'), () => fetch('/b'), () => fetch('/c')],
  2
)
// At most 2 requests run at a time; a failing request doesn't stop the others
```

### All functions succeed

Returns an empty rejected array when nothing fails.

```ts
const { fulfilled, rejected } = await parallelSettle(
  [() => Promise.resolve('a'), () => Promise.resolve('b')],
  2
)
// => { fulfilled: ['a', 'b'], rejected: [] }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/parallelSettle.ts)
