---
title: "format"
sidebar:
  label: "format"
description: "Formats a date as a short label that does not depend on the machine: UTC, English, and `Jul 27, 2026` by default."
version: "3.1.8"
---

Formats a date as a short label that does not depend on the machine: UTC, English, and
`Jul 27, 2026` by default. A shorthand for
`formatInTimezone(date, 'UTC', { locale, formatOptions })`.

`formatOptions` replaces the default format rather than extending it, so
`{ month: 'short', day: 'numeric' }` gives `Jul 27` with no year.

Returns `null` if the date or the locale is invalid.

> Available since v3.1.5

## Import

```ts
import { format } from '@helpers4/date';
// or, from the all-in-one package (same code, one install):
import { format } from 'helpers4/date';
```

## Signature


```ts
format(date: DateLike, formatOptions: DateTimeFormatOptions, locale: string): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to format |
| `formatOptions` | `DateTimeFormatOptions` | \`Intl\.DateTimeFormat\` options \(default: day, short month, year\) |
| `locale` | `string` | BCP 47 locale tag \(default: \`'en'\`\) |

## Returns

`string | null` — The formatted date, or `null`

## Examples

### format



```ts
format('2026-07-27')                                   // => 'Jul 27, 2026'
format('2026-07-27', { month: 'short', day: 'numeric' }) // => 'Jul 27'
format('2026-07-27', undefined, 'fr')                  // => '27 juil. 2026'
format('nope')                                         // => null
```

## Related Types

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/format.ts)
