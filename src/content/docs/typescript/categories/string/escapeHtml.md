---
title: "escapeHtml"
sidebar:
  label: "escapeHtml"
---

Escapes the HTML special characters `&`, `<`, `>`, `"`, and `'` in a string.

Use this to safely embed untrusted content into HTML attribute values or
text nodes without risk of XSS injection.

> Available since v2.0.0

## Import

```ts
import { escapeHtml } from '@helpers4/string';
```

## Signature


```ts
escapeHtml(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to escape\. |

## Returns

`string` — The escaped string.

## Examples

### Escape script tags

Converts < > " ' & to their HTML entities to prevent XSS.

```ts
escapeHtml('<script>alert("xss")</script>')
// => '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```

### Safe interpolation in templates

Safe for inserting untrusted strings into HTML.

```ts
const userInput = '<b>bold</b>';
escapeHtml(userInput) // => '&lt;b&gt;bold&lt;/b&gt;'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/escapeHtml.ts)
