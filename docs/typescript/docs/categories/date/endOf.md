---
sidebar_label: "endOf"
---

# endOf

Returns a new `Date` set to the **end** of the given unit.

- `'day'`   — 23:59:59.999
- `'month'` — last day of the month, 23:59:59.999
- `'year'`  — December 31st, 23:59:59.999

Returns `null` if the input is invalid.

> Available since v2.0.0

## Import

```ts
import { endOf } from '@helpers4/date';
```

## Signature

```ts
endOf(date: DateLike, unit: DateTruncUnit): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The base date |
| `unit` | `DateTruncUnit` | The unit to round to |

## Returns

`Date | null` — A new Date at the end of the unit, or `null`

## Examples

### endOf



```ts
endOf('2025-06-15T14:30:00Z', 'day')    // => 2025-06-15T23:59:59.999Z
endOf('2025-06-15T14:30:00Z', 'month')  // => 2025-06-30T23:59:59.999Z
endOf('2025-06-15T14:30:00Z', 'year')   // => 2025-12-31T23:59:59.999Z
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/startOf.ts)
