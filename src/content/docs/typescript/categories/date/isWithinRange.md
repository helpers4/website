---
title: "isWithinRange"
sidebar:
  label: "isWithinRange"
---

# isWithinRange

Checks whether a date falls within a range (inclusive on both ends).

Returns `false` if any of the inputs is invalid.

> Available since v2.0.0

## Import

```ts
import { isWithinRange } from '@helpers4/date';
```

## Signature


```ts
isWithinRange(date: DateLike, start: DateLike, end: DateLike): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to check |
| `start` | `DateLike` | Start of the range (inclusive) |
| `end` | `DateLike` | End of the range (inclusive) |

## Returns

`boolean` — `true` if `start <= date <= end`

## Examples

### isWithinRange



```ts
isWithinRange('2025-06-15', '2025-01-01', '2025-12-31') // => true
isWithinRange('2024-06-15', '2025-01-01', '2025-12-31') // => false
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/range.ts)
