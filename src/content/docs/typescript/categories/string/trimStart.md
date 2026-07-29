---
title: "trimStart"
sidebar:
  label: "trimStart"
description: "Trims leading characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.0.6"
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trimStart.ts)
