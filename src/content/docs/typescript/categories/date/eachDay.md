---
title: "eachDay"
sidebar:
  label: "eachDay"
---

Returns an array of `Date` objects for each day from `start` to `end` (inclusive).

Both boundaries are included. If `start > end`, an empty array is returned.
Returns an empty array if either input is invalid.

> Available since v2.0.0

## Import

```ts
import { eachDay } from '@helpers4/date';
```

## Signature


```ts
eachDay(start: DateLike, end: DateLike): Date[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `start` | `DateLike` | Start date (inclusive) |
| `end` | `DateLike` | End date (inclusive) |

## Returns

`Date[]` — An array of Date objects, one per day

## Examples

### eachDay



```ts
eachDay('2025-01-01', '2025-01-03')
// => [Date(2025-01-01), Date(2025-01-02), Date(2025-01-03)]
```

## Related Types

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/sequence.ts)
