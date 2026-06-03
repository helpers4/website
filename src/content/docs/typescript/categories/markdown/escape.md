---
title: "escape"
sidebar:
  label: "escape"
---

Escapes all Markdown special characters in a string so they render as
literal text rather than formatting syntax.

Escaped characters: `\ \` * _ { } [ ] ( ) # + - . !`

Pass `{ cell: true }` to also escape pipe characters and replace newlines
with spaces, making the result safe for embedding in a Markdown table cell.

> Available since v2.0.0

## Import

```ts
import { escape } from '@helpers4/markdown';
```

## Signature


```ts
escape(str: string, options?: EscapeOptions): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The raw string to escape |
| `options` | `EscapeOptions` | Optional escaping options *(optional)* |

## Returns

`string` — The escaped string

## Examples

### Escape special Markdown characters

Prefixes every Markdown special character with a backslash.

```ts
escape('**bold** and _italic_')
// => '\\*\\*bold\\*\\* and \\_italic\\_'
```

### Safely render user input inside Markdown

Prevents user-supplied strings from breaking Markdown formatting.

```ts
const userInput = '(C) [helpers4]';
const safe = escape(userInput);
// => '\\(C\\) \\[helpers4\\]'
```

## Related Types

### `EscapeOptions`

Options for escape.

```ts
interface EscapeOptions {
  cell?: boolean;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/markdown/escape.ts)
