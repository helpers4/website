---
title: "dateToISOString"
sidebar:
  label: "dateToISOString"
---

Formats a date to ISO string or returns null.

> Available since v1.9.0

## Import

```ts
import { dateToISOString } from '@helpers4/date';
```

## Signature


```ts
dateToISOString(input: DateLike | null | undefined): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `DateLike \| null \| undefined` | Date input |

## Returns

`string | null` — ISO string or null

## Related Types

### `DateLike`

A value that can be converted to a Date.

- `Date` — used as-is (validated for Invalid Date)
- `number` — treated as a timestamp (seconds or milliseconds, auto-detected);
  `0` is treated as invalid and produces `null` in ensureDate
- `string` — parsed via `new Date(string)`
- `EpochMilliseconds` — any object with a `epochMilliseconds` property
  (e.g. `Temporal.Instant`, `Temporal.ZonedDateTime`)

// TODO: When the Temporal API reaches Stage 4 and is available without
// flags in all major runtimes, consider narrowing the union to the
// concrete Temporal types for stricter type-checking.

```ts
type DateLike = Date | number | string | EpochMilliseconds
```

### `EpochMilliseconds`

An object that exposes an epoch timestamp in milliseconds.

This structural type is satisfied by `Temporal.Instant` and
`Temporal.ZonedDateTime` (and any future object that carries the same
property), so callers can pass Temporal values without importing them.

```ts
interface EpochMilliseconds {
  epochMilliseconds: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/safeDate.ts)
