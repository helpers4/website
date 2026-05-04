---
title: "overlaps"
sidebar:
  label: "overlaps"
---

# overlaps

Checks whether two date ranges overlap.

Two ranges overlap when `rangeA.start <= rangeB.end` AND
`rangeB.start <= rangeA.end` (inclusive on both ends).
Returns `false` if any date is invalid.

> Available since v2.0.0

## Import

```ts
import { overlaps } from '@helpers4/date';
```

## Signature


```ts
overlaps(rangeA: DateRange, rangeB: DateRange): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `rangeA` | `DateRange` | First date range |
| `rangeB` | `DateRange` | Second date range |

## Returns

`boolean` — `true` if the ranges share at least one point in time

## Examples

### overlaps



```ts
overlaps(
  { start: '2025-01-01', end: '2025-06-30' },
  { start: '2025-03-01', end: '2025-12-31' }
) // => true

overlaps(
  { start: '2025-01-01', end: '2025-02-28' },
  { start: '2025-03-01', end: '2025-12-31' }
) // => false
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/range.ts)
