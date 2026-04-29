---
sidebar_label: "injectWordBreaks"
---

# injectWordBreaks

Adds word-break opportunities to a string so it can wrap cleanly in narrow
UI containers such as side panels or table cells.

Invisible zero-width spaces (`\u200B`) are inserted at meaningful
boundaries — camelCase splits, path separators, token edges — while
protected spans (URLs, emails, HTML) and atomic numeric values (`-0.1%`,
`12ms`, `1e-3`) are never broken. The visible text content is unchanged.

> Available since next

## Import

```ts
import { injectWordBreaks } from '@helpers4/string';
```

## Signature


```ts
injectWordBreaks(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to process. |

## Returns

`string` — The string with word-break opportunities injected at meaningful
boundaries.

## Examples

### camelCase identifier

Inserts ZWS at each camelCase boundary so a long identifier can wrap in a narrow column.

```ts
injectWordBreaks('getUserProfileData')
// => 'get\u200BUser\u200BProfile\u200BData'
```

### Comma-separated tokens

The comma attaches to the left token so a line never starts with a comma.

```ts
injectWordBreaks('foo,bar')
// => 'foo,\u200Bbar'
```

### Atomic numeric value

Signed decimals and numbers with units (-0.1%, 12ms, -2.4E+6) are never split.

```ts
injectWordBreaks('-0.1%')
// => '-0.1%'   (unchanged — atomic value)
```

### File path

Slashes become wrap points so a long path can break at each component.

```ts
injectWordBreaks('path/to/my_file')
// => 'path\u200B/\u200Bto\u200B/\u200Bmy_file'
```

### URL is preserved intact

URLs are D0-protected spans — no ZWS is inserted inside or adjacent to them.

```ts
injectWordBreaks('https://example.com/foo/bar')
// => 'https://example.com/foo/bar'   (unchanged)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/injectWordBreaks.ts)
