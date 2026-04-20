---
sidebar_label: "isPositiveNumber"
---

# isPositiveNumber

Checks if a value is a number greater than 0.

Returns `false` for `NaN`, `0`, negative numbers, and non-number types.

> Available since v2.0.0

## Import

```ts
import { isPositiveNumber } from '@helpers4/type';
```

## Signature

```ts
isPositiveNumber(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a positive number

## Examples

### isPositiveNumber



```ts
```ts
isPositiveNumber(42)   // => true
isPositiveNumber(0.1)  // => true
isPositiveNumber(0)    // => false
isPositiveNumber(-1)   // => false
isPositiveNumber(NaN)  // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPositiveNumber.ts)
