---
title: "parseDuration"
sidebar:
  label: "parseDuration"
---

Parses a compact duration string (as produced by formatDuration,
e.g. `"1h 23m 45s"`) back into milliseconds.

Accepts any combination/order of `h`/`m`/`s` segments, with or without
spaces between them (`"1h30m"` and `"1h 30m"` both work). A single leading
`-` negates the whole duration, matching `formatDuration`'s output.
Returns `null` when no valid segment is found.

> Available since v3.0.0

## Import

```ts
import { parseDuration } from '@helpers4/date';
```

## Signature


```ts
parseDuration(str: string): number | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The duration string to parse |

## Returns

`number | null` — The duration in milliseconds, or `null` if unparseable

## Examples

### Parse a compact duration string into milliseconds

The inverse of formatDuration() — accepts the same "1h 23m 45s" style output.

```ts
parseDuration('1h 23m 45s')
// => 5025000
```

### Returns null for an unparseable string

Lets you branch on parse failure instead of silently getting 0 or NaN.

```ts
parseDuration('not a duration')
// => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/parseDuration.ts)
