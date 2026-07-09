---
title: "sortStringNaturalAscInsensitiveFn"
sidebar:
  label: "sortStringNaturalAscInsensitiveFn"
---

Sort strings in ascending natural order, ignoring case **and diacritics**
(`Intl.Collator { sensitivity: 'base' }` — treats é, E, and e as equal).
Numbers embedded in strings are compared numerically: "W2" < "W11" < "W20".

> Available since v2.0.2

## Import

```ts
import { sortStringNaturalAscInsensitiveFn } from '@helpers4/array';
```

## Examples

### sortStringNaturalAscInsensitiveFn



```ts
['W11', 'W2', 'W20'].sort(sortStringNaturalAscInsensitiveFn) // => ['W2', 'W11', 'W20']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortNatural.ts)
