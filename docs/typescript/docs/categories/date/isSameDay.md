---
sidebar_label: "isSameDay"
---

# isSameDay

Checks if two dates are the same day

> Available since v2.0.0

## Import

```ts
import { isSameDay } from '@helpers4/date';
```

## Signature

```ts
isSameDay(date1: Date, date2: Date): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date1` | `Date` | First date |
| `date2` | `Date` | Second date |

## Returns

`boolean` — True if same day

## Examples

### Same day, different times

Returns true when both dates are on the same calendar day.

```ts
isSameDay(new Date('2025-01-19T08:00:00'), new Date('2025-01-19T22:00:00'))
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/is.ts)
