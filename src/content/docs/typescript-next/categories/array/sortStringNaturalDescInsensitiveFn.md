---
title: "sortStringNaturalDescInsensitiveFn"
sidebar:
  label: "sortStringNaturalDescInsensitiveFn"
---

Sort strings in descending natural order, ignoring case **and diacritics**
(`Intl.Collator { sensitivity: 'base' }` — treats é, E, and e as equal).
Numbers embedded in strings are compared numerically: "W20" > "W11" > "W2".

> Available since v2.0.2

## Import

```ts
import { sortStringNaturalDescInsensitiveFn } from '@helpers4/array';
```

## Examples

### sortStringNaturalDescInsensitiveFn



```ts
['W11', 'W2', 'W20'].sort(sortStringNaturalDescInsensitiveFn) // => ['W20', 'W11', 'W2']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortNatural.ts)
