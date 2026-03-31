---
sidebar_label: "createSortByStringFn"
---

# createSortByStringFn

Creates a sort function for objects by string property

## Import

```ts
import { createSortByStringFn } from '@helpers4/array';
```

## Signature

```ts
function createSortByStringFn<T extends Record<string, any>>( property?: keyof T, caseInsensitive: boolean = false ): SortFn<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to trying 'value', 'label', 'title', 'description') |
| `caseInsensitive` | Whether to ignore case |

## Returns

Sort function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
