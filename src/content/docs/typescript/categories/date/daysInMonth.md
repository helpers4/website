---
title: "daysInMonth"
sidebar:
  label: "daysInMonth"
---

Returns the number of days in the given month of the given year.

Month is **1-based** (1 = January, 12 = December) to match human
convention and ISO 8601 (unlike `Date.getMonth()` which is 0-based).

Returns `NaN` if the month is out of range.

> Available since v2.0.0

## Import

```ts
import { daysInMonth } from '@helpers4/date';
```

## Signature


```ts
daysInMonth(year: number, month: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `year` | `number` | A full year number \(e\.g\. 2025\) |
| `month` | `number` | 1\-based month number \(1–12\) |

## Returns

`number` — Number of days in that month, or `NaN` for invalid month

## Examples

### daysInMonth



```ts
daysInMonth(2025, 1)  // => 31 (January)
daysInMonth(2025, 2)  // => 28 (February, non-leap)
daysInMonth(2024, 2)  // => 29 (February, leap)
daysInMonth(2025, 4)  // => 30 (April)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/calendar.ts)
