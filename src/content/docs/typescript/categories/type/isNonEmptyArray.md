---
title: "isNonEmptyArray"
sidebar:
  label: "isNonEmptyArray"
---

Checks if a value is a non-empty array (length > 0).

> Available since v2.0.0

## Import

```ts
import { isNonEmptyArray } from '@helpers4/type';
```

## Signature


```ts
isNonEmptyArray(value: unknown): value is [unknown, rest]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is [unknown, rest]` — True if value is an array with at least one element

## Examples

### isNonEmptyArray



```ts
isNonEmptyArray([1, 2]) // => true
isNonEmptyArray([])     // => false
isNonEmptyArray('abc')  // => false
isNonEmptyArray(null)   // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isNonEmptyArray.ts)
