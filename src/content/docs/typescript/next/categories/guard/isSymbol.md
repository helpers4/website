---
title: "isSymbol"
sidebar:
  label: "isSymbol"
---

Checks if a value is a symbol.

> Available since v2.0.0

## Import

```ts
import { isSymbol } from '@helpers4/guard';
```

## Signature


```ts
isSymbol(value: unknown): value is symbol
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is symbol` — True if value is a symbol

## Examples

### isSymbol



```ts
isSymbol(Symbol('test')) // => true
isSymbol(Symbol.iterator) // => true
isSymbol('symbol')       // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isSymbol.ts)
