---
title: "isNdjson"
sidebar:
  label: "isNdjson"
description: "Checks whether a value is a string holding valid newline-delimited JSON — one strict JSON value per line, as NDJSON and…"
version: "3.1.4"
---

Checks whether a value is a string holding valid newline-delimited JSON — one strict JSON
value per line, as NDJSON and JSON Lines (`.jsonl`) both define it.

It accepts exactly what `@helpers4/json`'s `parseLines` accepts with its default options: blank
lines are tolerated (NDJSON allows them; JSON Lines doesn't), and an empty string is valid — it
holds zero values.

> Available since v3.1.3

## Import

```ts
import { isNdjson } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isNdjson } from 'helpers4/guard';
```

## Signature


```ts
isNdjson(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if `value` is a string that `parseLines` from `@helpers4/json` reads without error

## Examples

### Check newline-delimited JSON

One strict JSON value per line.

```ts
isNdjson('{"id":1}\n{"id":2}\n') // => true
```

### A value cannot span lines

Pretty-printed JSON is not NDJSON.

```ts
isNdjson('{\n  "id": 1\n}') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isNdjson.ts)
