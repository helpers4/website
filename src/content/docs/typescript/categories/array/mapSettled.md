---
title: "mapSettled"
sidebar:
  label: "mapSettled"
description: "Like mapAsync, but never rejects: each item gets its own result, in the shape of `Promise.allSettled`, so one failure d…"
version: "3.1.9"
---

Like mapAsync, but never rejects: each item gets its own result, in the shape of
`Promise.allSettled`, so one failure does not stop or hide the others.

`Promise.allSettled(array.map(fn))` does the same without a concurrency cap; `parallelSettle`
caps it but splits the results into two lists and loses which item failed. This keeps both:
the cap, and one result per item in input order.

> Available since v3.1.5

## Import

```ts
import { mapSettled } from '@helpers4/array';
// or, from the all-in-one package (same code, one install):
import { mapSettled } from 'helpers4/array';
```

## Signature


```ts
mapSettled<T, R>(array: readonly T[], fn: function, options?: number | AsyncArrayOptions): Promise<PromiseSettledResult<Awaited<R>>[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to map over |
| `fn` | `function` | Async \(or sync\) function called with \`\(item, index\)\`; a throw counts as a rejection |
| `options` | `number \| AsyncArrayOptions` | Maximum number of concurrent calls \(defaults to unlimited\), or the options   with a \`signal\` to stop — see AsyncArrayOptions\. An abort is not an outcome: it   rejects the whole call with the signal's reason\. *(optional)* |

## Returns

`Promise<PromiseSettledResult<Awaited<R>>[]>` — One `PromiseSettledResult` per item, in input order

## Examples

### Keep going when some calls fail

Each item gets its own result, like Promise.allSettled.

```ts
await mapSettled([1, 2, 3], (n) => (n === 2 ? Promise.reject('no') : n * 10))
// => [{ status: 'fulfilled', value: 10 }, { status: 'rejected', reason: 'no' }, { status: 'fulfilled', value: 30 }]
```

### Cap concurrency

The third argument limits how many calls run at once.

```ts
const results = await mapSettled(urls, (url) => fetch(url), 4);
```

## Related Types

### `AsyncArrayOptions`

Options for mapAsync, mapSettled, filterAsync and forEachAsync.

```ts
interface AsyncArrayOptions {
  concurrency?: number;
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/mapSettled.ts)
