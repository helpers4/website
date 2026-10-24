---
title: "stringifySequence"
sidebar:
  label: "stringifySequence"
description: "Serializes values as a JSON text sequence (RFC 7464, `application/json-seq`): each value is written as the ASCII record…"
version: "3.1.7"
---

Serializes values as a JSON text sequence (RFC 7464, `application/json-seq`): each value is
written as the ASCII record separator (RS, U+001E), the compact JSON text, then `\n` — the
exact framing the RFC requires of encoders, as `jq --seq` writes it.

**Formatting:**
- default — each value compact, like `JSON.stringify(value)`
- `'canonical'` — each value as canonical JSON (RFC 8785): sorted keys, reproducible bytes

Indentation isn't offered, for symmetry with stringifyLines: the trailing `\n` is what
lets a reader detect a truncated top-level number, `true`, `false` or `null` (RFC 7464 §2.4).

**Output:** an empty array gives `''`.

**Throws** a `TypeError` when `values` isn't an array, or when one of them has no JSON
representation (`undefined`, a function, a symbol, a `BigInt`, a circular structure). With
`'canonical'`, also a `RangeError` on `NaN`, `±Infinity` or a lone surrogate (see
stringify).

> Available since v3.1.3

## Import

```ts
import { stringifySequence } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { stringifySequence } from 'helpers4/json';
```

## Signature


```ts
stringifySequence(values: readonly unknown[], formatting?: "canonical"): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | `readonly unknown[]` | The values to write, one per record |
| `formatting` | `"canonical"` | \`'canonical'\` for canonical JSON records; compact JSON by default *(optional)* |

## Returns

`string` — The JSON text sequence

## Examples

### Write a JSON text sequence

Each value is framed as RS, JSON text, line feed (RFC 7464).

```ts
stringifySequence([{ id: 1 }, 2])
// => '\u001E{"id":1}\n\u001E2\n'
```

### Canonical records

Each record in canonical form.

```ts
stringifySequence([{ b: 1, a: 2 }], 'canonical')
// => '\u001E{"a":2,"b":1}\n'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/stringifySequence.ts)
