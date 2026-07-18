---
title: "isSameYear"
sidebar:
  label: "isSameYear"
---

Checks if two dates are in the same year.

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { isSameYear } from '@helpers4/date';
```

## Signature


```ts
isSameYear(date1: DateLike, date2: DateLike): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date1` | `DateLike` | First date |
| `date2` | `DateLike` | Second date |

## Returns

`boolean` — True if same year, false otherwise (including when either date is invalid)

## Examples

### isSameYear



```ts
isSameYear('2025-01-01', '2025-12-31') // => true
isSameYear('2024-12-31', '2025-01-01') // => false
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/is.ts)
