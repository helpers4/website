---
sidebar_label: "compare"
---

# compare

Comparison of two dates.

Accepts any DateLike input (Date, timestamp, or date string).

> Available since v2.0.0

## Import

```ts
import { compare } from '@helpers4/date';
```

## Signature


```ts
compare(dateA: DateLike, dateB: DateLike, options: DateCompareOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateA` | `DateLike` | First date to compare |
| `dateB` | `DateLike` | Second date to compare |
| `options` | `DateCompareOptions` | Comparison options |

## Returns

`boolean` — `true` if dates are identical according to the specified precision, `false` otherwise

## Examples

### Compare dates with millisecond precision

By default, two identical Date objects are equal.

```ts
const d = new Date('2025-01-19T12:00:00Z');
compare(d, new Date('2025-01-19T12:00:00Z'))
// => true
```

### Compare only by day

Using day precision ignores the time part.

```ts
compare(
  new Date('2025-01-19T08:00:00Z'),
  new Date('2025-01-19T23:59:59Z'),
  { precision: 'days' }
)
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/compare.ts)
