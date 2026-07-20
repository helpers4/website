---
title: "median"
sidebar:
  label: "median"
---

Calculates the median (middle value) of an array of numbers. For an even-length array,
returns the average of the two middle values. Returns `NaN` for an empty array.
Does not mutate the input array.

The median is the 50th percentile — this delegates to it rather than duplicating
its sort/interpolation logic.

> Available since v3.0.3

## Import

```ts
import { median } from '@helpers4/array';
```

## Signature


```ts
median(array: readonly number[]): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[]` | The array of numbers |

## Returns

`number` — The median value, or `NaN` if the array is empty

## Examples

### Odd-length array

Returns the middle value once sorted.

```ts
median([3, 1, 2])
// => 2
```

### Even-length array

Averages the two middle values.

```ts
median([1, 2, 3, 4])
// => 2.5
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/median.ts)
