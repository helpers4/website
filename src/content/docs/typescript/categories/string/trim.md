---
title: "trim"
sidebar:
  label: "trim"
description: "Trims both leading and trailing characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.0.7"
---

Trims both leading and trailing characters from a string, at a
configurable level of aggressiveness (see TrimMode). Defaults to
`'whitespace'`, which behaves exactly like `String.prototype.trim`.

Unlike the native `trim`, non-breaking spaces (NBSP, FIGURE SPACE, NARROW
NO-BREAK SPACE) are only stripped for `'separator'` mode and above - pass
`'wrappable'` to preserve them, since their whole purpose is to resist
being treated as a break point.

> Available since v3.0.6

## Import

```ts
import { trim } from '@helpers4/string';
```

## Signature


```ts
trim(input: string, mode?: TrimMode): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The string to trim\. |
| `mode` | `TrimMode` | How aggressively to trim\. Defaults to \`'whitespace'\`\. *(optional)* |

## Returns

`string` — The trimmed string, or the input itself when `null`/`undefined`.

## Examples

### Default mode matches String.prototype.trim

With no mode argument, behaves exactly like the native trim.

```ts
trim('   Hello   ')
// => 'Hello'
```

### Preserve non-breaking spaces on both ends with 'wrappable' mode

Non-breaking spaces (NBSP) at either end are kept, since their purpose is to resist trimming.

```ts
const NBSP = String.fromCharCode(160);
trim(NBSP + 'Hello' + NBSP, 'wrappable')
// => NBSP + 'Hello' + NBSP (unchanged)
```

### Strip zero-width characters on both ends with 'unicode' mode

The widest mode removes zero-width joiners/spaces String.prototype.trim leaves alone.

```ts
const ZWSP = String.fromCharCode(0x200b);
trim(ZWSP + 'Hello' + ZWSP, 'unicode')
// => 'Hello'
```

## Related Types

### `TrimMode`

How aggressively trim/trimStart/trimEnd strip
characters. The four levels are strictly nested — each one strips
everything the previous level does, plus more — from narrowest to widest:

| Mode | Strips | Example character(s) |
| ---- | ------ | --------------------- |
| `'wrappable'`  | Only characters where a line can break: ASCII whitespace, the breakable subset of Unicode's Space_Separator category, and the mandatory line/paragraph separators. **Preserves non-breaking spaces.** | space, tab, newline, EM SPACE |
| `'separator'`  | `'wrappable'`, plus the non-breaking subset — the full Unicode Space_Separator (Zs) category. | NBSP, FIGURE SPACE, NARROW NO-BREAK SPACE |
| `'whitespace'` | `'separator'`, plus U+FEFF (BOM / zero-width no-break space) — exactly what `String.prototype.trim` already strips. **Default.** | everything above, plus BOM |
| `'unicode'`    | `'whitespace'`, plus genuinely invisible zero-width Format (Cf) characters that `String.prototype.trim` does **not** strip. | ZERO WIDTH SPACE, ZERO WIDTH JOINER, WORD JOINER |

Use `'wrappable'` when a non-breaking space is meaningful and must survive
(e.g. gluing a number to its unit before truncating). Use `'unicode'` to
also clean up invisible characters accidentally left over from a paste —
neither of those is what `String.prototype.trim` does, which is exactly
why this type has more than one level instead of a boolean flag.

```ts
type TrimMode = 'wrappable' | 'separator' | 'whitespace' | 'unicode'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trim.ts)
