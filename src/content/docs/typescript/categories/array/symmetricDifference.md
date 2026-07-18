---
title: "symmetricDifference"
sidebar:
  label: "symmetricDifference"
---

Returns the symmetric difference between two arrays: items present in
exactly one of the two arrays (in either, but not both).
`null` and `undefined` are treated as empty arrays.

> Available since v3.0.0

## Import

```ts
import { symmetricDifference } from '@helpers4/array';
```

## Signature


```ts
symmetricDifference<T>(array1: readonly T[] | null | undefined, array2: readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array1` | `readonly T[] \| null \| undefined` | First array |
| `array2` | `readonly T[] \| null \| undefined` | Second array |

## Returns

`T[]` — Items unique to `array1` (in original order), followed by items unique to `array2`

## Examples

### Find items unique to either array

Complements difference()/intersection() with the "in either, not both" set operation.

```ts
symmetricDifference([1, 2, 3], [2, 3, 4])
// => [1, 4]
```

### Identical arrays have no symmetric difference

Items shared by both arrays are excluded entirely.

```ts
symmetricDifference(['a', 'b'], ['a', 'b'])
// => []
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/symmetricDifference.ts)
