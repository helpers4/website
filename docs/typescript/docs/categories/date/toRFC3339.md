---
sidebar_label: "toRFC3339"
---

# toRFC3339

Converts a date to RFC 3339 format
Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm
RFC 3339 is a profile of ISO 8601, but without milliseconds by default

## Import

```ts
import { toRFC3339 } from '@helpers4/date';
```

## Signature

```ts
function toRFC3339( date: Date | number | string, includeMilliseconds = false ): string | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `date` | Date to convert (Date object, timestamp, or date string) |
| `includeMilliseconds` | Whether to include milliseconds (default: false) |

## Returns

RFC 3339 formatted string or null if invalid date

## Example

```ts
toRFC3339(new Date('2025-01-19T12:30:45.123Z')) // '2025-01-19T12:30:45Z'
toRFC3339(new Date('2025-01-19T12:30:45.123Z'), true) // '2025-01-19T12:30:45.123Z'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
