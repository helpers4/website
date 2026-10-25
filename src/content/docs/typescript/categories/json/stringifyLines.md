---
title: "stringifyLines"
sidebar:
  label: "stringifyLines"
description: "Serializes values as newline-delimited JSON — one compact JSON value per line, each followed by `\\n`."
version: "3.1.9"
---

Serializes values as newline-delimited JSON — one compact JSON value per line, each followed
by `\n`. The output is both NDJSON and JSON Lines (`.jsonl`), which are the same format.

**Formatting:**
- default — each value compact, like `JSON.stringify(value)`
- `'canonical'` — each value as canonical JSON (RFC 8785): sorted keys, reproducible bytes, for
  hashing or diffing logs line by line

Indentation isn't available: a line break inside a value would split it across lines. String
values can't break a line either — `JSON.stringify` escapes `\n` and `\r` inside them.

**Output:** every value is followed by `\n`, including the last one (NDJSON requires it, and
JSON Lines recommends it, so files can be concatenated). An empty array gives `''`.

**Throws** a `TypeError` when `values` isn't an array, or when one of them has no JSON
representation (`undefined`, a function, a symbol, a `BigInt`, a circular structure) — rather
than writing a line that would read back as something else. With `'canonical'`, also a
`RangeError` on `NaN`, `±Infinity` or a lone surrogate (see stringify).

> Available since v3.1.3

## Import

```ts
import { stringifyLines } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { stringifyLines } from 'helpers4/json';
```

## Signature


```ts
stringifyLines(values: readonly unknown[], formatting?: "canonical"): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | `readonly unknown[]` | The values to write, one per line |
| `formatting` | `"canonical"` | \`'canonical'\` for canonical JSON lines; compact JSON by default *(optional)* |

## Returns

`string` — The newline-delimited JSON text

## Examples

### Write NDJSON / JSON Lines

One compact value per line, each followed by a line break.

```ts
stringifyLines([{ id: 1 }, { id: 2 }])
// => '{"id":1}\n{"id":2}\n'
```

### Canonical lines

Each line in canonical form, so a log can be hashed or diffed line by line.

```ts
stringifyLines([{ b: 1, a: 2 }], 'canonical')
// => '{"a":2,"b":1}\n'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/stringifyLines.ts)
