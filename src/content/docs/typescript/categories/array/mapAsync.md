---
title: "mapAsync"
sidebar:
  label: "mapAsync"
---

The async counterpart to `Array.prototype.map`: applies `fn` to every item and resolves to
an array of the results, in input order — regardless of which call finishes first.

`Array.prototype.map(asyncFn)` alone doesn't do this: it returns an array of *unresolved*
promises (`Promise<R>[]`), not `Promise<R[]>` — you'd still need to wrap it in
`Promise.all(...)` yourself, and there'd be no way to cap concurrency. This does both.

With no `concurrency` given, every call starts immediately (like
`Promise.all(array.map(fn))`). Pass `concurrency` to cap how many run at once — e.g. to
avoid overwhelming an API. Rejects with the first error thrown by `fn`, same as
`Promise.all`; other already-started calls keep running in the background but their
outcome is ignored.

> Available since v3.0.4

## Import

```ts
import { mapAsync } from '@helpers4/array';
```

## Signature


```ts
mapAsync<T, R>(array: readonly T[], fn: function, concurrency?: number): Promise<R[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to map over |
| `fn` | `function` | Async \(or sync\) function called with \`\(item, index\)\` |
| `concurrency` | `number` | Maximum number of concurrent calls\. Defaults to unlimited\. *(optional)* |

## Returns

`Promise<R[]>` — The mapped results, in input order

## Examples

### Map over an array with an async function

Every call starts immediately, results come back in input order.

```ts
await mapAsync([1, 2, 3], async (n) => n * 2)
// => [2, 4, 6]
```

### Cap concurrency to avoid overwhelming an API

At most `concurrency` calls run at once; the rest queue and wait.

```ts
await mapAsync(urls, (url) => fetch(url).then(r => r.json()), 2)
// at most 2 concurrent fetch() calls
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/mapAsync.ts)
