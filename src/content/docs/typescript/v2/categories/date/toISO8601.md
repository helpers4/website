---
title: "toISO8601"
sidebar:
  label: "toISO8601"
---

Converts a date to ISO 8601 format
Format: YYYY-MM-DDTHH:mm:ss.sssZ

> Available since v2.0.0

## Import

```ts
import { toISO8601 } from '@helpers4/date';
```

## Signature


```ts
toISO8601(date: DateLike): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | Date to convert (Date object, timestamp, or date string) |

## Returns

`string | null` — ISO 8601 formatted string or null if invalid date

## Examples

### Convert to ISO 8601

Formats a date as an ISO 8601 string.

```ts
toISO8601(new Date('2025-01-19T12:30:00Z'))
// => '2025-01-19T12:30:00.000Z'
```

### Convert to RFC 3339 (no ms)

RFC 3339 format strips milliseconds by default.

```ts
toRFC3339(new Date('2025-01-19T12:30:45.123Z'))
// => '2025-01-19T12:30:45Z'
```

### Convert to RFC 2822

RFC 2822 is used in email and HTTP headers.

```ts
toRFC2822(new Date('2025-01-19T12:30:00Z'))
// => 'Sun, 19 Jan 2025 12:30:00 +0000'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/date/format.ts)
