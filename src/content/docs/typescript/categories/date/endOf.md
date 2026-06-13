---
title: "endOf"
sidebar:
  label: "endOf"
---

Returns a new `Date` set to the **end** of the given unit.

- `'day'`   — 23:59:59.999
- `'month'` — last day of the month, 23:59:59.999
- `'year'`  — December 31st, 23:59:59.999

Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { endOf } from '@helpers4/date';
```

## Signature


```ts
endOf(date: DateLike, unit: DateTruncUnit): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `unit` | `DateTruncUnit` | The unit to round to |

## Returns

`Date | null` — A new Date at the end of the unit, or `null`

## Examples

### endOf



```ts
endOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T23:59:59.999Z
endOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-30T23:59:59.999Z
endOf('2025-06-15T14:30:00Z', 'year')   // => 2025-12-31T23:59:59.999Z
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
type DateTruncUnit = 'day' | 'month' | 'year';

/**
 * Returns a new `Date` set to the **start** of the given unit.
 *
 * - `'day'`   — 00:00:00.000
 * - `'month'` — 1st of the month, 00:00:00.000
 * - `'year'`  — January 1st, 00:00:00.000
 *
 * Returns `null` if the input is invalid.
 *
 * @param date - The base date
 * @param unit - The unit to truncate to
 * @returns A new Date at the start of the unit, or `null`
 * @example
 * startOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T00:00:00.000Z
 * startOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-01T00:00:00.000Z
 * startOf('2025-06-15T14:30:00Z', 'year')   // => 2025-01-01T00:00:00.000Z
 *
 * @see Temporal alternative: `plainDateTime.with({ day: 1, hour: 0, ... })`
 * @since 2.0.0
 */
export function startOf(date: DateLike, unit: DateTruncUnit): Date | null {
  const d = ensureDate(date);
  if (!d) return null;
  const result = new Date(d);

  switch (unit) {
    case 'day': {
      result.setHours(0, 0, 0, 0);
      return result;
    }
    case 'month': {
      result.setDate(1);
      result.setHours(0, 0, 0, 0);
      return result;
    }
    case 'year': {
      result.setMonth(0, 1);
      result.setHours(0, 0, 0, 0);
      return result;
    }
  }
}

/**
 * Returns a new `Date` set to the **end** of the given unit.
 *
 * - `'day'`   — 23:59:59.999
 * - `'month'` — last day of the month, 23:59:59.999
 * - `'year'`  — December 31st, 23:59:59.999
 *
 * Returns `null` if the input is invalid.
 *
 * @param date - The base date
 * @param unit - The unit to round to
 * @returns A new Date at the end of the unit, or `null`
 * @example
 * endOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T23:59:59.999Z
 * endOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-30T23:59:59.999Z
 * endOf('2025-06-15T14:30:00Z', 'year')   // => 2025-12-31T23:59:59.999Z
 *
 * @see Temporal alternative: `plainDateTime.with({ day: d.daysInMonth, hour: 23, ... })`
 * @since 2.0.0
 */
export function endOf(date: DateLike, unit: DateTruncUnit): Date | null {
  const d = ensureDate(date);
  if (!d) return null;
  const result = new Date(d);

  switch (unit) {
    case 'day': {
      result.setHours(23, 59, 59, 999);
      return result;
    }
    case 'month': {
      result.setMonth(result.getMonth() + 1, 0);
      result.setHours(23, 59, 59, 999);
      return result;
    }
    case 'year': {
      result.setMonth(11, 31);
      result.setHours(23, 59, 59, 999);
      return result;
    }
  }
}
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
