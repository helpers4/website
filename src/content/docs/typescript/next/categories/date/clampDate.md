---
title: "clampDate"
sidebar:
  label: "clampDate"
---

Clamps a date to a [min, max] range.

Returns a **new** `Date` — the original is never mutated.
Returns `null` if any of the inputs is invalid.

> Available since v2.0.0

## Import

```ts
import { clampDate } from '@helpers4/date';
```

## Signature


```ts
clampDate(date: DateLike, min: DateLike, max: DateLike): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to clamp |
| `min` | `DateLike` | The minimum allowed date |
| `max` | `DateLike` | The maximum allowed date |

## Returns

`Date | null` — A new Date clamped to the range, or `null` if any input is invalid

## Examples

### clampDate



```ts
clampDate('2025-06-15', '2025-01-01', '2025-03-31')
// => Date(2025-03-31) — clamped to max

clampDate('2025-02-15', '2025-01-01', '2025-03-31')
// => Date(2025-02-15) — within range, unchanged
```

## Related Types

### `DateRange`

A date range represented as a pair of date-like values.

```ts
interface DateRange {
  end: DateLike;
  start: DateLike;
}
```

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/range.ts)
