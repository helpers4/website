---
sidebar_label: "toRFC2822"
---

# toRFC2822

Converts a date to RFC 2822 format
Format: Day, DD Mon YYYY HH:mm:ss +0000
Used in email headers (Date field) and HTTP headers

> Available since v2.0.0

## Import

```ts
import { toRFC2822 } from '@helpers4/date';
```

## Signature

```ts
toRFC2822(date: string | number | Date): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `string \| number \| Date` | Date to convert (Date object, timestamp, or date string) |

## Returns

`string | null` — RFC 2822 formatted string or null if invalid date

## Examples

### toRFC2822



```ts
```ts
toRFC2822(new Date('2025-01-19T12:30:00Z')) // 'Sun, 19 Jan 2025 12:30:00 +0000'
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
