---
title: "createSortByDateFn"
sidebar:
  label: "createSortByDateFn"
---

Creates a sort function for objects by date property

> Available since v1.9.0

## Import

```ts
import { createSortByDateFn } from '@helpers4/array';
```

## Signature


```ts
createSortByDateFn<T extends Record<string, unknown>>(property?: keyof T): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T` | The property to sort by (defaults to 'date') *(optional)* |

## Returns

`SortFn<T>` — Sort function

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = function
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
