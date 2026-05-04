---
title: "sortNumberAscFn"
sidebar:
  label: "sortNumberAscFn"
---

# sortNumberAscFn

Sort numbers in ascending order

> Available since v1.9.0

## Import

```ts
import { sortNumberAscFn } from '@helpers4/array';
```

## Examples

### Sort numbers ascending

Use sortNumberAscFn as a comparator for Array.sort().

```ts
[3, 1, 2].sort(sortNumberAscFn)
// => [1, 2, 3]
```

### Sort strings alphabetically

Use sortStringAscFn for locale-aware string sorting.

```ts
['banana', 'apple', 'cherry'].sort(sortStringAscFn)
// => ['apple', 'banana', 'cherry']
```

### Sort objects by property

Use createSortByStringFn to sort objects by a specific string property.

```ts
const items = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }];
items.sort(createSortByStringFn('name'))
// => [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
