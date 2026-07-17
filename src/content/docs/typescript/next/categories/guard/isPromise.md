---
title: "isPromise"
sidebar:
  label: "isPromise"
---

Checks if a value is a Promise or a thenable.

Returns `true` for any object that has `.then()` and `.catch()` methods,
including native Promises and userland implementations.

> Available since v2.0.0

## Import

```ts
import { isPromise } from '@helpers4/guard';
```

## Signature


```ts
isPromise(value: unknown): value is PromiseLike<unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PromiseLike<unknown>` — True if value is a Promise-like object

## Examples

### isPromise



```ts
isPromise(Promise.resolve(42))     // => true
isPromise(new Promise(() => {}))   // => true
isPromise({ then: () => {} })      // => false (no .catch)
isPromise(42)                      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isPromise.ts)
