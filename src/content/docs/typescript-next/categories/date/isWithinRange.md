---
title: "isWithinRange"
sidebar:
  label: "isWithinRange"
---

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
- `Temporal.Instant` | `Temporal.ZonedDateTime` — read via their
  `epochMilliseconds` property

```ts
type DateLike = Date | number | string | Temporal.Instant | Temporal.ZonedDateTime
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/range.ts)
