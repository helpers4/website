---
title: "isString"
sidebar:
  label: "isString"
---

Checks if a value is a string.

> Available since v1.9.0

## Import

```ts
import { isString } from '@helpers4/guard';
```

## Signature


```ts
isString(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — True if value is a string

## Examples

### isString



```ts
isString('hello') // => true
isString(123)     // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isString.ts)
