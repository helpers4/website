---
title: "isBusinessDay"
sidebar:
  label: "isBusinessDay"
---

Checks whether a date falls on a business day (i.e. **not** a weekend day).

This is the logical inverse of isWeekend. By default, business days
are Monday through Friday. Pass a custom `weekendDays` to adapt to other
calendars.

> **Note:** This helper does **not** account for public holidays — those are
> country- and region-specific. Use it in combination with your own holiday
> list if needed.

Returns `false` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { isBusinessDay } from '@helpers4/date';
```

## Signature


```ts
isBusinessDay(date: DateLike, weekendDays: readonly WeekDay[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to check |
| `weekendDays` | `readonly WeekDay[]` | Override which days count as weekend (default: `[0, 6]`) |

## Returns

`boolean` — `true` if the date is not a weekend day

## Examples

### isBusinessDay



```ts
isBusinessDay('2025-01-20') // => true  (Monday)
isBusinessDay('2025-01-18') // => false (Saturday)

// UAE weekend (Friday + Saturday)
const uaeWeekend = [WeekDays.Friday, WeekDays.Saturday] as const;
isBusinessDay('2025-01-19', uaeWeekend) // => true  (Sunday = workday)
isBusinessDay('2025-01-17', uaeWeekend) // => false (Friday = weekend)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/weekday.ts)
