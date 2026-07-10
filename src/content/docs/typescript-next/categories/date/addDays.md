---
title: "addDays"
sidebar:
  label: "addDays"
---

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
- `Temporal.Instant` | `Temporal.ZonedDateTime` — read via their
  `epochMilliseconds` property

```ts
type DateLike = Date | number | string | Temporal.Instant | Temporal.ZonedDateTime
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/add.ts)
