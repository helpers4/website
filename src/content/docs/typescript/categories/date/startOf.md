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
- `EpochMilliseconds` — any object with a `epochMilliseconds` property
  (e.g. `Temporal.Instant`, `Temporal.ZonedDateTime`)

// TODO: When the Temporal API reaches Stage 4 and is available without
// flags in all major runtimes, consider narrowing the union to the
// concrete Temporal types for stricter type-checking.

```ts
type DateLike = Date | number | string | EpochMilliseconds
```

### `DateTruncUnit`

Units supported by startOf and endOf.

```ts
type DateTruncUnit = "day" | "month" | "year"
```

### `EpochMilliseconds`

An object that exposes an epoch timestamp in milliseconds.

This structural type is satisfied by `Temporal.Instant` and
`Temporal.ZonedDateTime` (and any future object that carries the same
property), so callers can pass Temporal values without importing them.

```ts
interface EpochMilliseconds {
  epochMilliseconds: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/startOf.ts)
