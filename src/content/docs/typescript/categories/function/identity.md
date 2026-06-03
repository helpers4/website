---
title: "identity"
sidebar:
  label: "identity"
---

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

### Return a primitive unchanged

The value is returned as-is with its type preserved.

```ts
identity(42);       // 42
identity('hello');  // 'hello'
identity(true);     // true
```

### Use as a default mapper

Pass identity where a transform function is required but no transformation is needed.

```ts
[1, 2, 3].map(identity); // [1, 2, 3]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/identity.ts)
