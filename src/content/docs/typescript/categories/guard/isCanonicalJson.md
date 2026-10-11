---
title: "isCanonicalJson"
sidebar:
  label: "isCanonicalJson"
description: "Checks whether a value is a string that is already canonical JSON (RFC 8785, JSON Canonicalization Scheme) — byte for b…"
version: "3.1.3"
---

Checks whether a value is a string that is already canonical JSON (RFC 8785, JSON
Canonicalization Scheme) — byte for byte what `stringify(value, 'canonical')` from
`@helpers4/json` would write for the value it holds.

That means: no whitespace outside strings, object keys sorted by UTF-16 code units, no
duplicate keys, numbers in their shortest ECMAScript form (`1`, not `1.0` or `1e0`), strings
with only the escapes `JSON.stringify` uses, and no number beyond what a double holds exactly.

> Available since v3.1.3

## Import

```ts
import { isCanonicalJson } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isCanonicalJson } from 'helpers4/guard';
```

## Signature


```ts
isCanonicalJson(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string in canonical JSON form

## Examples

### Check canonical JSON

Sorted keys, no whitespace, shortest numbers (RFC 8785).

```ts
isCanonicalJson('{"a":1,"b":2}') // => true
```

### Valid JSON is not always canonical

Unsorted keys, whitespace or 1.0 instead of 1 all fail.

```ts
isCanonicalJson('{"b":2,"a":1}') // => false
isCanonicalJson('1.0')           // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isCanonicalJson.ts)
