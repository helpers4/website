---
title: "fromBase64"
sidebar:
  label: "fromBase64"
description: "Decodes Base64 text."
version: "3.1.9"
---

Decodes Base64 text. Both alphabets are accepted (`+/` and the URL-safe `-_`) and the `=`
padding is optional, so it reads whatever toBase64 wrote, and most Base64 found in the wild.

> Available since v3.1.8

## Import

```ts
import { fromBase64 } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { fromBase64 } from 'helpers4/string';
```

## Signature


```ts
fromBase64(text: string, options: FromBase64Options & object): Uint8Array
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The Base64 text, without whitespace |
| `options` | `FromBase64Options & object` | \`\{ output: 'bytes' \}\` to get a \`Uint8Array\` instead of a string |

## Returns

`Uint8Array` — The decoded text (UTF-8), or the bytes

## Examples

### Decode Base64 to text

Either alphabet is accepted and the padding is optional.

```ts
fromBase64('aMOpbGxv')
// => 'héllo'
```

### Decode to raw bytes

Use output: bytes when the payload is not text.

```ts
fromBase64('-_8', { output: 'bytes' })
// => Uint8Array [251, 255]
```

## Related Types

### `FromBase64Options`

Options for fromBase64.

```ts
interface FromBase64Options {
  output?: "string" | "bytes";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/fromBase64.ts)
