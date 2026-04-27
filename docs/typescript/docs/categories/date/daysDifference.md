---
sidebar_label: "daysDifference"
---

# daysDifference

Gets the difference in days between two dates.

> Available since v2.0.0

## Import

```ts
import { daysDifference } from '@helpers4/date';
```

## Signature


```ts
daysDifference(date1: Date, date2: Date): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date1` | `Date` | First date |
| `date2` | `Date` | Second date |

## Returns

`number` — Number of days difference (rounded)

## Examples

### Calculate days between two dates

Returns the absolute number of days between two dates.

```ts
daysDifference(new Date('2025-01-01'), new Date('2025-01-10'))
// => 9
```

## Related Types

### `DateDifferenceOptions`

Options for date difference calculation

```ts
interface DateDifferenceOptions {
  absolute?: boolean;
  unit?: DifferenceUnit;
}
```

### `DifferenceUnit`

Unit for date difference calculation

```ts
type DifferenceUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/difference.ts)
