---
sidebar_label: "difference"
---

# difference

Calculates the difference between two dates in the specified unit.

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { difference } from '@helpers4/date';
```

## Signature


```ts
difference(dateA: DateLike, dateB: DateLike, options: DateDifferenceOptions): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateA` | `DateLike` | First date |
| `dateB` | `DateLike` | Second date |
| `options` | `DateDifferenceOptions` | Difference options |

## Returns

`number` — The difference between the two dates, or `NaN` if either date is invalid

## Examples

### difference



```ts
difference('2025-01-01', '2025-01-10')
// => 9
difference('2025-01-01T00:00:00Z', '2025-01-01T02:30:00Z', { unit: 'hours' })
// => 2.5
difference('2025-01-10', '2025-01-01', { absolute: false })
// => -9
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/difference.ts)
