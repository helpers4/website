---
title: "guard"
sidebar:
  label: "guard"
---

Wraps a function so that if it throws, a default value is returned instead of propagating the error.
Works with both synchronous and asynchronous functions.

> Available since v2.0.0

## Import

```ts
import { guard } from '@helpers4/promise';
```

## Signature


```ts
guard<T>(fn: function, defaultValue: T): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to guard |
| `defaultValue` | `T` | The value to return if the function throws |

## Returns

`Promise<T>` — The result of the function, or the default value on error

## Examples

### Fallback on parse error

Returns a default value when the function throws.

```ts
const result = guard(() => JSON.parse('invalid'), {})
// => {}
```

### Pass-through on success

Returns the function result when it does not throw.

```ts
const result = guard(() => JSON.parse('{"a":1}'), {})
// => { a: 1 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/promise/guard.ts)
