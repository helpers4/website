---
title: "settle"
sidebar:
  label: "settle"
---

Runs an array of promises concurrently and partitions the outcomes instead of
rejecting on the first failure, unlike `Promise.all`.
Built on top of `Promise.allSettled`, but returns fulfilled values and rejection
reasons already split apart so callers don't need to inspect `status` themselves.

Pass `onRejected` to react to each failure (e.g. logging) without a separate
loop over `rejected` — it's invoked synchronously, in input order. Its return
value is ignored, and if it throws, the error is swallowed so a misbehaving
callback can't sink the whole `settle()` call.

> Available since next

## Import

```ts
import { settle } from '@helpers4/promise';
```

## Signature


```ts
settle<T>(promises: readonly Promise<T>[], onRejected?: function): Promise<object>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `promises` | `readonly Promise<T>[]` | Promises to run concurrently |
| `onRejected` | `function` | Optional callback invoked with each rejection reason and its index *(optional)* |

## Returns

`Promise<object>` — An object with `fulfilled` values and `rejected` reasons, each in input order

## Examples

### Partition fulfilled and rejected outcomes

Runs promises concurrently and splits results instead of rejecting on the first failure.

```ts
const { fulfilled, rejected } = await settle([
  Promise.resolve(1),
  Promise.reject(new Error('boom')),
  Promise.resolve(3),
])
// => { fulfilled: [1, 3], rejected: [Error('boom')] }
```

### All promises succeed

Returns an empty rejected array when nothing fails.

```ts
const { fulfilled, rejected } = await settle([Promise.resolve('a'), Promise.resolve('b')])
// => { fulfilled: ['a', 'b'], rejected: [] }
```

### Log failures inline with onRejected

Avoids a manual loop over `rejected` for a "best effort, log and keep going" batch.

```ts
const { fulfilled } = await settle(
  [Promise.resolve(1), Promise.reject(new Error('boom')), Promise.resolve(3)],
  (reason, index) => console.error(`item ${index} failed`, reason),
)
// => fulfilled: [1, 3] (logs "item 1 failed Error: boom")
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/promise/settle.ts)
