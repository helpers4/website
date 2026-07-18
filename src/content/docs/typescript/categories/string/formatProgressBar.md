---
title: "formatProgressBar"
sidebar:
  label: "formatProgressBar"
---

Formats a value as a text progress bar, repeating `filledChar`/`emptyChar` across `width`
cells proportional to `value / max`.

`value` is clamped to `[0, max]` before computing the ratio — out-of-range values (negative,
above `max`) produce an empty or fully-filled bar instead of throwing. Non-finite `max`
(`NaN`, `Infinity`) is treated as `0`, yielding an empty bar.

> Available since v3.0.1

## Import

```ts
import { formatProgressBar } from '@helpers4/string';
```

## Signature


```ts
formatProgressBar(value: number, options: ProgressBarOptions): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The current value |
| `options` | `ProgressBarOptions` | Bar rendering options |

## Returns

`string` — A string of `width` repeated filled/empty characters

## Examples

### Default 20-cell bar

Renders a percentage as a filled/empty block bar using the default width and characters.

```ts
formatProgressBar(65)
// => '▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░'
```

### Custom width, characters, and scale

Renders a value against a custom max, width, and fill characters — useful for anything scored out of a different total than 100.

```ts
formatProgressBar(3, { width: 10, max: 5, filledChar: '#', emptyChar: '-' })
// => '######----'
```

## Related Types

### `ProgressBarOptions`

Options for formatProgressBar.

```ts
interface ProgressBarOptions {
  emptyChar?: string;
  filledChar?: string;
  max?: number;
  width?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/formatProgressBar.ts)
