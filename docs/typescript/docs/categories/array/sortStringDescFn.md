---
sidebar_label: "sortStringDescFn"
---

# sortStringDescFn

Sort strings in descending order

## Import

```ts
import { sortStringDescFn } from '@helpers4/array';
```

## Signature

```ts
const sortStringDescFn: SortFn<string> = (a: string, b: string) => b.localeCompare(a);
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `a` | First string |
| `b` | Second string |

## Returns

Sort order

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sort.ts)
