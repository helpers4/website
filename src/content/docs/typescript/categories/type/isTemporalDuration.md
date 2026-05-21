---
title: "isTemporalDuration"
sidebar:
  label: "isTemporalDuration"
---

Checks if a value is a `Temporal.Duration`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalDuration } from '@helpers4/type';
```

## Signature


```ts
isTemporalDuration(value: unknown): value is Duration
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Duration` — True if value is a `Temporal.Duration`

## Examples

### isTemporalDuration



```ts
isTemporalDuration(Temporal.Duration.from({ hours: 1 }))  // => true
isTemporalDuration(Temporal.Now.instant())                 // => false
isTemporalDuration(1000)                                   // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isTemporalDuration.ts)
