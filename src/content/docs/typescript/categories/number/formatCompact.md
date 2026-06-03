---
title: "formatCompact"
sidebar:
  label: "formatCompact"
---

Formats a number using compact notation (e.g. `1_500_000 → "1.5M"`).

Thin wrapper over `Intl.NumberFormat` with `notation: 'compact'`. Companion
of `formatSize` in the same `format*` family.

> Available since v2.0.0

## Import

```ts
import { formatCompact } from '@helpers4/number';
```

## Signature


```ts
formatCompact(value: number, locale?: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The number to format. |
| `locale` | `string` | BCP 47 locale tag. Defaults to the runtime locale. *(optional)* |

## Returns

`string` — A compact string representation of the number.

## Examples

### Compact large numbers

Formats a number using K / M suffixes for readability.

```ts
formatCompact(1_500_000, 'en') // => '1.5M'
formatCompact(1_000, 'en')     // => '1K'
formatCompact(999, 'en')       // => '999'
```

### Locale-aware formatting

Uses the provided locale for the decimal separator and suffix.

```ts
formatCompact(1_500_000, 'fr') // => '1,5 M'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/formatCompact.ts)
