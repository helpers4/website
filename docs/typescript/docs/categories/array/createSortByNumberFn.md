---
sidebar_label: "createSortByNumberFn"
---

# createSortByNumberFn

Creates a sort function for objects by number property

> Available since v1.9.0

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
