---
sidebar_label: "createSortByDateFn"
---

# createSortByDateFn

Creates a sort function for objects by date property

## Import

```ts
import { createSortByDateFn } from '@helpers4/array';
```

## Signature

```ts
function createSortByDateFn<T extends Record<string, any>>( property?: keyof T ): SortFn<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to 'date') |

## Returns

Sort function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
