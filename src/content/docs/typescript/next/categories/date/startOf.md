---
title: "startOf"
sidebar:
  label: "startOf"
---

Returns a new `Date` set to the **start** of the given unit.

- `'day'`   — 00:00:00.000
- `'month'` — 1st of the month, 00:00:00.000
- `'year'`  — January 1st, 00:00:00.000

Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { startOf } from '@helpers4/date';
```

## Signature


```ts
startOf(date: DateLike, unit: DateTruncUnit): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `unit` | `DateTruncUnit` | The unit to truncate to |

## Returns

`Date | null` — A new Date at the start of the unit, or `null`

## Examples

### startOf



```ts
startOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T00:00:00.000Z
startOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-01T00:00:00.000Z
startOf('2025-06-15T14:30:00Z', 'year')   // => 2025-01-01T00:00:00.000Z
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

### `DateTruncUnit`

Units supported by startOf and endOf.

```ts
type DateTruncUnit = 'day' | 'month' | 'year'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/startOf.ts)
