---
title: "isBigInt"
sidebar:
  label: "isBigInt"
description: "Checks if a value is a bigint."
version: "3.1.0"
---

Checks if a value is a bigint.

> Available since v2.0.0

## Import

```ts
import { isBigInt } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isBigInt } from 'helpers4/guard';
```

## Signature


```ts
isBigInt(value: unknown): value is bigint
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is bigint` — True if value is a bigint

## Examples

### isBigInt



```ts
isBigInt(42n)  // => true
isBigInt(42)   // => false
isBigInt('42') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isBigInt.ts)
