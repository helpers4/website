---
title: "isArrayLike"
sidebar:
  label: "isArrayLike"
---

Checks if a value is array-like: has a non-negative integer `length` property.

Returns `true` for arrays, strings, `arguments` objects, `NodeList`, typed
arrays, and any object with a valid `length`. Functions are excluded even though
they have a `length` (arity), as they are not considered array-like in practice.

> Available since v2.0.3

## Import

```ts
import { isArrayLike } from '@helpers4/guard';
```

## Signature


```ts
isArrayLike(value: unknown): value is ArrayLike<unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is ArrayLike<unknown>` — `true` if value is array-like

## Examples

### Detect array-like values

Arrays, strings, and objects with a non-negative integer length are array-like.

```ts
isArrayLike([1, 2, 3])       // => true
isArrayLike('hello')         // => true
isArrayLike({ length: 3 })   // => true
isArrayLike({ length: -1 })  // => false
isArrayLike(() => {})        // => false  (functions excluded)
isArrayLike(null)            // => false
```

### Convert an array-like value to an array

Use as a guard before Array.from().

```ts
function toArray(value: unknown): unknown[] {
  if (isArrayLike(value)) return Array.from(value);
  return [value];
}
toArray([1, 2])       // => [1, 2]
toArray('abc')        // => ['a', 'b', 'c']
toArray(42)           // => [42]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isArrayLike.ts)
