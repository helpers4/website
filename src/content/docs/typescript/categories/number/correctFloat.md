---
title: "correctFloat"
sidebar:
  label: "correctFloat"
---

Corrects floating-point arithmetic errors by rounding to a given number
of significant digits. Useful after calculations that accumulate binary
floating-point drift (e.g. `0.1 + 0.2 === 0.30000000000000004`).

The default precision of 14 significant digits eliminates typical
rounding noise for values in the range used by most applications.
Note: for values whose integer part already consumes 14 or more digits
(i.e. |value| ≥ 1e13), toPrecision(14) has no room left for decimal
digits and will silently truncate them. Increase `precision` if you
need to correct drift in very large numbers.

Note: IEEE-754 doubles carry at most ~17 significant decimal digits.
Precision values above 17 pad with digits that reflect the underlying
binary representation rather than correcting drift.

> Available since v2.0.2

## Import

```ts
import { correctFloat } from '@helpers4/number';
```

## Signature


```ts
correctFloat(value: number, precision: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The floating-point value to correct |
| `precision` | `number` | Integer number of significant digits between 1 and 100   (default: 14). Values above 17 are valid but expose binary noise beyond   IEEE-754's meaningful range. |

## Returns

`number` — The corrected value

## Examples

### Fix floating-point drift

Corrects the classic 0.1 + 0.2 floating-point arithmetic error.

```ts
0.1 + 0.2              // => 0.30000000000000004
correctFloat(0.1 + 0.2)  // => 0.3
```

### Custom significant-digit precision

Pass a second argument to control how many significant digits to keep.

```ts
correctFloat(1.23456789, 4)  // => 1.235
correctFloat(1.23456789, 6)  // => 1.23457
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/correctFloat.ts)
