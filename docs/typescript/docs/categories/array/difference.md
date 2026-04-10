---
sidebar_label: "difference"
---

# difference

Returns the difference between two arrays (items in first array but not in second)

> Available since v1.9.0

## Import

```ts
import { difference } from '@helpers4/array';
```

## Signature

```ts
difference<T>(array1: T[], array2: T[]): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array1` | `T[]` | First array |
| `array2` | `T[]` | Second array |

## Returns

`T[]` — Array with items from first array not present in second array

## Examples

### Get items only in the first array

Returns elements present in the first array but not in the second.

```ts
difference([1, 2, 3, 4], [2, 4])
// => [1, 3]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/difference.ts)
