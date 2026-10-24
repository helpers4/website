---
title: "isIJson"
sidebar:
  label: "isIJson"
description: "Checks whether a value is a string holding I-JSON (RFC 7493, the Internet JSON message format): strict JSON that every…"
version: "3.1.7"
---

Checks whether a value is a string holding I-JSON (RFC 7493, the Internet JSON message
format): strict JSON that every JSON implementation reads the same way.

On top of strict JSON (see isJSON), I-JSON rejects what `JSON.parse` silently accepts
but loses or reads inconsistently:
- duplicate keys in an object (`JSON.parse` keeps the last one; other parsers don't)
- a string or key holding a lone surrogate (`"\uD800"`) or a Unicode noncharacter (`"\uFFFF"`)
- a number beyond the range of a double (`1e400`), more precise than a double holds (more than
  17 significant digits, or a non-zero value that rounds to `0`), or an integer outside
  +/-(2^53 - 1)

RFC 7493 also recommends (but doesn't require) an object or an array at the top level — this
guard accepts any value there.

> Available since v3.1.3

## Import

```ts
import { isIJson } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isIJson } from 'helpers4/guard';
```

## Signature


```ts
isIJson(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string holding I-JSON

## Examples

### Check an I-JSON message

Strict JSON that every implementation reads the same way.

```ts
isIJson('{"id":1,"name":"app"}') // => true
```

### Catch what JSON.parse silently loses

JSON.parse keeps the last duplicate key and rounds big integers; I-JSON rejects both.

```ts
isIJson('{"id":1,"id":2}')  // => false
isIJson('9007199254740993') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isIJson.ts)
