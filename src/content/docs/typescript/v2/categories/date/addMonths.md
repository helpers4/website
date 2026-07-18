---
title: "addMonths"
sidebar:
  label: "addMonths"
---

Adds months to a date.

Returns a **new** `Date` — the original is never mutated.
When the resulting month has fewer days, JavaScript clamps to the
next month (e.g. Jan 31 + 1 month → Mar 3). Use with caution.
Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { addMonths } from '@helpers4/date';
```

## Signature


```ts
addMonths(date: DateLike, amount: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `amount` | `number` | Number of months to add (negative to subtract) |

## Returns

`Date | null` — A new Date, or `null` if the input is invalid

## Examples

### addMonths



```ts
addMonths('2025-01-15', 1)    // => Date(2025-02-15)
addMonths('2025-01-31', 1)    // => Date(2025-03-03) — overflow
addMonths('2025-03-15', -1)   // => Date(2025-02-15)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/date/add.ts)
