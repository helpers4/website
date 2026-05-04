---
title: "unique"
sidebar:
  label: "unique"
---

# unique

Removes duplicate values from an array

> Available since v1.9.0

## Import

```ts
import { unique } from '@helpers4/array';
```

## Signature


```ts
unique<T>(array: T[]): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `T[]` | The array to remove duplicates from |

## Returns

`T[]` — New array with unique values only

## Examples

### Remove duplicates

Returns a new array with duplicate values removed.

```ts
unique([1, 2, 2, 3, 3, 3])
// => [1, 2, 3]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/unique.ts)
