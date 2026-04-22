---
sidebar_label: "toSeconds"
---

# toSeconds

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
