---
title: "isJson5"
sidebar:
  label: "isJson5"
description: "Checks whether a value is a string holding valid JSON5 (JSON5 1.0.0) — JSON with comments, trailing commas, unquoted ke…"
version: "3.1.6"
---

Checks whether a value is a string holding valid JSON5 (JSON5 1.0.0) — JSON with comments,
trailing commas, unquoted keys, single-quoted strings, hexadecimal numbers, `Infinity`/`NaN`
and more.

JSON5 is a superset of JSONC, itself a superset of JSON, so this is `true` for everything
isJSON and isJsonc accept. It accepts exactly what `parse` from
`@helpers4/json` accepts — see there for the full list.

> Available since v3.1.3

## Import

```ts
import { isJson5 } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isJson5 } from 'helpers4/guard';
```

## Signature


```ts
isJson5(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string holding JSON5

## Examples

### Check a JSON5 string

Unquoted keys, single quotes, hexadecimal numbers and trailing commas are JSON5.

```ts
isJson5("{ name: 'app', retries: 0x3, }") // => true
```

### Keys that are not identifiers need quotes

A dash is not allowed in an unquoted key.

```ts
isJson5('{ my-key: 1 }')   // => false
isJson5('{ "my-key": 1 }') // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJson5.ts)
