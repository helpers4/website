---
title: "partition"
sidebar:
  label: "partition"
---

# partition

Splits an array into two groups based on a predicate function.
The first group contains elements for which the predicate returns true,
the second group contains the rest.

> Available since v2.0.0

## Import

```ts
import { partition } from '@helpers4/array';
```

## Signature


```ts
partition<T>(array: readonly T[], predicate: function): [T[], T[]]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to partition |
| `predicate` | `function` | Function that returns true for elements in the first group |

## Returns

`[T[], T[]]` — A tuple of two arrays: [matching, non-matching]

## Examples

### Split numbers by parity

Splits an array into even and odd numbers using a predicate.

```ts
partition([1, 2, 3, 4, 5], n => n % 2 === 0)
// => [[2, 4], [1, 3, 5]]
```

### Separate active and inactive users

Partitions an array of objects based on a boolean property.

```ts
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true },
];
partition(users, u => u.active)
// => [[Alice, Charlie], [Bob]]
```

### Handle empty array

Returns two empty arrays when the input is empty.

```ts
partition([], () => true)
// => [[], []]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/partition.ts)
