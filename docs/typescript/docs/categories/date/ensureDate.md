---
sidebar_label: "ensureDate"
---

# ensureDate

Safely converts a date-like value to a valid `Date` object, or returns `null`.

Accepts `Date`, timestamps (seconds or milliseconds, auto-detected), date strings,
and objects with an `epochMilliseconds` property (e.g. `Temporal.Instant`,
`Temporal.ZonedDateTime`).
Returns `null` for `null`, `undefined`, empty strings, `0`, and any value that
produces an invalid `Date`.

This is the date equivalent of ensureArray — it normalizes flexible
input into a guaranteed type (or a safe fallback).

> Available since v2.0.0

## Import

```ts
import { ensureDate } from '@helpers4/date';
```

## Signature


```ts
ensureDate(input: DateLike | null | undefined): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `DateLike \| null \| undefined` | A date-like value to convert |

## Returns

`Date | null` — A valid `Date` object, or `null` if the input is invalid

## Examples

### ensureDate



```ts
ensureDate('2025-01-19T12:00:00Z') // => Date
ensureDate(1737290400)             // => Date (from Unix seconds)
ensureDate(1737290400000)          // => Date (from milliseconds)
ensureDate(new Date())             // => Date (same reference)
ensureDate(null)                   // => null
ensureDate('invalid')              // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/ensureDate.ts)
