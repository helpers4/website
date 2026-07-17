---
title: "truthyPromiseOrThrow"
sidebar:
  label: "truthyPromiseOrThrow"
---

Generates a `.then()` interceptor that avoids any falsy value by throwing an error.

Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

> Available since v1.1.0

## Import

```ts
import { truthyPromiseOrThrow } from '@helpers4/promise';
```

## Signature

```ts
truthyPromiseOrThrow<T>(error: string): (data: T) => T | never
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | The error message thrown if the data is falsy. |

## Returns

`(data: T) => T | never` — A `.then()` interceptor: returns `data` unchanged, or throws `error`.

## Examples

### Reject a falsy value

```ts
import { truthyPromiseOrThrow } from '@helpers4/promise';

Promise.resolve(false)
  .then(truthyPromiseOrThrow('My custom error message'))
  .then(console.log);
// => 'My custom error message'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/promise/v/1.1.0)
