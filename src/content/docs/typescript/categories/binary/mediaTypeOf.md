---
title: "mediaTypeOf"
sidebar:
  label: "mediaTypeOf"
description: "Finds the media type of an image from its first bytes (its magic number), whatever its name says: PNG, JPEG, GIF, WebP,…"
version: "3.1.10"
---

Finds the media type of an image from its first bytes (its magic number), whatever its name
says: PNG, JPEG, GIF, WebP, AVIF and SVG. SVG has no magic number, so it is recognized as text
whose first element is `<svg`, possibly after a byte order mark, whitespace, an XML
declaration, comments or a doctype.

> Available since v3.1.10

## Import

```ts
import { mediaTypeOf } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { mediaTypeOf } from 'helpers4/binary';
```

## Signature


```ts
mediaTypeOf(bytes: Uint8Array): string | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `Uint8Array` | The start of the file: 512 bytes are enough for every type but a long SVG prolog |

## Returns

`string | undefined` — The media type (`'image/png'`, ...), or `undefined` when it is none of these

## Examples

### Sniff an image

The first bytes tell the format, whatever the file is called.

```ts
mediaTypeOf(new Uint8Array([0xff, 0xd8, 0xff, 0xe0])) // => 'image/jpeg'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/mediaTypeOf.ts)
