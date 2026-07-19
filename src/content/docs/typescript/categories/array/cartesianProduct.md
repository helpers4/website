---
title: "cartesianProduct"
sidebar:
  label: "cartesianProduct"
---

Computes the Cartesian product of the provided arrays.

Returns all possible tuples formed by picking one element from each input array,
in lexicographic order relative to the input order.

> Available since v2.0.0

## Import

```ts
import { cartesianProduct } from '@helpers4/array';
```

## Signature


```ts
cartesianProduct<T extends readonly readonly unknown[][]>(arrays: T): mapped[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrays` | `T` | Two or more arrays to combine\. |

## Returns

`mapped[]` — An array of tuples, each containing one element from each input array.

## Examples

### Combine two arrays

Returns all ordered pairs from two arrays.

```ts
cartesianProduct([1, 2], ['a', 'b'])
// => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

### Generate product combinations

Useful for generating all size/color variant combinations.

```ts
cartesianProduct(['S', 'M', 'L'], ['red', 'blue'])
// => [['S','red'],['S','blue'],['M','red'],['M','blue'],['L','red'],['L','blue']]
```

### Empty input returns empty array

If any input array is empty, the result is an empty array.

```ts
cartesianProduct([1, 2], []) // => []
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/cartesianProduct.ts)
