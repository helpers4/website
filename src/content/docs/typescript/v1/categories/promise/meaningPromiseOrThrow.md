---
title: "meaningPromiseOrThrow"
sidebar:
  label: "meaningPromiseOrThrow"
---

Generates a `.then()` interceptor that avoids any empty data by throwing an error.

| Input | Result |
|-------|--------|
| any other value, `0`, `boolean` | passes through unchanged |
| `""`, `null`, `undefined`, `[]`, `{}` | throws |

> Available since v1.0.1

## Import

```ts
import { meaningPromiseOrThrow } from '@helpers4/promise';
```

## Signature

```ts
meaningPromiseOrThrow<T>(error: string): (data: T) => T | never
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | The error message thrown if the data is `null`, `undefined`, or empty (`""`, `[]`, `{}`). |

## Returns

`(data: T) => T | never` — A `.then()` interceptor: returns `data` unchanged, or throws `error`.

## Examples

### Reject an empty string

```ts
import { meaningPromiseOrThrow } from '@helpers4/promise';

Promise.resolve('')
  .then(meaningPromiseOrThrow('My custom error message'))
  .then(console.log);
// => 'My custom error message'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/promise/v/1.1.0)
