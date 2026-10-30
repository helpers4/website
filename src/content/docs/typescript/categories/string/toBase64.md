---
title: "toBase64"
sidebar:
  label: "toBase64"
description: "Encodes a string (as UTF-8) or raw bytes to Base64, without relying on `btoa` or `Buffer`, so it behaves the same in a…"
version: "3.1.10"
---

Encodes a string (as UTF-8) or raw bytes to Base64, without relying on `btoa` or `Buffer`, so it
behaves the same in a browser, Node.js and GJS.

> Available since v3.1.8

## Import

```ts
import { toBase64 } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { toBase64 } from 'helpers4/string';
```

## Signature


```ts
toBase64(input: string | Uint8Array<ArrayBufferLike>, options: ToBase64Options): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string \| Uint8Array<ArrayBufferLike>` | The text to encode as UTF\-8, or the bytes to encode as they are |
| `options` | `ToBase64Options` | The URL\-safe alphabet and the padding — see ToBase64Options |

## Returns

`string` — The Base64 text

## Examples

### Encode text as UTF-8 Base64

Non-ASCII text is encoded as UTF-8 first, so it round-trips with fromBase64.

```ts
toBase64('héllo')
// => 'aMOpbGxv'
```

### URL-safe variant for tokens and URLs

Uses - and _ and drops the padding, ready for a query string or a JWT-like token.

```ts
toBase64(new Uint8Array([251, 255]), { urlSafe: true })
// => '-_8'
```

## Related Types

### `ToBase64Options`

Options for toBase64.

```ts
interface ToBase64Options {
  padding?: boolean;
  urlSafe?: boolean;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/toBase64.ts)
