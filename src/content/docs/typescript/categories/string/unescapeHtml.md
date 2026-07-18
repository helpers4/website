---
title: "unescapeHtml"
sidebar:
  label: "unescapeHtml"
---

Unescapes the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;`
back to `&`, `<`, `>`, `"`, and `'`.

This is the exact inverse of escapeHtml — it only recognizes the
five entities that function produces, not the full HTML entity set (no
`&nbsp;`, no numeric code points beyond `&#39;`, etc.).

> Available since v3.0.0

## Import

```ts
import { unescapeHtml } from '@helpers4/string';
```

## Signature


```ts
unescapeHtml(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to unescape |

## Returns

`string` — The unescaped string

## Examples

### Unescape HTML entities back to their original characters

Inverse of escapeHtml — turns &lt;, &gt;, &amp;, &quot;, &#39; back into < > & " '.

```ts
unescapeHtml('&lt;b&gt;bold&lt;/b&gt;')
// => '<b>bold</b>'
```

### Unrecognized entities are left untouched

Only the five entities escapeHtml produces are unescaped — not the full HTML entity set.

```ts
unescapeHtml('a&nbsp;b')
// => 'a&nbsp;b'  (unchanged)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/unescapeHtml.ts)
