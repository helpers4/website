---
sidebar_label: "isTemporalZonedDateTime"
---

# isTemporalZonedDateTime

Checks if a value is a `Temporal.ZonedDateTime`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalZonedDateTime } from '@helpers4/type';
```

## Signature

```ts
isTemporalZonedDateTime(value: unknown): value is ZonedDateTime
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is ZonedDateTime` — True if value is a `Temporal.ZonedDateTime`

## Examples

### isTemporalZonedDateTime



```ts
isTemporalZonedDateTime(Temporal.Now.zonedDateTimeISO())  // => true
isTemporalZonedDateTime(Temporal.Now.instant())           // => false
isTemporalZonedDateTime(new Date())                       // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isTemporalZonedDateTime.ts)
