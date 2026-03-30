---
sidebar_label: "deepCompare"
---

# deepCompare

Deep comparison of two arrays that only returns true or false.
Arrays are considered equal if they have the same length and all elements 
at corresponding positions are strictly equal. Only compares arrays,
does not go into deep object comparison.

## Import

```ts
import { deepCompare } from '@helpers4/array';
```

## Signature

```ts
function deepCompare<T>(arrA: T[], arrB: T[]): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `arrA` | First array to compare |
| `arrB` | Second array to compare |

## Returns

`true` if arrays are deeply equal, `false` otherwise

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/deepCompare.ts)
