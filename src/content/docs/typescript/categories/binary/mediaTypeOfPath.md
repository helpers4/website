---
title: "mediaTypeOfPath"
sidebar:
  label: "mediaTypeOfPath"
description: "Finds the media type of a file from the extension of its path or URL: images, fonts, web documents, scripts and styles,…"
version: "3.1.10"
---

Finds the media type of a file from the extension of its path or URL: images, fonts, web
documents, scripts and styles, data, audio and video. Case is ignored, and a query string or
fragment after the path is skipped. Pass it where a server or a `Blob` needs a `Content-Type`.

> Available since v3.1.10

## Import

```ts
import { mediaTypeOfPath } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { mediaTypeOfPath } from 'helpers4/binary';
```

## Signature


```ts
mediaTypeOfPath(path: string): string | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | `string` | A file path or URL |

## Returns

`string | undefined` — The media type (`'image/webp'`, ...), or `undefined` for an unknown or missing extension

## Examples

### Content-Type from a path

Case and a query string are ignored.

```ts
mediaTypeOfPath('/fonts/Inter.WOFF2?v=3') // => 'font/woff2'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/mediaTypeOfPath.ts)
