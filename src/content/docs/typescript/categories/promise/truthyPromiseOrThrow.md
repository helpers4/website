---
title: "truthyPromiseOrThrow"
sidebar:
  label: "truthyPromiseOrThrow"
---

# truthyPromiseOrThrow

Returns a function that passes through truthy data or throws an error.

> Available since v1.0.0

## Import

```ts
import { truthyPromiseOrThrow } from '@helpers4/promise';
```

## Signature


```ts
truthyPromiseOrThrow<T>(error: string): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | The error message to throw if data is falsy |

## Returns

`function` — A function that returns the data if truthy, or throws

## Examples

### Pass through truthy values

Returns the value if truthy, throws otherwise.

```ts
Promise.resolve('data').then(truthyPromiseOrThrow('No data'))
// => 'data'
```

### Throw on falsy values

Throws an error when the value is falsy.

```ts
Promise.resolve('').then(truthyPromiseOrThrow('Empty!'))
// throws Error('Empty!')
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/truthyPromiseOrThrow.ts)
