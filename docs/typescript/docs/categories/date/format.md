---
sidebar_label: "format"
---

# format

Converts a date to ISO 8601 format
Format: YYYY-MM-DDTHH:mm:ss.sssZ

## Import

```ts
import { format, toRFC3339, toRFC2822 } from '@helpers4/date';
```

## `format`

Converts a date to ISO 8601 format
Format: YYYY-MM-DDTHH:mm:ss.sssZ

```ts
function toISO8601(date: Date | number | string): string | null
```

| Parameter | Description |
|-----------|-------------|
| `date` | Date to convert (Date object, timestamp, or date string) |

**Returns:** ISO 8601 formatted string or null if invalid date

```ts
toISO8601(new Date('2025-01-19T12:30:00Z')) // '2025-01-19T12:30:00.000Z'
toISO8601(1737290400000) // '2025-01-19T12:00:00.000Z'
```

## `toRFC3339`

Converts a date to RFC 3339 format
Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm
RFC 3339 is a profile of ISO 8601, but without milliseconds by default

```ts
function toRFC3339( date: Date | number | string, includeMilliseconds = false ): string | null
```

| Parameter | Description |
|-----------|-------------|
| `date` | Date to convert (Date object, timestamp, or date string) |
| `includeMilliseconds` | Whether to include milliseconds (default: false) |

**Returns:** RFC 3339 formatted string or null if invalid date

```ts
toRFC3339(new Date('2025-01-19T12:30:45.123Z')) // '2025-01-19T12:30:45Z'
toRFC3339(new Date('2025-01-19T12:30:45.123Z'), true) // '2025-01-19T12:30:45.123Z'
```

## `toRFC2822`

Converts a date to RFC 2822 format
Format: Day, DD Mon YYYY HH:mm:ss +0000
Used in email headers (Date field) and HTTP headers

```ts
function toRFC2822(date: Date | number | string): string | null
```

| Parameter | Description |
|-----------|-------------|
| `date` | Date to convert (Date object, timestamp, or date string) |

**Returns:** RFC 2822 formatted string or null if invalid date

```ts
toRFC2822(new Date('2025-01-19T12:30:00Z')) // 'Sun, 19 Jan 2025 12:30:00 +0000'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
