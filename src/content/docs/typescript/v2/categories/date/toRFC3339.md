---
title: "toRFC3339"
sidebar:
  label: "toRFC3339"
---

Converts a date to RFC 3339 format
Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm
RFC 3339 is a profile of ISO 8601, but without milliseconds by default

> Available since v2.0.0

## Import

```ts
import { toRFC3339 } from '@helpers4/date';
```

## Signature


```ts
toRFC3339(date: DateLike, includeMilliseconds: boolean): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | Date to convert (Date object, timestamp, or date string) |
| `includeMilliseconds` | `boolean` | Whether to include milliseconds (default: false) |

## Returns

`string | null` — RFC 3339 formatted string or null if invalid date

## Examples

### toRFC3339



```ts
toRFC3339(new Date('2025-01-19T12:30:45.123Z')) // '2025-01-19T12:30:45Z'
toRFC3339(new Date('2025-01-19T12:30:45.123Z'), true) // '2025-01-19T12:30:45.123Z'
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
