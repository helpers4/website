---
title: "range"
sidebar:
  label: "range"
---

Generates an array of sequential numbers from start to end (exclusive).
If only one argument is provided, it generates numbers from 0 to that value.

> Available since v2.0.0

## Import

```ts
import { range } from '@helpers4/array';
```

## Signature


```ts
range(startOrEnd: number, end?: number, step?: number): number[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `startOrEnd` | `number` | The start value \(if end is provided\) or end value \(if end is omitted\) |
| `end` | `number` | The end value \(exclusive\) *(optional)* |
| `step` | `number` | The increment between values \(default: 1 or \-1 depending on direction\) *(optional)* |

## Returns

`number[]` — An array of sequential numbers

## Examples

### Generate a sequence from 0

Creates an array of numbers from 0 to n-1 with a single argument.

```ts
range(5)
// => [0, 1, 2, 3, 4]
```

### Generate a sequence with start and end

Creates an array from start (inclusive) to end (exclusive).

```ts
range(1, 5)
// => [1, 2, 3, 4]
```

### Generate a sequence with a custom step

Creates an array with a specified increment between values.

```ts
range(0, 10, 2)
// => [0, 2, 4, 6, 8]
```

### Generate a descending sequence

Automatically produces a descending range when start > end.

```ts
range(5, 0)
// => [5, 4, 3, 2, 1]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/range.ts)
