---
title: "isMap"
sidebar:
  label: "isMap"
description: "Checks if a value is a Map instance."
version: "3.1.0"
---

Checks if a value is a Map instance.

> Available since v2.0.0

## Import

```ts
import { isMap } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isMap } from 'helpers4/guard';
```

## Signature


```ts
isMap(value: unknown): value is Map<unknown, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Map<unknown, unknown>` — True if value is a Map

## Examples

### isMap



```ts
isMap(new Map())           // => true
isMap(new Map([['a', 1]])) // => true
isMap({})                  // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isMap.ts)
