---
sidebar_label: "clampDate"
---

# clampDate

Clamps a date to a [min, max] range.

Returns a **new** `Date` — the original is never mutated.
Returns `null` if any of the inputs is invalid.

> Available since v2.0.0

## Import

```ts
import { clampDate } from '@helpers4/date';
```

## Signature

```ts
clampDate(date: DateLike, min: DateLike, max: DateLike): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to clamp |
| `min` | `DateLike` | The minimum allowed date |
| `max` | `DateLike` | The maximum allowed date |

## Returns

`Date | null` — A new Date clamped to the range, or `null` if any input is invalid

## Examples

### clampDate



```ts
clampDate('2025-06-15', '2025-01-01', '2025-03-31')
// => Date(2025-03-31) — clamped to max

clampDate('2025-02-15', '2025-01-01', '2025-03-31')
// => Date(2025-02-15) — within range, unchanged
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/range.ts)
