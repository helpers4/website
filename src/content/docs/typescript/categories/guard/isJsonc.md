---
title: "isJsonc"
sidebar:
  label: "isJsonc"
description: "Checks whether a value is a string holding valid JSONC — JSON with comments and trailing commas, the dialect of `tsconf…"
version: "3.1.10"
---

Checks whether a value is a string holding valid JSONC — JSON with comments and trailing
commas, the dialect of `tsconfig.json` and VS Code's `settings.json`, also known as HuJSON or
JWCC (JSON With Commas and Comments).

Strict JSON is valid JSONC too, so this is `true` for everything isJSON accepts, plus
line and block comments, trailing commas before `}` and `]`, and a leading byte order mark.
JSON5 syntax isn't JSONC — use isJson5 for that (`parse` from `@helpers4/json` reads
both).

> Available since v3.1.3

## Import

```ts
import { isJsonc } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isJsonc } from 'helpers4/guard';
```

## Signature


```ts
isJsonc(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string holding JSON or JSONC

## Examples

### Check a JSONC string

Comments and trailing commas are fine; strict JSON is too.

```ts
isJsonc('{"a": 1, // note\n}') // => true
isJsonc('{"a": 1}')             // => true
```

### JSON5 is not JSONC

Single quotes and unquoted keys are rejected.

```ts
isJsonc("{'a': 1}") // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJsonc.ts)
