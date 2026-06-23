---
title: "sum"
sidebar:
  label: "sum"
---

Calculates the sum of an array of numbers.
`null` and `undefined` are treated as empty arrays and return `0`.

> Available since v2.0.0

## Import

```ts
import { sum } from '@helpers4/array';
```

## Signature


```ts
sum(array: readonly number[] | null | undefined): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[] \| null \| undefined` | The array of numbers to sum |

## Returns

`number` — The sum of all values, or `0` for an empty array, `null`, or `undefined`

## Examples

### Sum numbers

Calculates the sum of an array of numbers.

```ts
sum([1, 2, 3, 4])
// => 10
```

### Sum with negative numbers

Handles negative numbers correctly.

```ts
sum([10, -3, 5, -2])
// => 10
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sum.ts)
