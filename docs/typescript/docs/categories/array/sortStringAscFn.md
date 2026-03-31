---
sidebar_label: "sortStringAscFn"
---

# sortStringAscFn

Sort strings in ascending order

## Import

```ts
import { sortStringAscFn } from '@helpers4/array';
```

## Signature

```ts
const sortStringAscFn: SortFn<string> = (a: string, b: string) => a.localeCompare(b);
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
