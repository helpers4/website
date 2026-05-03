---
sidebar_label: "compare"
---

# compare

Comparison of two dates.

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { compare } from '@helpers4/date';
```

## Signature


```ts
compare(dateA: DateLike, dateB: DateLike, options: DateCompareOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateA` | `DateLike` | First date to compare |
| `dateB` | `DateLike` | Second date to compare |
| `options` | `DateCompareOptions` | Comparison options |

## Returns

`boolean` — `true` if dates are identical according to the specified precision, `false` otherwise

## Examples

### Compare dates with millisecond precision

By default, two identical Date objects are equal.

```ts
const d = new Date('2025-01-19T12:00:00Z');
compare(d, new Date('2025-01-19T12:00:00Z'))
// => true
```

### Compare only by day

Using day precision ignores the time part.

```ts
compare(
  new Date('2025-01-19T08:00:00Z'),
  new Date('2025-01-19T23:59:59Z'),
  { precision: 'days' }
)
// => true
```

## Related Types

### `DateCompareOptions`

Options for date comparison

```ts
interface DateCompareOptions {
  precision?: "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";
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

:::caution[Name conflict]
A helper named `compare` also exists in [`@helpers4/version`](../version/compare). If you need both in the same file, rename at import with `as`:

```ts
import { compare as compare4date } from '@helpers4/date';
import { compare as compare4version } from '@helpers4/version';
```

See [Name Conflicts](../../reference/naming-conflicts) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/compare.ts)
