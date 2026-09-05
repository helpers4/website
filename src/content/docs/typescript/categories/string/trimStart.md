---
title: "trimStart"
sidebar:
  label: "trimStart"
description: "Trims leading characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.1.0"
---

Trims leading characters from a string, at a configurable level of
aggressiveness (see TrimMode). Defaults to `'whitespace'`, which
behaves exactly like `String.prototype.trimStart`.

Unlike the native `trimStart`, non-breaking spaces (NBSP, FIGURE SPACE,
NARROW NO-BREAK SPACE) are only stripped for `'separator'` mode and above -
pass `'wrappable'` to preserve them, since their whole purpose is to resist
being treated as a break point.

> Available since v3.0.6

## Import

```ts
import { trimStart } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { trimStart } from 'helpers4/string';
```

## Signature


```ts
trimStart(input: string, mode?: TrimMode): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The string to trim\. |
| `mode` | `TrimMode` | How aggressively to trim\. Defaults to \`'whitespace'\`\. *(optional)* |

## Returns

`string` — The trimmed string, or the input itself when `null`/`undefined`.

## Examples

### Default mode matches String.prototype.trimStart

With no mode argument, behaves exactly like the native trimStart.

```ts
trimStart('   Hello')
// => 'Hello'
```

### Preserve non-breaking spaces with 'wrappable' mode

A leading non-breaking space (NBSP) is kept, since its purpose is to resist being trimmed.

```ts
const NBSP = String.fromCharCode(160);
trimStart(NBSP + 'Hello', 'wrappable')
// => NBSP + 'Hello' (unchanged)
```

### Strip non-breaking spaces too with 'separator' mode

A wider mode than the default (whitespace) is not needed for NBSP — separator already covers it.

```ts
const NBSP = String.fromCharCode(160);
trimStart(NBSP + 'Hello', 'separator')
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trimStart.ts)
