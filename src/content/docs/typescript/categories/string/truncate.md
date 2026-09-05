---
title: "truncate"
sidebar:
  label: "truncate"
description: "Truncates a string to `maxLength` characters, appending an ellipsis when cut."
version: "3.1.1"
---

Truncates a string to `maxLength` characters, appending an ellipsis when cut.

The ellipsis counts toward `maxLength`, so the result is always at most
`maxLength` characters long. The cut point is snapped back to the nearest
grapheme-cluster boundary and trailing breakable whitespace is trimmed, so
a cut never leaves a dangling space (`'Hello,…'`, not `'Hello, …'`) or a
split multi-code-unit character (a lone surrogate, an orphaned combining
mark, a family emoji cut mid-sequence, …) in front of the ellipsis — this
means the result can be shorter than `maxLength` when the cut point falls
on whitespace or inside such a cluster. Non-breaking spaces (U+00A0) and
other "no-break" Unicode separators are deliberately left untouched, since
their whole purpose is to resist being treated as a break point. If the
string is already within the limit, it is returned unchanged (no ellipsis
appended, no trimming). `null` and `undefined` inputs are returned as-is to
align with other string helpers.

> Available since v2.0.0

## Import

```ts
import { truncate } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { truncate } from 'helpers4/string';
```

## Signature


```ts
truncate(input: undefined, maxLength: number, ellipsis?: string): undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `undefined` | The string to truncate\. |
| `maxLength` | `number` | Maximum number of characters in the output \(including ellipsis\)\. |
| `ellipsis` | `string` | Appended when the string is cut\. Defaults to \`'…'\`\. *(optional)* |

## Returns

`undefined` — The (possibly truncated) string, or the input itself when `null`/`undefined`.

## Examples

### Truncate with default ellipsis

Appends … when the string exceeds the limit, trimming a trailing space at the cut point.

```ts
truncate('Hello, world!', 8)
// => 'Hello,…'
```

### Truncate with custom ellipsis

The ellipsis counts toward the maxLength.

```ts
truncate('Hello, world!', 8, '...')
// => 'Hello...'
```

### String within limit

Returned unchanged when already short enough.

```ts
truncate('Hi', 10)
// => 'Hi'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/truncate.ts)
