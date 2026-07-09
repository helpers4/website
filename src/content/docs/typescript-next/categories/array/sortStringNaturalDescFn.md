---
title: "sortStringNaturalDescFn"
sidebar:
  label: "sortStringNaturalDescFn"
---

Sort strings in descending order using natural (human-friendly) ordering.
Numbers embedded in strings are compared numerically: "W20" > "W11" > "W2".

> Available since v2.0.2

## Import

```ts
import { sortStringNaturalDescFn } from '@helpers4/array';
```

## Examples

### sortStringNaturalDescFn



```ts
['W11', 'W2', 'W20'].sort(sortStringNaturalDescFn) // => ['W20', 'W11', 'W2']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortNatural.ts)
