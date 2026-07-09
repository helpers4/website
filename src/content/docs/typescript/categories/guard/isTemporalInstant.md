---
title: "isTemporalInstant"
sidebar:
  label: "isTemporalInstant"
---

Checks if a value is a `Temporal.Instant`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalInstant } from '@helpers4/guard';
```

## Signature


```ts
isTemporalInstant(value: unknown): value is Instant
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Instant` — True if value is a `Temporal.Instant`

## Examples

### isTemporalInstant



```ts
isTemporalInstant(Temporal.Now.instant())      // => true
isTemporalInstant(Temporal.Now.plainDateISO())  // => false
isTemporalInstant(new Date())                   // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isTemporalInstant.ts)
