---
title: "unique"
sidebar:
  label: "unique"
description: "Removes duplicate values from an array."
version: "3.1.1"
---

Removes duplicate values from an array.
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v1.9.0

## Import

```ts
import { unique } from '@helpers4/array';
// or, from the all-in-one package (same code, one install):
import { unique } from 'helpers4/array';
```

## Signature


```ts
unique<T>(array: readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to remove duplicates from |

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
