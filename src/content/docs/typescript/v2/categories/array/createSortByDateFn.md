---
title: "createSortByDateFn"
sidebar:
  label: "createSortByDateFn"
---

Creates a sort function for objects by date property.

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
| `property` | `keyof T` | The property to sort by (defaults to `'date'`).   Accepted value types: `Date` (including cross-realm instances), `string`, or   `number` (Unix milliseconds). Any object with a `getTime(): number` method is   also accepted (duck-typed, so cross-realm `Date` objects work correctly).   `null`, `undefined`, and unparseable strings produce `NaN` and sort last,   distinct from a genuine Unix-epoch date (`new Date(0)`). *(optional)* |

## Returns

`SortFn<T>` — Sort function

## Examples

### createSortByDateFn



```ts
const events = [
  { date: new Date('2023-01-01') },
  { date: new Date('2021-06-15') },
];
events.sort(createSortByDateFn('date'))
// => sorted oldest first
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/sortBy.ts)
