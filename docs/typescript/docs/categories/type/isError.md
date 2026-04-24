---
sidebar_label: "isError"
---

# isError

Checks if a value is an Error instance.

> Available since v2.0.0

## Import

```ts
import { isError } from '@helpers4/type';
```

## Signature


```ts
isError(value: unknown): value is Error
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Error` — True if value is an Error (or subclass like TypeError, RangeError, etc.)

## Examples

### isError



```ts
isError(new Error('oops'))     // => true
isError(new TypeError('bad'))  // => true
isError({ message: 'fake' })  // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isError.ts)
