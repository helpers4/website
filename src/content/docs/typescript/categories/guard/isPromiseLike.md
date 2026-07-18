---
title: "isPromiseLike"
sidebar:
  label: "isPromiseLike"
---

Checks if a value is a thenable (has a `.then()` method).

Looser than isPromise: accepts any object or function with a `then`
method, including non-standard Promise implementations without `.catch()`.
Follows the Promise/A+ specification for thenables.

> Available since v2.0.3

## Import

```ts
import { isPromiseLike } from '@helpers4/guard';
```

## Signature


```ts
isPromiseLike(value: unknown): value is PromiseLike<unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PromiseLike<unknown>` — `true` if value is a PromiseLike (thenable)

## Examples

### Detect any thenable

Returns true for native Promises and any object with a .then() method.

```ts
isPromiseLike(Promise.resolve(1))    // => true
isPromiseLike({ then: () => {} })    // => true   (thenable)
isPromiseLike(42)                    // => false
isPromiseLike(null)                  // => false
isPromiseLike({ then: 'not-a-fn' }) // => false
```

### Handle both Promises and thenables in a utility

Use isPromiseLike to accept any thenable, not just native Promises.

```ts
function toPromise<T>(value: T | PromiseLike<T>): Promise<T> {
  if (isPromiseLike(value)) return Promise.resolve(value);
  return Promise.resolve(value);
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isPromiseLike.ts)
