---
title: "toRFC2822"
sidebar:
  label: "toRFC2822"
---

Converts a date to RFC 2822 format
Format: Day, DD Mon YYYY HH:mm:ss +0000
Used in email headers (Date field) and HTTP headers

> Available since v2.0.0

## Import

```ts
import { toRFC2822 } from '@helpers4/date';
```

## Signature


```ts
toRFC2822(date: DateLike): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | Date to convert (Date object, timestamp, or date string) |

## Returns

`string | null` — RFC 2822 formatted string or null if invalid date

## Examples

### toRFC2822



```ts
toRFC2822(new Date('2025-01-19T12:30:00Z')) // 'Sun, 19 Jan 2025 12:30:00 +0000'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
