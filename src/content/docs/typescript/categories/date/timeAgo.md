---
title: "timeAgo"
sidebar:
  label: "timeAgo"
---

Formats a date as a human-readable relative time string.

Uses `Intl.RelativeTimeFormat` under the hood, making the output
locale-aware (e.g. "il y a 3 jours" in French).

Returns `null` if the input date is invalid.

> Available since v2.0.0

## Import

```ts
import { timeAgo } from '@helpers4/date';
```

## Signature


```ts
timeAgo(date: DateLike, options: TimeAgoOptions): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to describe relative to \`now\` |
| `options` | `TimeAgoOptions` | Optional configuration \(reference date, locale, numeric style\) |

## Returns

`string | null` — A locale-aware relative time string, or `null`

## Examples

### timeAgo



```ts
timeAgo('2025-01-17T00:00:00Z', { now: '2025-01-19T00:00:00Z' })
// => "2 days ago"

timeAgo('2025-01-20T00:00:00Z', { now: '2025-01-19T00:00:00Z' })
// => "in 1 day"  (or "tomorrow" with numeric: 'auto')

timeAgo('2025-01-19T00:00:00Z', { now: '2025-01-19T00:00:05Z' })
// => "5 seconds ago"
```

## Related Types

### `TimeAgoOptions`

Options for timeAgo.

```ts
interface TimeAgoOptions {
  locale?: string;
  now?: DateLike;
  numeric?: "always" | "auto";
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timeAgo.ts)
