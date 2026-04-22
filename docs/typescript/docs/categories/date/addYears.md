---
sidebar_label: "addYears"
---

# addYears

Adds years to a date.

Returns a **new** `Date` — the original is never mutated.
Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { addYears } from '@helpers4/date';
```

## Signature

```ts
addYears(date: DateLike, amount: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `amount` | `number` | Number of years to add (negative to subtract) |

## Returns

`Date | null` — A new Date, or `null` if the input is invalid

## Examples

### addYears



```ts
addYears('2025-01-19', 1)    // => Date(2026-01-19)
addYears('2024-02-29', 1)    // => Date(2025-03-01) — leap year overflow
addYears('2025-06-15', -2)   // => Date(2023-06-15)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/add.ts)
