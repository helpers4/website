---
title: "isWeekend"
sidebar:
  label: "isWeekend"
---

Checks whether a date falls on a weekend day.

By default, weekend days are **Saturday** and **Sunday** (Western
convention). Pass a custom `weekendDays` tuple to adapt to other
calendars (e.g. `[5, 6]` for Friday/Saturday in many Middle-Eastern
countries).

Returns `false` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { isWeekend } from '@helpers4/date';
```

## Signature


```ts
isWeekend(date: DateLike, weekendDays: readonly WeekDay[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to check |
| `weekendDays` | `readonly WeekDay[]` | Override which days count as weekend (default: `[0, 6]`) |

## Returns

`boolean` — `true` if the date's day-of-week is in `weekendDays`

## Examples

### isWeekend



```ts
isWeekend('2025-01-18') // => true  (Saturday)
isWeekend('2025-01-19') // => true  (Sunday)
isWeekend('2025-01-20') // => false (Monday)

// Middle-Eastern weekend (Friday + Saturday)
isWeekend('2025-01-17', [WeekDays.Friday, WeekDays.Saturday]) // => true
isWeekend('2025-01-19', [WeekDays.Friday, WeekDays.Saturday]) // => false
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

### `WeekDay`

A day-of-week number following the JavaScript `Date.getDay()` convention:
0 = Sunday, 1 = Monday, … 6 = Saturday.

Prefer using WeekDays named constants for readability:
`WeekDays.Monday` instead of `1`.

```ts
type WeekDay = (typeof WeekDays)[keyof typeof WeekDays]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/weekday.ts)
