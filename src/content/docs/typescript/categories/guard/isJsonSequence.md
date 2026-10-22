---
title: "isJsonSequence"
sidebar:
  label: "isJsonSequence"
description: "Checks whether a value is a string holding a valid JSON text sequence (RFC 7464, `application/json-seq`): records that…"
version: "3.1.5"
---

Checks whether a value is a string holding a valid JSON text sequence (RFC 7464,
`application/json-seq`): records that each start with the record separator (U+001E) and hold
one complete, strict JSON text.

It accepts exactly what `@helpers4/json`'s `parseSequence` accepts with its default options —
every record must be valid, including the RFC's check that a top-level number, `true`, `false`
or `null` is followed by whitespace. An empty string is valid: it holds zero records.

> Available since v3.1.3

## Import

```ts
import { isJsonSequence } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isJsonSequence } from 'helpers4/guard';
```

## Signature


```ts
isJsonSequence(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string that `parseSequence` from `@helpers4/json` reads without error

## Examples

### Check a JSON text sequence

Records framed by the record separator U+001E.

```ts
isJsonSequence('\u001E{"id":1}\n') // => true
```

### Detect a truncated number

RFC 7464 treats a top-level number without trailing whitespace as possibly truncated.

```ts
isJsonSequence('\u001E12') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJsonSequence.ts)
