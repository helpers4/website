---
title: "isJSONObject"
sidebar:
  label: "isJSONObject"
---

Checks whether a value is a plain object whose every own value is a valid JSON value
(see isJSONValue).

> Available since v3.0.3

## Import

```ts
import { isJSONObject } from '@helpers4/guard';
```

## Signature


```ts
isJSONObject(value: unknown): value is Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Record<string, unknown>` — `true` if value is a plain object of JSON values

## Examples

### Validate a JSON object

Checks that a value is a plain object whose every value is JSON-representable.

```ts
isJSONObject({ a: 1, b: 'two' })
// => true
isJSONObject({ a: undefined })
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJSONObject.ts)
