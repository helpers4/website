---
sidebar_label: "sum"
---

# sum

Calculates the sum of an array of numbers.

> Available since v2.0.0

## Import

```ts
import { sum } from '@helpers4/number';
```

## Signature

```ts
sum(array: readonly number[]): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly number[]` | The array of numbers to sum |

## Returns

`number` — The sum of all values

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/sum.ts)
