---
title: "get"
sidebar:
  label: "get"
---

Gets a value from an object using a dot/bracket-notated path or explicit key array.

**Two path forms are supported:**

1. **String path** — dot notation (`'a.b.c'`) and bracket notation (`'layers[1].name'`)
   are both accepted and mixed freely.
   - Dot segments are always string keys: `'a.1'` → key `'1'` (string).
   - Bracket segments are always number keys: `'a[1]'` → key `1` (number).
   - String literal paths give **full compile-time type inference** on the return type.
   - Dynamic (non-literal) strings return `unknown`.

2. **Key array** (`PropertyKey[]`) — explicit array of `string | number | symbol` keys,
   no parsing performed. Enables symbol-keyed traversal and compile-time type inference:
   `get(obj, ['a', 'b'] as const)` infers the return type from the path.

Both forms support **all objects** (plain objects, arrays, class instances).
Symbol keys are only reachable via the key-array form.

> Available since v1.9.0

## Import

```ts
import { get } from '@helpers4/object';
```

## Signature


```ts
get<D>(obj: null | undefined, path: string | readonly PropertyKey[], defaultValue: D): D
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `null \| undefined` | The object to read from |
| `path` | `string \| readonly PropertyKey[]` | Dot/bracket-notation string literal or explicit `PropertyKey[]` |
| `defaultValue` | `D` | Returned when the path is absent or resolves to `undefined` |

## Returns

`D` — The value at the path, or `defaultValue`

## Examples

### Access a nested property

Uses a dot-notated path to retrieve a deeply nested value.

```ts
get({ a: { b: { c: 42 } } }, 'a.b.c')
// => 42
```

### Return default for missing path

Returns the default value when the path does not exist.

```ts
get({ a: 1 }, 'b.c', 'default')
// => 'default'
```

### Get via key array (supports symbols)

Pass an explicit PropertyKey[] to bypass parsing. Supports string, number, and symbol keys.

```ts
const id = Symbol('id')
get({ [id]: 'alice' }, [id])
// => 'alice'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/object/get.ts)
