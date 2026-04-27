---
sidebar_label: "difference"
---

# difference

Calculates the difference between two dates in the specified unit.

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { difference } from '@helpers4/date';
```

## Signature


```ts
difference(dateA: DateLike, dateB: DateLike, options: DateDifferenceOptions): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateA` | `DateLike` | First date |
| `dateB` | `DateLike` | Second date |
| `options` | `DateDifferenceOptions` | Difference options |

## Returns

`number` — The difference between the two dates, or `NaN` if either date is invalid

## Examples

### difference



```ts
difference('2025-01-01', '2025-01-10')
// => 9
difference('2025-01-01T00:00:00Z', '2025-01-01T02:30:00Z', { unit: 'hours' })
// => 2.5
difference('2025-01-10', '2025-01-01', { absolute: false })
// => -9
```

## Related Types

### `DateDifferenceOptions`

Options for date difference calculation

```ts
interface DateDifferenceOptions {
  absolute?: boolean;
  unit?: DifferenceUnit;
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

### `DifferenceUnit`

Unit for date difference calculation

```ts
type DifferenceUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days"
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/difference.ts)
