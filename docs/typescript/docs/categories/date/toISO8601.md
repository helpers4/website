---
sidebar_label: "toISO8601"
---

# toISO8601

Converts a date to ISO 8601 format
Format: YYYY-MM-DDTHH:mm:ss.sssZ

## Import

```ts
import { toISO8601 } from '@helpers4/date';
```

## Signature

```ts
function toISO8601(date: Date | number | string): string | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `date` | Date to convert (Date object, timestamp, or date string) |

## Returns

ISO 8601 formatted string or null if invalid date

## Example

```ts
toISO8601(new Date('2025-01-19T12:30:00Z')) // '2025-01-19T12:30:00.000Z'
toISO8601(1737290400000) // '2025-01-19T12:00:00.000Z'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
