---
title: "isRegExp"
sidebar:
  label: "isRegExp"
---

Checks if a value is a RegExp instance.

> Available since v2.0.0

## Import

```ts
import { isRegExp } from '@helpers4/guard';
```

## Signature


```ts
isRegExp(value: unknown): value is RegExp
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is RegExp` — True if value is a RegExp

## Examples

### isRegExp



```ts
isRegExp(/abc/)          // => true
isRegExp(new RegExp('a')) // => true
isRegExp('abc')          // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isRegExp.ts)
