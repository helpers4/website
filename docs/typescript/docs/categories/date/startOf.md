---
sidebar_label: "startOf"
---

# startOf

Returns a new `Date` set to the **start** of the given unit.

- `'day'`   — 00:00:00.000
- `'month'` — 1st of the month, 00:00:00.000
- `'year'`  — January 1st, 00:00:00.000

Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { startOf } from '@helpers4/date';
```

## Signature

```ts
startOf(date: DateLike, unit: DateTruncUnit): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `unit` | `DateTruncUnit` | The unit to truncate to |

## Returns

`Date | null` — A new Date at the start of the unit, or `null`

## Examples

### startOf



```ts
startOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T00:00:00.000Z
startOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-01T00:00:00.000Z
startOf('2025-06-15T14:30:00Z', 'year')   // => 2025-01-01T00:00:00.000Z
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/startOf.ts)
