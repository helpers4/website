---
sidebar_label: "arrayEquals"
---

# arrayEquals

Simple helper that checks if two lists are identical.
The order of elements in the list is not important.

> Available since v1.0.0

## Import

```ts
import { arrayEquals } from '@helpers4/array';
```

## Signature

```ts
arrayEquals<T>(arr1: T[], arr2: T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arr1` | `T[]` | One list |
| `arr2` | `T[]` | Another list |

## Returns

`boolean` — `true` if the list contain the same items, `false` otherwise.

## Examples

### Compare identical arrays

Returns true when both arrays contain the same elements, regardless of order.

```ts
arrayEquals([1, 2, 3], [3, 2, 1])
// => true
```

### Detect different arrays

Returns false when arrays contain different elements.

```ts
arrayEquals([1, 2], [1, 3])
// => false
```

### Compare arrays of objects

Supports deep comparison of nested objects.

```ts
arrayEquals([{ a: 1 }], [{ a: 1 }])
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/arrayEquals.ts)
