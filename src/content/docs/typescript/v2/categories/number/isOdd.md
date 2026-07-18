---
title: "isOdd"
sidebar:
  label: "isOdd"
---

Checks if a value is an odd integer.

Returns `false` for non-numbers, non-integers, `NaN`, `Infinity`, and even integers.

> Available since v2.0.3

## Import

```ts
import { isOdd } from '@helpers4/number';
```

## Signature


```ts
isOdd(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — `true` if value is an integer not divisible by 2

## Examples

### Check if a number is odd

Returns true for integers not divisible by 2, false otherwise.

```ts
isOdd(3)   // => true
isOdd(1)   // => true
isOdd(2)   // => false
isOdd(0)   // => false
isOdd(1.5) // => false  (not an integer)
```

### Filter odd numbers from an array

Use as a predicate in .filter() to extract odd integers.

```ts
const nums = [1, 2, 3, 4, 5, 6];
nums.filter(isOdd)
// => [1, 3, 5]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/number/isOdd.ts)
