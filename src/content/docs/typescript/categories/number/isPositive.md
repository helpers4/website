---
title: "isPositive"
sidebar:
  label: "isPositive"
---

Checks if a value is a number greater than 0.

Returns `false` for `NaN`, `0`, negative numbers, and non-number types.

> Available since v2.0.0

## Import

```ts
import { isPositive } from '@helpers4/number';
```

## Signature


```ts
isPositive(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — True if value is a positive number

## Examples

### isPositive



```ts
isPositive(42)       // => true
isPositive(0.1)      // => true
isPositive(Infinity) // => true
isPositive(0)        // => false
isPositive(-1)       // => false
isPositive(NaN)      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/isPositive.ts)
