---
title: "max"
sidebar:
  label: "max"
---

Returns the maximum value in an array using a loop instead of spread,
avoiding the call stack overflow that occurs with `Math.max(...array)`
for very large arrays (> ~65 000 elements).

> Available since v2.0.2

## Import

```ts
import { max } from '@helpers4/array';
```

## Signature


```ts
max(array: readonly number[]): number | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[]` | Array of numbers |

## Returns

`number | undefined` — Maximum value, `undefined` for empty arrays, or `NaN` if any element is `NaN`

## Examples

### Safe maximum for large arrays

Unlike Math.max(...array), max() uses a loop and handles arrays of any size without stack overflow.

```ts
max([3, 1, 4, 1, 5, 9])
// => 9

// Safe for 1 000 000+ elements (Math.max(...arr) would throw):
max(Array.from({ length: 1_000_000 }, (_, i) => i))
// => 999999
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/max.ts)
