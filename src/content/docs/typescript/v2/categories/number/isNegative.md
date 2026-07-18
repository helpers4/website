---
title: "isNegative"
sidebar:
  label: "isNegative"
---

Checks if a value is a number less than 0.

Returns `false` for `NaN`, `0`, positive numbers, and non-number types.

> Available since v2.0.0

## Import

```ts
import { isNegative } from '@helpers4/number';
```

## Signature


```ts
isNegative(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — True if value is a negative number

## Examples

### isNegative



```ts
isNegative(-1)        // => true
isNegative(-0.5)      // => true
isNegative(-Infinity) // => true
isNegative(0)         // => false
isNegative(1)         // => false
isNegative(NaN)       // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/number/isNegative.ts)
