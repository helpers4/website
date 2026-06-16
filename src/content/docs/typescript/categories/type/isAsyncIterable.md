---
title: "isAsyncIterable"
sidebar:
  label: "isAsyncIterable"
---

Checks if a value implements the async iterable protocol.

Returns `true` for any object that has a `[Symbol.asyncIterator]()` method,
including async generators. Note that regular iterables (arrays, strings, etc.)
are **not** async iterables.

> Available since v2.0.3

## Import

```ts
import { isAsyncIterable } from '@helpers4/type';
```

## Signature


```ts
isAsyncIterable(value: unknown): value is AsyncIterable<unknown, any, any>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is AsyncIterable<unknown, any, any>` — `true` if value is async iterable

## Examples

### Detect an async generator

Async generators implement the async iterable protocol.

```ts
async function* stream() { yield 1; yield 2; }
isAsyncIterable(stream())   // => true
isAsyncIterable([1, 2, 3])  // => false  (Iterable, not AsyncIterable)
isAsyncIterable('hello')    // => false
```

### Guard before for-await-of

Use to type-narrow before consuming a value with for-await-of.

```ts
async function consume(source: unknown) {
  if (isAsyncIterable(source)) {
    for await (const item of source) {
      console.log(item);
    }
  }
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isAsyncIterable.ts)
