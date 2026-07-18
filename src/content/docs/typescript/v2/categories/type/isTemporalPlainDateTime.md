---
title: "isTemporalPlainDateTime"
sidebar:
  label: "isTemporalPlainDateTime"
---

Checks if a value is a `Temporal.PlainDateTime`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalPlainDateTime } from '@helpers4/type';
```

## Signature


```ts
isTemporalPlainDateTime(value: unknown): value is PlainDateTime
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PlainDateTime` — True if value is a `Temporal.PlainDateTime`

## Examples

### isTemporalPlainDateTime



```ts
isTemporalPlainDateTime(Temporal.PlainDateTime.from('2025-01-19T12:00'))  // => true
isTemporalPlainDateTime(Temporal.Now.instant())                           // => false
isTemporalPlainDateTime(new Date())                                       // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/type/isTemporalPlainDateTime.ts)
