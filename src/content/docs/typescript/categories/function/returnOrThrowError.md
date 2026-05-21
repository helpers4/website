---
title: "returnOrThrowError"
sidebar:
  label: "returnOrThrowError"
---

Return a value or throw an error if null or undefined.

> Available since v1.0.0

## Import

```ts
import { returnOrThrowError } from '@helpers4/function';
```

## Signature


```ts
returnOrThrowError<T>(value: T | null | undefined, error: string): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T \| null \| undefined` | A possible non-defined value. |
| `error` | `string` | The error message to throw. |

## Returns

`T` — A defined value or an error.

## Examples

### Return a defined value

Returns the value when it is defined and not null.

```ts
returnOrThrowError('hello', 'Value is missing')
// => 'hello'
```

### Throw on null

Throws an error when the value is null or undefined.

```ts
returnOrThrowError(null, 'Value is missing')
// throws Error('Value is missing')
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/returnOrThrowError.ts)
