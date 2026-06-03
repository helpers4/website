---
title: "inRange"
sidebar:
  label: "inRange"
---

Checks whether a number falls within `[min, max]` (both inclusive by default).

> Available since v2.0.0

## Import

```ts
import { inRange } from '@helpers4/number';
```

## Signature


```ts
inRange(value: number, min: number, max: number, options: InRangeOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The number to test |
| `min` | `number` | Lower bound |
| `max` | `number` | Upper bound |
| `options` | `InRangeOptions` | Boundary inclusion mode (default: `'both'`) |

## Returns

`boolean` — `true` if `value` is within the specified range

## Examples

### Check if a value is within bounds (inclusive)

Both min and max are included by default.

```ts
inRange(5, 1, 10)   // => true
inRange(0, 1, 10)   // => false
inRange(1, 1, 10)   // => true  (min included)
inRange(10, 1, 10)  // => true  (max included)
```

### Exclusive range

Use { inclusive: "none" } for open interval (min, max).

```ts
inRange(5, 1, 10, { inclusive: 'none' })  // => true
inRange(1, 1, 10, { inclusive: 'none' })  // => false
inRange(10, 1, 10, { inclusive: 'none' }) // => false
```

## Related Types

### `InRangeOptions`

Options for inRange.

```ts
interface InRangeOptions {
  inclusive?: "min" | "max" | "both" | "none";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/inRange.ts)
