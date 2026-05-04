---
title: "identity"
sidebar:
  label: "identity"
---

# identity

Returns the given value unchanged

Useful as a default transform, in function composition, or as a placeholder mapper.

> Available since v2.0.0

## Import

```ts
import { identity } from '@helpers4/function';
```

## Signature


```ts
identity<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The value to return |

## Returns

`T` — The same value

## Examples

### identity



```ts
identity(42);       // 42
identity('hello');  // 'hello'
[1, 2, 3].map(identity); // [1, 2, 3]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/identity.ts)
