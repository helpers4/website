---
title: "parseStrict"
sidebar:
  label: "parseStrict"
description: "Parses strict JSON (RFC 8259) — exactly what `JSON.parse` accepts, nothing more."
version: "3.1.7"
---

Parses strict JSON (RFC 8259) — exactly what `JSON.parse` accepts, nothing more.

**Accepts:** standard JSON only — double-quoted strings and keys, finite decimal numbers,
`true`/`false`/`null`, objects and arrays, surrounding whitespace.

**Rejects:** comments, trailing commas, single quotes, unquoted keys, hexadecimal numbers,
`NaN`/`Infinity`, a leading byte order mark (U+FEFF), and anything else that isn't strict JSON.

**On invalid input:** throws the native `SyntaxError` from `JSON.parse`.

Use it to validate input that must be strict JSON, e.g. an API payload. To also read config
files with comments or JSON5, use parse. To never throw, use safeParseStrict.

> Available since v3.1.3

## Import

```ts
import { parseStrict } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { parseStrict } from 'helpers4/json';
```

## Signature


```ts
parseStrict<T = unknown>(text: string): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON text to parse |

## Returns

`T` — The parsed value, typed as `T`

## Examples

### Parse strict JSON

Exactly what JSON.parse accepts, typed with a generic.

```ts
parseStrict<{ id: number }>('{"id":1}')
// => { id: 1 }
```

### Reject anything that is not strict JSON

Comments and trailing commas throw a SyntaxError: use it to validate an API payload.

```ts
parseStrict('{"id":1,}')
// throws SyntaxError
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/parseStrict.ts)
