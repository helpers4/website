---
title: "safeParse"
sidebar:
  label: "safeParse"
description: "Parses JSON permissively like parse — strict JSON, JSONC (HuJSON, JWCC) and JSON5 — but returns `null` (or `fallback`)…"
version: "3.1.4"
---

Parses JSON permissively like parse — strict JSON, JSONC (HuJSON, JWCC) and JSON5 —
but returns `null` (or `fallback`) instead of throwing on invalid input.

**Accepts / rejects:** exactly what parse does — see there for the full list.

**On invalid input:** returns `fallback` when one is given — even `undefined`, which is told
apart from an omitted argument — and `null` otherwise. Never throws.

> Available since v3.1.3

## Import

```ts
import { safeParse } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { safeParse } from 'helpers4/json';
```

## Signature


```ts
safeParse<T = unknown>(text: string): T | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON, JSONC or JSON5 text to parse |

## Returns

`T | null` — The parsed value typed as `T`, or `fallback` on invalid input

## Examples

### Read JSONC or JSON5 without throwing

Same parsing as parse, but returns null on invalid input.

```ts
safeParse('{"a": 1, /* note */}') // => { a: 1 }
safeParse('{a: }')                // => null
```

### Fall back to defaults

Pass a fallback to get a usable value even when the file is broken.

```ts
safeParse('{ broken', {})
// => {}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/safeParse.ts)
