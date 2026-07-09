---
title: "isFunction"
sidebar:
  label: "isFunction"
---

Checks if a value is a function.

> Available since v1.9.0

## Import

```ts
import { isFunction } from '@helpers4/guard';
```

## Signature


```ts
isFunction(value: unknown): value is Function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Function` — True if value is a function

## Examples

### isFunction



```ts
isFunction(() => {})       // => true
isFunction(function() {})  // => true
isFunction('function')     // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isFunction.ts)
