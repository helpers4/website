---
title: "isTemporalDuration"
sidebar:
  label: "isTemporalDuration"
description: "Checks if a value is a `Temporal.Duration`."
version: "3.1.1"
---

Checks if a value is a `Temporal.Duration`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalDuration } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isTemporalDuration } from 'helpers4/guard';
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isTemporalDuration.ts)
