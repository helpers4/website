---
sidebar_label: "quickCompare"
---

# quickCompare

Quick comparison of two arrays using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

> Available since v2.0.0

## Import

```ts
import { quickCompare } from '@helpers4/array';
```

## Signature

```ts
quickCompare<T>(arrA: T[], arrB: T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrA` | `T[]` | First array to compare |
| `arrB` | `T[]` | Second array to compare |

## Returns

`boolean` — `true` if arrays are identical according to JSON.stringify, `false` otherwise

## Examples

### Compare identical arrays

Uses JSON.stringify for a fast shallow comparison.

```ts
quickCompare([1, 2, 3], [1, 2, 3])
// => true
```

### Detect order differences

Unlike arrayEquals, quickCompare is order-sensitive.

```ts
quickCompare([1, 2], [2, 1])
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/quickCompare.ts)
