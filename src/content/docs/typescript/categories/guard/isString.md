---
title: "isString"
sidebar:
  label: "isString"
description: "Checks if a value is a string."
version: "3.1.0"
---

Checks if a value is a string.

> Available since v1.9.0

## Import

```ts
import { isString } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isString } from 'helpers4/guard';
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isString.ts)
