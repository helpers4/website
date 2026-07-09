---
title: "sortStringNaturalAscFn"
sidebar:
  label: "sortStringNaturalAscFn"
---

Sort strings in ascending order using natural (human-friendly) ordering.
Numbers embedded in strings are compared numerically: "W2" < "W11" < "W20".

> Available since v2.0.2

## Import

```ts
import { sortStringNaturalAscFn } from '@helpers4/array';
```

## Examples

### Natural sort for strings with embedded numbers

sortStringNaturalAscFn treats numeric parts as numbers: "W2" < "W11" < "W20".

```ts
['W20', 'W2', 'W11', 'W01'].sort(sortStringNaturalAscFn)
// => ['W01', 'W2', 'W11', 'W20']
```

### Natural sort for object arrays

createSortByNaturalFn sorts objects with embedded numbers in property values.

```ts
const items = [{ code: 'W20' }, { code: 'W2' }, { code: 'W11' }, { code: 'W01' }];
items.sort(createSortByNaturalFn('code'))
// => W01, W2, W11, W20
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortNatural.ts)
