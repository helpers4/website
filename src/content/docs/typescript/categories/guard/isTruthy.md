---
title: "isTruthy"
sidebar:
  label: "isTruthy"
description: "Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `\"\"`, or `NaN`)."
version: "3.1.0"
---

Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`).

This is the type-safe alternative to `Boolean()` as a filter callback.
Unlike `filter(Boolean)`, using `filter(isTruthy)` correctly narrows the
resulting array type by excluding falsy values.

> Available since v2.0.0

## Import

```ts
import { isTruthy } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isTruthy } from 'helpers4/guard';
```

## Signature


```ts
isTruthy<T>(value: Falsy | T): value is T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `Falsy \| T` | The value to check |

## Returns

`value is T` — True if the value is truthy

## Examples

### Check truthy values

Returns true for all truthy values, false for falsy ones.

```ts
isTruthy(1)         // => true
isTruthy('hello')   // => true
isTruthy(0)         // => false
isTruthy(null)      // => false
```

### Type-safe filter alternative to Boolean

Use isTruthy with Array.filter to get correct TypeScript narrowing.

```ts
const items = ['a', '', null, 'b', undefined];
const result = items.filter(isTruthy);
// => ['a', 'b'] with type string[]
```

## Related Types

### `Falsy`

Union of all falsy types in JavaScript.
Note: `NaN` cannot be represented as a type in TypeScript.

```ts
type Falsy = false | null | undefined | 0 | ''
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isTruthy.ts)
