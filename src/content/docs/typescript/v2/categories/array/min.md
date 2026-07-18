---
title: "min"
sidebar:
  label: "min"
---

Returns the minimum value in an array using a loop instead of spread,
avoiding the call stack overflow that occurs with `Math.min(...array)`
for very large arrays (> ~65 000 elements).
`null` and `undefined` are treated as empty arrays and return `undefined`.

> Available since v2.0.2

## Import

```ts
import { min } from '@helpers4/array';
```

## Signature


```ts
min(array: readonly number[] | null | undefined): number | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[] \| null \| undefined` | Array of numbers |

## Returns

`number | undefined` — Minimum value, `undefined` for empty arrays, `null`, `undefined`, or `NaN` if any element is `NaN`

## Examples

### Safe minimum for large arrays

Unlike Math.min(...array), min() uses a loop and handles arrays of any size without stack overflow.

```ts
min([3, 1, 4, 1, 5, 9])
// => 1

// Safe for 1 000 000+ elements (Math.min(...arr) would throw):
min(Array.from({ length: 1_000_000 }, (_, i) => i))
// => 0
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/min.ts)
