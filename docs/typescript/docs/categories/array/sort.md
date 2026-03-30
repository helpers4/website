---
sidebar_label: "sort"
---

# sort

Sort function type for arrays

## Import

```ts
import { sort, sortNumberAscFn, sortNumberDescFn, sortStringAscFn, sortStringDescFn, sortStringAscInsensitiveFn, createSortByStringFn, createSortByNumberFn, createSortByDateFn } from '@helpers4/array';
```

## `sort`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number;
```

## `sortNumberAscFn`

Sort numbers in ascending order

```ts
const sortNumberAscFn: SortFn<number> = (a: number, b: number) => a - b;
```

| Parameter | Description |
|-----------|-------------|
| `a` | First number |
| `b` | Second number |

**Returns:** Sort order

## `sortNumberDescFn`

Sort numbers in descending order

```ts
const sortNumberDescFn: SortFn<number> = (a: number, b: number) => b - a;
```

| Parameter | Description |
|-----------|-------------|
| `a` | First number |
| `b` | Second number |

**Returns:** Sort order

## `sortStringAscFn`

Sort strings in ascending order

```ts
const sortStringAscFn: SortFn<string> = (a: string, b: string) => a.localeCompare(b);
```

| Parameter | Description |
|-----------|-------------|
| `a` | First string |
| `b` | Second string |

**Returns:** Sort order

## `sortStringDescFn`

Sort strings in descending order

```ts
const sortStringDescFn: SortFn<string> = (a: string, b: string) => b.localeCompare(a);
```

| Parameter | Description |
|-----------|-------------|
| `a` | First string |
| `b` | Second string |

**Returns:** Sort order

## `sortStringAscInsensitiveFn`

Sort strings in ascending order (case insensitive)

```ts
const sortStringAscInsensitiveFn: SortFn<string> = (a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase());
```

| Parameter | Description |
|-----------|-------------|
| `a` | First string |
| `b` | Second string |

**Returns:** Sort order

## `createSortByStringFn`

Creates a sort function for objects by string property

```ts
function createSortByStringFn<T extends Record<string, any>>( property?: keyof T, caseInsensitive: boolean = false ): SortFn<T>
```

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to trying 'value', 'label', 'title', 'description') |
| `caseInsensitive` | Whether to ignore case |

**Returns:** Sort function

## `createSortByNumberFn`

Creates a sort function for objects by number property

```ts
function createSortByNumberFn<T extends Record<string, any>>( property?: keyof T ): SortFn<T>
```

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to 'value') |

**Returns:** Sort function

## `createSortByDateFn`

Creates a sort function for objects by date property

```ts
function createSortByDateFn<T extends Record<string, any>>( property?: keyof T ): SortFn<T>
```

| Parameter | Description |
|-----------|-------------|
| `property` | The property to sort by (defaults to 'date') |

**Returns:** Sort function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
