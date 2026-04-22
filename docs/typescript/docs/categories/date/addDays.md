---
sidebar_label: "addDays"
---

# addDays

Adds days to a date.

Returns a **new** `Date` — the original is never mutated.
Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { addDays } from '@helpers4/date';
```

## Signature

```ts
addDays(date: DateLike, amount: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `amount` | `number` | Number of days to add (negative to subtract) |

## Returns

`Date | null` — A new Date, or `null` if the input is invalid

## Examples

### addDays



```ts
addDays('2025-01-19', 10)   // => Date(2025-01-29)
addDays('2025-01-19', -5)   // => Date(2025-01-14)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/add.ts)
