---
title: "safeParseStrict"
sidebar:
  label: "safeParseStrict"
description: "Parses strict JSON like parseStrict, but returns `null` (or `fallback`) instead of throwing on invalid input."
version: "3.1.5"
---

Parses strict JSON like parseStrict, but returns `null` (or `fallback`) instead of
throwing on invalid input.

**Accepts / rejects:** exactly what parseStrict does — standard JSON only, no comments,
no trailing commas, no JSON5 syntax, no leading byte order mark.

**On invalid input:** returns `fallback` when one is given — even `undefined`, which is told
apart from an omitted argument — and `null` otherwise. Never throws.

> Available since v3.1.3

## Import

```ts
import { safeParseStrict } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { safeParseStrict } from 'helpers4/json';
```

## Signature


```ts
safeParseStrict<T = unknown>(text: string): T | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON text to parse |

## Returns

`T | null` — The parsed value typed as `T`, or `null` on invalid input (pass a `fallback` to get it instead)

## Examples

### Parse without throwing

Returns null instead of throwing on invalid input.

```ts
safeParseStrict('{"id":1}')  // => { id: 1 }
safeParseStrict('{"id":1,}') // => null
```

### Provide a fallback

The fallback is returned on invalid input, so the result is never null.

```ts
safeParseStrict('oops', { id: 0 })
// => { id: 0 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/safeParseStrict.ts)
