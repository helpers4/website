---
title: "addDays"
sidebar:
  label: "addDays"
---

# addDays

Adds days to a date.

Returns a **new** `Date` — the original is never mutated.
Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { addDays } from '@helpers4/date';
```

## Signature


```ts
addDays(date: DateLike, amount: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `amount` | `number` | Number of days to add (negative to subtract) |

## Returns

`Date | null` — A new Date, or `null` if the input is invalid

## Examples

### addDays



```ts
addDays('2025-01-19', 10)   // => Date(2025-01-29)
addDays('2025-01-19', -5)   // => Date(2025-01-14)
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/add.ts)
