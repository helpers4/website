---
sidebar_label: "timeAgo"
---

# timeAgo

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
| `date` | `DateLike` | The date to describe relative to `now` |
| `options` | `TimeAgoOptions` | Optional configuration (reference date, locale, numeric style) |

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timeAgo.ts)
