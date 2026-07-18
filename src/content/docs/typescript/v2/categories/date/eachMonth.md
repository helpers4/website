---
title: "eachMonth"
sidebar:
  label: "eachMonth"
---

Returns an array of `Date` objects for the first day of each month
from `start` to `end` (inclusive).

Each returned Date is normalized to the 1st of the month at 00:00:00.000.
If `start > end`, an empty array is returned.
Returns an empty array if either input is invalid.

> Available since v2.0.0

## Import

```ts
import { eachMonth } from '@helpers4/date';
```

## Signature


```ts
eachMonth(start: DateLike, end: DateLike): Date[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `start` | `DateLike` | Start date (inclusive — the month containing this date is included) |
| `end` | `DateLike` | End date (inclusive — the month containing this date is included) |

## Returns

`Date[]` — An array of Date objects, one per month (each on the 1st)

## Examples

### eachMonth



```ts
eachMonth('2025-01-15', '2025-04-10')
// => [Date(2025-01-01), Date(2025-02-01), Date(2025-03-01), Date(2025-04-01)]
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/date/sequence.ts)
