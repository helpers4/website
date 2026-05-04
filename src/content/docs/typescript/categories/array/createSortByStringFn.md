---
title: "createSortByStringFn"
sidebar:
  label: "createSortByStringFn"
---

# createSortByStringFn

Creates a sort function for objects by string property

> Available since v1.9.0

## Import

```ts
import { createSortByStringFn } from '@helpers4/array';
```

## Signature


```ts
createSortByStringFn<T extends Record<string, unknown>>(property?: keyof T, caseInsensitive: boolean): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T` | The property to sort by (defaults to trying 'value', 'label', 'title', 'description') *(optional)* |
| `caseInsensitive` | `boolean` | Whether to ignore case |

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
