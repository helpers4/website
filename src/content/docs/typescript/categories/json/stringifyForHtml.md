---
title: "stringifyForHtml"
sidebar:
  label: "stringifyForHtml"
description: "Serializes a value to compact JSON that is safe to inline in an HTML page, typically in a `<script type=\"application/js…"
version: "3.1.9"
---

Serializes a value to compact JSON that is safe to inline in an HTML page, typically in a
`<script type="application/json">` block or a script assignment.

`<`, `>` and `&` are written as `\u003c`, `\u003e` and `\u0026`, so the text can never close
the script element (`</script>`), open a comment (`<!--`) or be read as an entity. U+2028 and
U+2029, valid in JSON but line terminators in some script contexts, are escaped too. These
characters can only appear inside JSON strings, so the escaped text parses back to exactly the
same value with `JSON.parse`.

It throws like stringify does (a `TypeError` for `undefined`, a function, a symbol, a
`BigInt` or a circular structure).

> Available since v3.1.5

## Import

```ts
import { stringifyForHtml } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { stringifyForHtml } from 'helpers4/json';
```

## Signature


```ts
stringifyForHtml(value: unknown): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to serialize |

## Returns

`string` — Compact JSON text with no raw `<`, `>`, `&`, U+2028 or U+2029

## Examples

### Inline data in a script block

A value containing </script> can no longer close the element it is embedded in.

```ts
stringifyForHtml({ note: '</script><b>' })
// => '{"note":"\\u003c/script\\u003e\\u003cb\\u003e"}'
```

### Same value after parsing

The escapes are plain JSON escapes: JSON.parse gives back the original value.

```ts
JSON.parse(stringifyForHtml({ a: '<&>' })).a
// => '<&>'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/stringifyForHtml.ts)
