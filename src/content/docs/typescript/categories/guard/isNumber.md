---
title: "isNumber"
sidebar:
  label: "isNumber"
---

Checks if a value is a number.

Returns `false` for `NaN`, which intentionally deviates from `typeof` behavior
to increase user-friendliness.

> Available since v1.9.0

## Import

```ts
import { isNumber } from '@helpers4/guard';
```

## Signature


```ts
isNumber(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — True if value is a number (excludes NaN)

## Examples

### isNumber



```ts
isNumber(42)    // => true
isNumber(0)     // => true
isNumber(NaN)   // => false
isNumber('123') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isNumber.ts)
