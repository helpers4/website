---
sidebar_label: "compare"
---

# compare

Comparison of two dates.

## Import

```ts
import { DateCompareOptions, compare } from '@helpers4/date';
```

## `DateCompareOptions`

Options for date comparison

```ts
interface DateCompareOptions
```

## `compare`

Comparison of two dates.

```ts
function compare(dateA: Date, dateB: Date, options: DateCompareOptions =
```

| Parameter | Description |
|-----------|-------------|
| `dateA` | First date to compare |
| `dateB` | Second date to compare |
| `options` | Comparison options |

**Returns:** `true` if dates are identical according to the specified precision, `false` otherwise

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/compare.ts)
