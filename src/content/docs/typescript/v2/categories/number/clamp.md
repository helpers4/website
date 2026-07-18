---
title: "clamp"
sidebar:
  label: "clamp"
---

Clamps a number between min and max values

> Available since v1.9.0

## Import

```ts
import { clamp } from '@helpers4/number';
```

## Signature


```ts
clamp(value: number, min: number, max: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The value to clamp |
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

## Returns

`number` — Clamped value

## Examples

### Clamp a value within range

Restricts a number to be within a min/max range.

```ts
clamp(15, 0, 10)  // => 10
clamp(-5, 0, 10)  // => 0
clamp(5, 0, 10)   // => 5
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/number/clamp.ts)
