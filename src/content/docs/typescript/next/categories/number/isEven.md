---
title: "isEven"
sidebar:
  label: "isEven"
---

Checks if a value is an even integer.

Returns `false` for non-numbers, non-integers, `NaN`, `Infinity`, and odd integers.

> Available since v2.0.3

## Import

```ts
import { isEven } from '@helpers4/number';
```

## Signature


```ts
isEven(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — `true` if value is an integer divisible by 2

## Examples

### Check if a number is even

Returns true for integers divisible by 2, false otherwise.

```ts
isEven(4)   // => true
isEven(0)   // => true
isEven(3)   // => false
isEven(1.5) // => false  (not an integer)
```

### Filter even numbers from an array

Use as a predicate in .filter() to extract even integers.

```ts
const nums = [1, 2, 3, 4, 5, 6];
nums.filter(isEven)
// => [2, 4, 6]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/number/isEven.ts)
