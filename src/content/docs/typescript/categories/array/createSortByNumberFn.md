---
title: "createSortByNumberFn"
sidebar:
  label: "createSortByNumberFn"
---

Creates a sort function for objects by number property.

> Available since v2.0.2

## Import

```ts
import { createSortByNumberFn } from '@helpers4/array';
```

## Signature


```ts
createSortByNumberFn<T extends Record<string, unknown>>(property?: keyof T): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T` | The property to sort by (defaults to 'value') *(optional)* |

## Returns

`SortFn<T>` — Sort function

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sortBy.ts)
