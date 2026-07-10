---
title: "toSeconds"
sidebar:
  label: "toSeconds"
---

Converts a date to a timestamp in **seconds** (epoch seconds).

Use this when sending a date to a backend API that expects seconds
(e.g. Java `Instant.getEpochSecond()`, Python `time.time()`).

> Available since v2.0.0

## Import

```ts
import { toSeconds } from '@helpers4/date';
```

## Signature


```ts
toSeconds(date: DateLike): number | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to convert |

## Returns

`number | null` — Seconds since the Unix epoch, or `null` for invalid input

## Examples

### toSeconds



```ts
toSeconds('2025-01-19T12:00:00Z') // => 1737288000
toSeconds(null)                    // => null
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/timestamp.ts)
