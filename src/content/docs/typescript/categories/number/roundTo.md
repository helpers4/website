---
title: "roundTo"
sidebar:
  label: "roundTo"
---

# roundTo

Rounds a number to specified decimal places

> Available since v1.9.0

## Import

```ts
import { roundTo } from '@helpers4/number';
```

## Signature


```ts
roundTo(value: number, decimals: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The number to round |
| `decimals` | `number` | Number of decimal places |

## Returns

`number` — Rounded number

## Examples

### Round to 2 decimal places

Rounds a floating-point number to the specified number of decimals.

```ts
roundTo(3.14159, 2)
// => 3.14
```

### Round to 0 decimal places

Effectively rounds to the nearest integer.

```ts
roundTo(3.7, 0)
// => 4
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/roundTo.ts)
