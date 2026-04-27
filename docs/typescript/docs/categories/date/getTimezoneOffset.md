---
sidebar_label: "getTimezoneOffset"
---

# getTimezoneOffset

Returns the UTC offset **in minutes** for the given IANA timezone
at a specific point in time.

A positive value means the timezone is **ahead** of UTC (e.g. `+60` for CET).
Returns `null` if the timezone is invalid or the date cannot be parsed.

The implementation uses `Intl.DateTimeFormat` to extract the local
representation in the target timezone, then computes the delta from UTC.

> Available since v2.0.0

## Import

```ts
import { getTimezoneOffset } from '@helpers4/date';
```

## Signature


```ts
getTimezoneOffset(tz: string, date: DateLike): number | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tz` | `string` | IANA timezone identifier (e.g. `'America/New_York'`) |
| `date` | `DateLike` | Reference date (defaults to now) |

## Returns

`number | null` — Offset in minutes, or `null` if inputs are invalid

## Examples

### getTimezoneOffset



```ts
getTimezoneOffset('America/New_York', '2025-01-19T12:00:00Z') // => -300 (EST)
getTimezoneOffset('Europe/Paris', '2025-07-19T12:00:00Z')     // => 120  (CEST)
```

## Related Types

### `FormatInTimezoneOptions`

Options for formatInTimezone.

```ts
interface FormatInTimezoneOptions {
  formatOptions?: DateTimeFormatOptions;
  locale?: string;
}
```

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timezone.ts)
