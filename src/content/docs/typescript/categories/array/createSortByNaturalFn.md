---
title: "createSortByNaturalFn"
sidebar:
  label: "createSortByNaturalFn"
---



## Import

```ts
import { createSortByNaturalFn } from '@helpers4/array';
```

## Signature


```ts
createSortByNaturalFn<T extends Record<string, unknown>>(property?: keyof T | readonly keyof T[], caseInsensitive: boolean): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T \| readonly keyof T[]` |  *(optional)* |
| `caseInsensitive` | `boolean` |  |

## Returns

`SortFn<T>` — 

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = function
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sortNatural.ts)
