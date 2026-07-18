---
title: "difference"
sidebar:
  label: "difference"
---

Calculates the difference between two dates in the specified unit.

Accepts any DateLike input (Date, timestamp, or date string).

Unlike the removed `daysDifference`, the default `'days'` unit is **not** rounded —
it returns the exact fractional number of days. Wrap the result in `Math.round`
if you need a whole-number day count.

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
difference('2025-01-01T00:00:00Z', '2025-01-01T12:00:00Z')
// => 0.5 (fractional — use Math.round(difference(a, b)) for a whole-day count)
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
- `Temporal.Instant` | `Temporal.ZonedDateTime` — read via their
  `epochMilliseconds` property

```ts
type DateLike = Date | number | string | Temporal.Instant | Temporal.ZonedDateTime
```

### `DifferenceUnit`

Unit for date difference calculation

```ts
type DifferenceUnit = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days'
```

:::caution[Name conflict]
A helper named `difference` also exists in [`@helpers4/array`](../array/difference/). If you need both in the same file, rename at import with `as`:

```ts
import { difference as difference4date } from '@helpers4/date';
import { difference as difference4array } from '@helpers4/array';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/difference.ts)
