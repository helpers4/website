---
sidebar_label: "sortNumberAscFn"
---

# sortNumberAscFn

Sort numbers in ascending order

## Import

```ts
import { sortNumberAscFn, SortFn } from '@helpers4/array';
```

## Signature

```ts
const sortNumberAscFn: SortFn<number> = (a: number, b: number) => a - b;
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `a` | First number |
| `b` | Second number |

## Returns

Sort order

## Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number;
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
