---
title: "obfuscate"
sidebar:
  label: "obfuscate"
description: "Hides a text from anything that reads the raw page source: the text is reversed (by Unicode code point, so emoji stay w…"
version: "3.1.9"
---

Hides a text from anything that reads the raw page source: the text is reversed (by Unicode
code point, so emoji stay whole) and written as unpadded base64url. Typical use: an e-mail
address rebuilt on click, so naive scrapers do not find it. deobfuscate reverses it.

It works the same in Node.js and in browsers (no `Buffer`, no `btoa`), for any text, non-ASCII
included. A lone surrogate, which is not valid text, comes back as U+FFFD.

**This is not security.** It only stops scrapers that look at the HTML as it is; anyone can undo
it. Never use it for secrets.

> Available since v3.1.9

## Import

```ts
import { obfuscate } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { obfuscate } from 'helpers4/string';
```

## Signature


```ts
obfuscate(text: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The text to hide |

## Returns

`string` — A base64url token, with no `=` padding

## Examples

### Hide an address from scrapers

Done at build time; the page holds the token, and the link is rebuilt on click. Not security.

```ts
obfuscate('me@example.com')
// => 'bW9jLmVscG1heGVAZW0'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/obfuscate.ts)
