---
sidebar_label: "toMillis"
---

# toMillis

Converts a date to a timestamp in **milliseconds** (epoch millis).

Use this when you need a plain number from a `DateLike` value
(e.g. for `Date.now()` comparisons, localStorage, or JS-native APIs).

> Available since v2.0.0

## Import

```ts
import { toMillis } from '@helpers4/date';
```

## Signature

```ts
toMillis(date: DateLike): number | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to convert |

## Returns

`number | null` — Milliseconds since the Unix epoch, or `null` for invalid input

## Examples

### toMillis



```ts
toMillis('2025-01-19T12:00:00Z') // => 1737288000000
toMillis(null)                    // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
