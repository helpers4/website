---
sidebar_label: "quickCompare"
---

# quickCompare

Quick comparison of two arrays using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

## Import

```ts
import { quickCompare } from '@helpers4/array';
```

## Signature

```ts
function quickCompare<T>(arrA: T[], arrB: T[]): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `arrA` | First array to compare |
| `arrB` | Second array to compare |

## Returns

`true` if arrays are identical according to JSON.stringify, `false` otherwise

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/quickCompare.ts)
