---
sidebar_label: "sortStringAscInsensitiveFn"
---

# sortStringAscInsensitiveFn

Sort strings in ascending order (case insensitive)

## Import

```ts
import { sortStringAscInsensitiveFn } from '@helpers4/array';
```

## Signature

```ts
const sortStringAscInsensitiveFn: SortFn<string> = (a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase());
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
