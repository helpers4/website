---
title: "trim"
sidebar:
  label: "trim"
description: "Trims both leading and trailing characters from a string, at a configurable level of aggressiveness (see TrimMode)."
version: "3.0.6"
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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/trim.ts)
