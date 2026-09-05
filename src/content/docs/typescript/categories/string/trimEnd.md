---
title: "trimEnd"
sidebar:
  label: "trimEnd"
description: "Trims trailing characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.1.1"
---

Trims trailing characters from a string, at a configurable level of
aggressiveness (see TrimMode). Defaults to `'whitespace'`, which
behaves exactly like `String.prototype.trimEnd`.

Unlike the native `trimEnd`, non-breaking spaces (NBSP, FIGURE SPACE,
NARROW NO-BREAK SPACE) are only stripped for `'separator'` mode and above -
pass `'wrappable'` to preserve them, since their whole purpose is to resist
being treated as a break point (e.g. gluing a number to its unit).

> Available since v3.0.6

## Import

```ts
import { trimEnd } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { trimEnd } from 'helpers4/string';
```

## Signature


```ts
trimEnd(input: string, mode?: TrimMode): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The string to trim\. |
| `mode` | `TrimMode` | How aggressively to trim\. Defaults to \`'whitespace'\`\. *(optional)* |

## Returns

`string` — The trimmed string, or the input itself when `null`/`undefined`.

## Examples

### Default mode matches String.prototype.trimEnd

With no mode argument, behaves exactly like the native trimEnd.

```ts
trimEnd('Hello   ')
// => 'Hello'
```

### Preserve non-breaking spaces with 'wrappable' mode

A non-breaking space (NBSP) is kept, since its purpose is to resist being trimmed.

```ts
const NBSP = String.fromCharCode(160);
trimEnd('Hello,' + NBSP, 'wrappable')
// => 'Hello,' + NBSP (unchanged)
```

### Strip everything, including zero-width characters, with 'unicode' mode

The widest mode also removes zero-width joiners/spaces that String.prototype.trimEnd leaves alone.

```ts
const ZWSP = String.fromCharCode(0x200b);
trimEnd('Hello' + ZWSP, 'unicode')
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trimEnd.ts)
