---
title: "trimEnd"
sidebar:
  label: "trimEnd"
description: "Trims trailing characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.0.6"
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trimEnd.ts)
