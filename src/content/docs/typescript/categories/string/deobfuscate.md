---
title: "deobfuscate"
sidebar:
  label: "deobfuscate"
description: "Reverses obfuscate."
version: "3.1.9"
---

Reverses obfuscate. Never throws: a token that `obfuscate` could not have produced
(another alphabet, padding, broken length, bytes that are not UTF-8, not a string) gives `null`.

> Available since v3.1.9

## Import

```ts
import { deobfuscate } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { deobfuscate } from 'helpers4/string';
```

## Signature


```ts
deobfuscate(token: string): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | `string` | A token returned by obfuscate |

## Returns

`string | null` — The original text, or `null` for an invalid token

## Examples

### Rebuild the address in the browser

Reverses obfuscate, in Node.js and in browsers alike.

```ts
deobfuscate('bW9jLmVscG1heGVAZW0')
// => 'me@example.com'
```

### A bad token gives null

It never throws, so the caller just checks for null.

```ts
deobfuscate('not a token!')
// => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/deobfuscate.ts)
