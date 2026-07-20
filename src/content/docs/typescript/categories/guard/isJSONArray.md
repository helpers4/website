---
title: "isJSONArray"
sidebar:
  label: "isJSONArray"
---

Checks whether a value is an array whose every element is a valid JSON value
(see isJSONValue).

> Available since v3.0.3

## Import

```ts
import { isJSONArray } from '@helpers4/guard';
```

## Signature


```ts
isJSONArray(value: unknown): value is unknown[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is unknown[]` — `true` if value is an array of JSON values

## Examples

### Validate a JSON array

Checks that a value is an array whose every element is JSON-representable.

```ts
isJSONArray([1, 'two', null])
// => true
isJSONArray([1, undefined])
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJSONArray.ts)
