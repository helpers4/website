---
sidebar_label: "fromSeconds"
---

# fromSeconds

Creates a `Date` from a timestamp in **seconds**.

Use this when receiving a timestamp from a backend that sends seconds
(e.g. Java `Instant.getEpochSecond()`). No heuristic — the input is
always treated as seconds.

> Available since v2.0.0

## Import

```ts
import { fromSeconds } from '@helpers4/date';
```

## Signature


```ts
fromSeconds(seconds: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `seconds` | `number` | Seconds since the Unix epoch |

## Returns

`Date | null` — A valid `Date`, or `null` for `NaN` / non-finite input

## Examples

### fromSeconds



```ts
fromSeconds(1737288000)  // => Date('2025-01-19T12:00:00Z')
fromSeconds(0)           // => Date('1970-01-01T00:00:00Z')
fromSeconds(NaN)         // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
