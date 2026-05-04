---
title: "isTemporalPlainTime"
sidebar:
  label: "isTemporalPlainTime"
---

# isTemporalPlainTime

Checks if a value is a `Temporal.PlainTime`.

Uses `instanceof` when `Temporal` is available globally, and falls back
to `Symbol.toStringTag` for environments without Temporal (e.g. browsers).

> Available since v2.0.0

## Import

```ts
import { isTemporalPlainTime } from '@helpers4/type';
```

## Signature


```ts
isTemporalPlainTime(value: unknown): value is PlainTime
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PlainTime` — True if value is a `Temporal.PlainTime`

## Examples

### isTemporalPlainTime



```ts
isTemporalPlainTime(Temporal.PlainTime.from('12:30:00'))  // => true
isTemporalPlainTime(Temporal.Now.instant())               // => false
isTemporalPlainTime(new Date())                           // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isTemporalPlainTime.ts)
