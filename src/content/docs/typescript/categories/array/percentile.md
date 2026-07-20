---
title: "percentile"
sidebar:
  label: "percentile"
---

Calculates the p-th percentile of an array of numbers using linear interpolation between
the closest ranks. Returns `NaN` for an empty array. Does not mutate the input array.

> Available since v3.0.3

## Import

```ts
import { percentile } from '@helpers4/array';
```

## Signature


```ts
percentile(array: readonly number[], p: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[]` | The array of numbers |
| `p` | `number` | The percentile to compute, from \`0\` to \`100\` |

## Returns

`number` — The interpolated value at percentile `p`, or `NaN` if the array is empty

## Examples

### Median via the 50th percentile

The 50th percentile is equivalent to the median.

```ts
percentile([1, 2, 3, 4], 50)
// => 2.5
```

### Min and max via 0 and 100

The 0th and 100th percentiles are the min and max.

```ts
percentile([4, 1, 3, 2], 0)   // => 1
percentile([4, 1, 3, 2], 100) // => 4
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/percentile.ts)
