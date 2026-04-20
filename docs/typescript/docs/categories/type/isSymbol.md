---
sidebar_label: "isSymbol"
---

# isSymbol

Checks if a value is a symbol.

> Available since v2.0.0

## Import

```ts
import { isSymbol } from '@helpers4/type';
```

## Signature

```ts
isSymbol(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a symbol

## Examples

### isSymbol



```ts
```ts
isSymbol(Symbol('test')) // => true
isSymbol(Symbol.iterator) // => true
isSymbol('symbol')       // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isSymbol.ts)
