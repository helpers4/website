---
title: "without"
sidebar:
  label: "without"
---

Returns a new array with all occurrences of the given values removed.

Unlike `difference`, which operates on two arrays as set operands, `without`
uses a variadic API suited for removing known sentinel values inline.
Uses `SameValueZero` equality (same as `Array.prototype.includes`).
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v2.0.0

## Import

```ts
import { without } from '@helpers4/array';
```

## Signature


```ts
without<T>(array: readonly T[] | null | undefined, values: T[]): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The source array. |
| `values` | `T[]` | One or more values to exclude from the result. |

## Returns

`T[]` — A new array without the specified values.

## Examples

### Remove a single value

Returns a new array with all occurrences of the given value removed.

```ts
without([1, 2, 3, 2, 4], 2)
// => [1, 3, 4]
```

### Remove multiple values

All listed values are excluded from the result.

```ts
without([1, 2, 3, 2, 4], 2, 3)
// => [1, 4]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/without.ts)
