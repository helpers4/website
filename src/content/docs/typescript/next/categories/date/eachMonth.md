---
title: "eachMonth"
sidebar:
  label: "eachMonth"
---

Returns an array of `Date` objects for the first day of each month
from `start` to `end` (inclusive).

Each returned Date is normalized to the 1st of the month at 00:00:00.000.
If `start > end`, an empty array is returned.
Returns an empty array if either input is invalid.

> Available since v2.0.0

## Import

```ts
import { eachMonth } from '@helpers4/date';
```

## Signature


```ts
eachMonth(start: DateLike, end: DateLike): Date[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `start` | `DateLike` | Start date (inclusive — the month containing this date is included) |
| `end` | `DateLike` | End date (inclusive — the month containing this date is included) |

## Returns

`Date[]` — An array of Date objects, one per month (each on the 1st)

## Examples

### eachMonth



```ts
eachMonth('2025-01-15', '2025-04-10')
// => [Date(2025-01-01), Date(2025-02-01), Date(2025-03-01), Date(2025-04-01)]
```

## Related Types

### `DateLike`

A value that can be converted to a Date.

- `Date` — used as-is (validated for Invalid Date)
- `number` — treated as a timestamp (seconds or milliseconds, auto-detected);
  `0` is treated as invalid and produces `null` in ensureDate
- `string` — parsed via `new Date(string)`
- `Temporal.Instant` | `Temporal.ZonedDateTime` — read via their
  `epochMilliseconds` property

```ts
type DateLike = Date | number | string | Temporal.Instant | Temporal.ZonedDateTime
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/sequence.ts)
