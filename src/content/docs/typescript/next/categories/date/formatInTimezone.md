---
title: "formatInTimezone"
sidebar:
  label: "formatInTimezone"
---

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

## Related Types

### `FormatInTimezoneOptions`

Options for formatInTimezone.

```ts
interface FormatInTimezoneOptions {
  formatOptions?: DateTimeFormatOptions;
  locale?: string;
}
```

### `DateLike`

A value that can be converted to a Date.

- `Date` — used as-is (validated for Invalid Date)
- `number` — treated as a timestamp (seconds or milliseconds, auto-detected);
  `0` is treated as invalid and produces `null` in ensureDate
- `string` — parsed via `new Date(string)`
- `Temporal.Instant` | `Temporal.ZonedDateTime` — read via their
  `epochMilliseconds` property

```ts
type DateLike = Date | number | string | Temporal.Instant | Temporal.ZonedDateTime
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/timezone.ts)
