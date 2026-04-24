---
sidebar_label: "formatInTimezone"
---

# formatInTimezone

Formats a date in a specific IANA timezone using `Intl.DateTimeFormat`.

Returns `null` if the date or timezone is invalid.

> Available since v2.0.0

## Import

```ts
import { formatInTimezone } from '@helpers4/date';
```

## Signature


```ts
formatInTimezone(date: DateLike, tz: string, options: FormatInTimezoneOptions): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to format |
| `tz` | `string` | IANA timezone identifier (e.g. `'Asia/Tokyo'`) |
| `options` | `FormatInTimezoneOptions` | Optional locale and format configuration |

## Returns

`string | null` — A formatted date string, or `null`

## Examples

### formatInTimezone



```ts
formatInTimezone('2025-01-19T12:00:00Z', 'Asia/Tokyo')
// => "1/19/2025, 9:00:00 PM" (en-US default)

formatInTimezone('2025-01-19T12:00:00Z', 'Europe/Paris', {
  locale: 'fr-FR',
  formatOptions: { dateStyle: 'long', timeStyle: 'short' },
})
// => "19 janvier 2025, 13:00"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timezone.ts)
