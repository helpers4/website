---
sidebar_label: "createSortByNumberFn"
---

# createSortByNumberFn

Creates a sort function for objects by number property

## Import

```ts
import { createSortByNumberFn } from '@helpers4/array';
```

## Signature

```ts
function createSortByNumberFn<T extends Record<string, any>>( property?: keyof T ): SortFn<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to 'value') |

## Returns

Sort function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
