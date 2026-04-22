---
sidebar_label: "isWithinRange"
---

# isWithinRange

Checks whether a date falls within a range (inclusive on both ends).

Returns `false` if any of the inputs is invalid.

> Available since v2.0.0

## Import

```ts
import { isWithinRange } from '@helpers4/date';
```

## Signature

```ts
isWithinRange(date: DateLike, start: DateLike, end: DateLike): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to check |
| `start` | `DateLike` | Start of the range (inclusive) |
| `end` | `DateLike` | End of the range (inclusive) |

## Returns

`boolean` — `true` if `start <= date <= end`

## Examples

### isWithinRange



```ts
isWithinRange('2025-06-15', '2025-01-01', '2025-12-31') // => true
isWithinRange('2024-06-15', '2025-01-01', '2025-12-31') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/range.ts)
