---
sidebar_label: "isNegativeNumber"
---

# isNegativeNumber

Checks if a value is a number less than 0.

Returns `false` for `NaN`, `0`, positive numbers, and non-number types.

> Available since v2.0.0

## Import

```ts
import { isNegativeNumber } from '@helpers4/type';
```

## Signature

```ts
isNegativeNumber(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — True if value is a negative number

## Examples

### isNegativeNumber



```ts
isNegativeNumber(-1)   // => true
isNegativeNumber(-0.5) // => true
isNegativeNumber(0)    // => false
isNegativeNumber(1)    // => false
isNegativeNumber(NaN)  // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isNegativeNumber.ts)
