---
title: "isoWeek"
sidebar:
  label: "isoWeek"
description: "ISO 8601 week of a date: weeks start on Monday and week 1 is the one that contains the first Thursday of the year, so t…"
version: "3.1.5"
---

ISO 8601 week of a date: weeks start on Monday and week 1 is the one that contains the
first Thursday of the year, so the first days of January can belong to week 52 or 53 of
the previous year (and the last days of December to week 1 of the next).

The calendar day is read in UTC, so the result does not depend on the machine timezone.
Returns `null` if the input is invalid.

> Available since v3.1.4

## Import

```ts
import { isoWeek } from '@helpers4/date';
// or, from the all-in-one package (same code, one install):
import { isoWeek } from 'helpers4/date';
```

## Signature


```ts
isoWeek(date: DateLike): object | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to locate |

## Returns

`object | null` — The ISO week-numbering year and the week number (1–53), or `null`

## Examples

### Week number of a date

Weeks start on Monday and week 1 contains the first Thursday of the year.

```ts
isoWeek('2026-06-15')
// => { year: 2026, week: 25 }
```

### Year boundary

The first days of January can belong to the last week of the previous year.

```ts
isoWeek('2027-01-01')
// => { year: 2026, week: 53 }
```

### Invalid date

Returns null instead of throwing.

```ts
isoWeek('not a date')
// => null
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/isoWeek.ts)
