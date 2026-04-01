---
sidebar_label: "compare"
---

# compare

Comparison of two dates.

## Import

```ts
import { compare, DateCompareOptions } from '@helpers4/date';
```

## Signature

```ts
function compare(dateA: Date, dateB: Date, options: DateCompareOptions = {}): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `dateA` | First date to compare |
| `dateB` | Second date to compare |
| `options` | Comparison options |

## Returns

`true` if dates are identical according to the specified precision, `false` otherwise

## Types

### `DateCompareOptions`

Options for date comparison

```ts
interface DateCompareOptions {
	precision?: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days';
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/compare.ts)
