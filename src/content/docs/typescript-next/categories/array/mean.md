---
title: "mean"
sidebar:
  label: "mean"
---

Calculates the arithmetic mean (average) of an array of numbers.
Returns `NaN` for an empty array.

Pairs with sum for aggregate operations.

> Available since v2.0.0

## Import

```ts
import { mean } from '@helpers4/array';
```

## Signature


```ts
mean(array: readonly number[]): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[]` | The array of numbers to average |

## Returns

`number` — The arithmetic mean, or `NaN` if the array is empty

## Examples

### Average a list of numbers

Returns the arithmetic mean of the array; NaN for empty arrays.

```ts
mean([1, 2, 3, 4])  // => 2.5
mean([10, 20, 30])  // => 20
mean([])            // => NaN
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/mean.ts)
