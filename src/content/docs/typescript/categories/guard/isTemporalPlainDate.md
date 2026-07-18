---
title: "isTemporalPlainDate"
sidebar:
  label: "isTemporalPlainDate"
---

Checks if a value is a `Temporal.PlainDate`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalPlainDate } from '@helpers4/guard';
```

## Signature


```ts
isTemporalPlainDate(value: unknown): value is PlainDate
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PlainDate` — True if value is a `Temporal.PlainDate`

## Examples

### isTemporalPlainDate



```ts
isTemporalPlainDate(Temporal.PlainDate.from('2025-01-19'))  // => true
isTemporalPlainDate(Temporal.Now.instant())                 // => false
isTemporalPlainDate(new Date())                             // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isTemporalPlainDate.ts)
