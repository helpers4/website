---
sidebar_label: "isSameMonth"
---

# isSameMonth

Checks if two dates are in the same month (and year).

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { isSameMonth } from '@helpers4/date';
```

## Signature

```ts
isSameMonth(date1: DateLike, date2: DateLike): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date1` | `DateLike` | First date |
| `date2` | `DateLike` | Second date |

## Returns

`boolean` — True if same month and year, false otherwise (including when either date is invalid)

## Examples

### isSameMonth



```ts
isSameMonth('2025-01-01', '2025-01-31') // => true
isSameMonth('2025-01-31', '2025-02-01') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/is.ts)
