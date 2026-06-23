---
title: "shuffle"
sidebar:
  label: "shuffle"
---

Randomly reorders elements of an array using the Fisher-Yates algorithm.
Returns a new array without mutating the original.
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v2.0.0

## Import

```ts
import { shuffle } from '@helpers4/array';
```

## Signature


```ts
shuffle<T>(array: readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to shuffle |

## Returns

`T[]` — A new array with the same elements in random order

## Examples

### Shuffle an array of numbers

Returns a new array with the same elements in random order using the Fisher-Yates algorithm.

```ts
shuffle([1, 2, 3, 4, 5])
// => [3, 1, 5, 2, 4] (random order)
```

### Original array is not mutated

The original array remains unchanged.

```ts
const original = ['a', 'b', 'c'];
const shuffled = shuffle(original);
// original is still ['a', 'b', 'c']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/shuffle.ts)
