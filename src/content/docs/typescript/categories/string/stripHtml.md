---
title: "stripHtml"
sidebar:
  label: "stripHtml"
description: "Plain text of an HTML fragment: tags removed, `<script>`, `<style>` and comments dropped with their content, entities d…"
version: "3.1.4"
---

Plain text of an HTML fragment: tags removed, `<script>`, `<style>` and comments dropped
with their content, entities decoded (a common named subset, plus decimal and hex
numeric ones) and whitespace collapsed and trimmed. Block-level tags and `<br>` count as
a space, so `<p>a</p><p>b</p>` gives `a b`.

**Not a sanitizer**: this is for text extraction. Never use its output to make HTML safe,
use escapeHtml for that.

> Available since v3.1.4

## Import

```ts
import { stripHtml } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { stripHtml } from 'helpers4/string';
```

## Signature


```ts
stripHtml(html: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | `string` | The HTML fragment |

## Returns

`string` — The plain text

## Examples

### Plain text from HTML

Removes tags and decodes entities, including &nbsp; and numeric ones.

```ts
stripHtml('<p>Hello&nbsp;<b>world</b> &amp; co</p>')
// => 'Hello world & co'
```

### Block tags separate words

Paragraphs, list items and line breaks become a space so words do not stick together.

```ts
stripHtml('<ul><li>one</li><li>two</li></ul>')
// => 'one two'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/stripHtml.ts)
