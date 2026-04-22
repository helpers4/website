---
sidebar_label: "addMonths"
---

# addMonths

Adds months to a date.

Returns a **new** `Date` — the original is never mutated.
When the resulting month has fewer days, JavaScript clamps to the
next month (e.g. Jan 31 + 1 month → Mar 3). Use with caution.
Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { addMonths } from '@helpers4/date';
```

## Signature

```ts
addMonths(date: DateLike, amount: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `amount` | `number` | Number of months to add (negative to subtract) |

## Returns

`Date | null` — A new Date, or `null` if the input is invalid

## Examples

### addMonths



```ts
addMonths('2025-01-15', 1)    // => Date(2025-02-15)
addMonths('2025-01-31', 1)    // => Date(2025-03-03) — overflow
addMonths('2025-03-15', -1)   // => Date(2025-02-15)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/add.ts)
