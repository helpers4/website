---
title: "falsyPromiseOrThrow"
sidebar:
  label: "falsyPromiseOrThrow"
---

Returns a function that passes through falsy data or throws an error.

> Available since v1.0.0

## Import

```ts
import { falsyPromiseOrThrow } from '@helpers4/promise';
```

## Signature


```ts
falsyPromiseOrThrow<T>(error: string): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | The error message to throw if data is truthy |

## Returns

`function` — A function that returns the data if falsy, or throws

## Examples

### Pass through falsy values

Returns the value if falsy, throws otherwise.

```ts
Promise.resolve(null).then(falsyPromiseOrThrow('Expected falsy'))
// => null
```

### Throw on truthy values

Throws an error when the value is truthy.

```ts
Promise.resolve('oops').then(falsyPromiseOrThrow('Should be empty'))
// throws Error('Should be empty')
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/promise/falsyPromiseOrThrow.ts)
