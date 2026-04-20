---
sidebar_label: "isNumber"
---

# isNumber

Checks if a value is a number.

Returns `false` for `NaN`, which intentionally deviates from `typeof` behavior
to increase user-friendliness.

> Available since v1.9.0

## Import

```ts
import { isNumber } from '@helpers4/type';
```

## Signature

```ts
isNumber(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a number (excludes NaN)

## Examples

### isNumber



```ts
```ts
isNumber(42)    // => true
isNumber(0)     // => true
isNumber(NaN)   // => false
isNumber('123') // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isNumber.ts)
