---
title: "toMillis"
sidebar:
  label: "toMillis"
---

Converts a date to a timestamp in **milliseconds** (epoch millis).

Use this when you need a plain number from a `DateLike` value
(e.g. for `Date.now()` comparisons, localStorage, or JS-native APIs).

> Available since v2.0.0

## Import

```ts
import { toMillis } from '@helpers4/date';
```

## Signature


```ts
toMillis(date: DateLike): number | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | `DateLike` | The date to convert |

## Returns

`number | null` — Milliseconds since the Unix epoch, or `null` for invalid input

## Examples

### toMillis



```ts
toMillis('2025-01-19T12:00:00Z') // => 1737288000000
toMillis(null)                    // => null
```

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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/timestamp.ts)
