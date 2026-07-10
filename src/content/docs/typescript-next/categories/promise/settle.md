---
title: "settle"
sidebar:
  label: "settle"
---

Runs an array of promises concurrently and partitions the outcomes instead of
rejecting on the first failure, unlike `Promise.all`.
Built on top of `Promise.allSettled`, but returns fulfilled values and rejection
reasons already split apart so callers don't need to inspect `status` themselves.

> Available since next

## Import

```ts
import { settle } from '@helpers4/promise';
```

## Signature


```ts
settle<T>(promises: readonly Promise<T>[]): Promise<object>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `promises` | `readonly Promise<T>[]` | Promises to run concurrently |

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/promise/settle.ts)
