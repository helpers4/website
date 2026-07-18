---
title: "percentageToTier"
sidebar:
  label: "percentageToTier"
---

Maps a numeric percentage to a tier (icon, color, label) using configurable thresholds.

Tiers are matched by their highest `min` that is `<= value`; a `value` below every tier's
`min` (e.g. a negative percentage, or custom tiers that don't cover down to 0) falls back to
the tier with the lowest `min` — there's always a match as long as `tiers` is non-empty.

> Available since v3.0.1

## Import

```ts
import { percentageToTier } from '@helpers4/ci';
```

## Signature


```ts
percentageToTier(value: number, tiers: readonly PercentageTier[]): PercentageTier
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The percentage to classify (typically 0-100, but not clamped) |
| `tiers` | `readonly PercentageTier[]` | Threshold tiers to match against, in any order (defaults to DEFAULT_PERCENTAGE_TIERS) |

## Returns

`PercentageTier` — The matched tier

## Examples

### Coverage report tier

Maps a coverage percentage to a tier using the built-in default thresholds.

```ts
percentageToTier(95.2)
// => { min: 90, icon: '🟢', color: 'green', label: 'excellent' }

percentageToTier(42)
// => { min: 0, icon: '🔴', color: 'red', label: 'poor' }
```

### Custom pass/fail tiers

Supply your own tiers, e.g. a simple two-tier pass/fail gate.

```ts
const tiers = [
  { min: 50, icon: '🟢', color: 'green', label: 'pass' },
  { min: 0, icon: '🔴', color: 'red', label: 'fail' },
];

percentageToTier(75, tiers)  // => { min: 50, icon: '🟢', color: 'green', label: 'pass' }
percentageToTier(25, tiers)  // => { min: 0, icon: '🔴', color: 'red', label: 'fail' }
```

## Related Types

### `PercentageTier`

A percentage threshold and the icon/color/label to use once a value reaches it.

```ts
interface PercentageTier {
  color: string;
  icon: string;
  label: string;
  min: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/ci/percentageToTier.ts)
