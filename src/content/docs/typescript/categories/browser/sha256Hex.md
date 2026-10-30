---
title: "sha256Hex"
sidebar:
  label: "sha256Hex"
description: "The SHA-256 digest of some data as a hexadecimal string, optionally cut short: a compact content key, not a security ch…"
version: "3.1.10"
---

The SHA-256 digest of some data as a hexadecimal string, optionally cut short: a compact
content key, not a security check (a short prefix is easy to collide).

Outside a runtime with Web Crypto (`crypto.subtle`), it rejects with a `TypeError`.

> Available since v3.1.10

## Import

```ts
import { sha256Hex } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { sha256Hex } from 'helpers4/browser';
```

## Signature


```ts
sha256Hex(data: BufferSource, length: number): Promise<string>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `BufferSource` | The data to hash |
| `length` | `number` | How many hex digits to keep, from \`1\` to \`64\`\. Defaults to \`16\` |

## Returns

`Promise<string>` — The first `length` digits of the digest, in lowercase

## Examples

### Content key

A short prefix of the digest names a piece of content.

```ts
await sha256Hex(new TextEncoder().encode('abc'), 8) // => 'ba7816bf'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/sha256Hex.ts)
