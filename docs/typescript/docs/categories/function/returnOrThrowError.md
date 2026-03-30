---
sidebar_label: "returnOrThrowError"
---

# returnOrThrowError

Return a value or throw an error is null or undefined.

## Import

```ts
import { returnOrThrowError } from '@helpers4/function';
```

## Signature

```ts
function returnOrThrowError<T>(value: T | undefined | null, error: string): T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | A possible non-defined value. |
| `error` | The error message to throw. |

## Returns

A defined value or an error.

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/returnOrThrowError.ts)
