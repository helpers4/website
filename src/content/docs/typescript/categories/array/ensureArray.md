---
title: "ensureArray"
sidebar:
  label: "ensureArray"
---

Wraps a value in an array if it is not already one.
If the value is already an array, it is returned as-is.
If the value is null or undefined, returns an empty array.
When a depth is specified, the resulting array is flattened
to that depth (like `Array.prototype.flat(depth)`).

> Available since v2.0.0

## Import

```ts
import { ensureArray } from '@helpers4/array';
```

## Signature


```ts
ensureArray<T>(value: T | readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T \| readonly T[] \| null \| undefined` | The value to ensure is an array |

## Returns

`T[]` — The value wrapped in an array, or the value itself if already an array

## Examples

### Wrap a single value

Wraps a non-array value in an array.

```ts
ensureArray('hello')
// => ['hello']
```

### Pass through an existing array

Returns the array as-is if already an array.

```ts
ensureArray([1, 2, 3])
// => [1, 2, 3]
```

### Handle null and undefined

Returns an empty array for null or undefined values.

```ts
ensureArray(null)
// => []
```

### Flatten nested arrays with depth

Flattens the resulting array to a given depth, like Array.prototype.flat().

```ts
ensureArray([[1, [2, 3]], [4]], 1)
// => [1, [2, 3], 4]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/ensureArray.ts)
