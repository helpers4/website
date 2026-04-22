---
sidebar_label: "formatDuration"
---

# formatDuration

Formats a duration in milliseconds as a compact human-readable string.

Produces output like `"1h 23m 45s"`. Zero-valued leading units are
omitted (e.g. `"23m 45s"` instead of `"0h 23m 45s"`), but trailing
zeros are kept up to the minimum unit (`"1h 0m 0s"` when `minUnit`
is `'seconds'`).

Negative durations are prefixed with `"-"`.
A zero duration returns `"0s"` (or `"0m"` / `"0h"` depending on `minUnit`).

> Available since v2.0.0

## Import

```ts
import { formatDuration } from '@helpers4/date';
```

## Signature

```ts
formatDuration(ms: number, options: FormatDurationOptions): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ms` | `number` | Duration in milliseconds |
| `options` | `FormatDurationOptions` | Optional configuration |

## Returns

`string` — A compact duration string

## Examples

### formatDuration



```ts
formatDuration(5025000)           // => "1h 23m 45s"
formatDuration(45000)             // => "45s"
formatDuration(3600000)           // => "1h 0m 0s"
formatDuration(5025000, { minUnit: 'minutes' }) // => "1h 23m"
formatDuration(5025000, { padded: true })       // => "01h 23m 45s"
formatDuration(-5025000)          // => "-1h 23m 45s"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/formatDuration.ts)
