---
sidebar_label: "fromMillis"
---

# fromMillis

Creates a `Date` from a timestamp in **milliseconds**.

Use this when receiving a timestamp from a JS-native source
(e.g. `Date.now()`, `performance.timeOrigin`). No heuristic — the
input is always treated as milliseconds.

> Available since v2.0.0

## Import

```ts
import { fromMillis } from '@helpers4/date';
```

## Signature

```ts
fromMillis(ms: number): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ms` | `number` | Milliseconds since the Unix epoch |

## Returns

`Date | null` — A valid `Date`, or `null` for `NaN` / non-finite input

## Examples

### fromMillis



```ts
fromMillis(1737288000000) // => Date('2025-01-19T12:00:00Z')
fromMillis(0)             // => Date('1970-01-01T00:00:00Z')
fromMillis(NaN)           // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
