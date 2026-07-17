---
title: "createSortByNumberFn"
sidebar:
  label: "createSortByNumberFn"
---

Creates a sort function for objects by number property.

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
| `property` | `keyof T` | The property to sort by (defaults to `'value'`). Always pass an   explicit key when T does not have a `'value'` property — omitting it on such types   produces a no-op comparator (all elements compare equal).   `null` and `undefined` sort last (treated as `+Infinity`). Non-numeric values   (including booleans — `Number(true) === 1`, `Number(false) === 0`) and `NaN` also   sort last. *(optional)* |

## Returns

`SortFn<T>` — Sort function

## Examples

### createSortByNumberFn



```ts
const items = [{ count: 3 }, { count: 1 }, { count: 2 }];
items.sort(createSortByNumberFn('count'))
// => [{ count: 1 }, { count: 2 }, { count: 3 }]
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/array/sortBy.ts)
