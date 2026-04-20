---
sidebar_label: "isPromise"
---

# isPromise

Checks if a value is a Promise or a thenable.

Returns `true` for any object that has `.then()` and `.catch()` methods,
including native Promises and userland implementations.

> Available since v2.0.0

## Import

```ts
import { isPromise } from '@helpers4/type';
```

## Signature

```ts
isPromise(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a Promise-like object

## Examples

### isPromise



```ts
```ts
isPromise(Promise.resolve(42))     // => true
isPromise(new Promise(() => {}))   // => true
isPromise({ then: () => {} })      // => false (no .catch)
isPromise(42)                      // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPromise.ts)
