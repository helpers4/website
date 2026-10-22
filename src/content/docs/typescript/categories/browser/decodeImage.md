---
title: "decodeImage"
sidebar:
  label: "decodeImage"
description: "Loads an image and waits until it is decoded, so it can be painted without a flash or a decoding pause (e.g."
version: "3.1.5"
---

Loads an image and waits until it is decoded, so it can be painted without a flash or a
decoding pause (e.g. before swapping screens).

Outside a browser (no `Image`), it rejects with a `TypeError`.

> Available since v3.1.5

## Import

```ts
import { decodeImage } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { decodeImage } from 'helpers4/browser';
```

## Signature


```ts
decodeImage(src: string): Promise<HTMLImageElement>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `src` | `string` | The image URL |

## Returns

`Promise<HTMLImageElement>` — The decoded image element

## Examples

### Swap screens without a flash

Insert the image only once it is decoded.

```ts
const image = await decodeImage('/screens/home.png');
container.replaceChildren(image);
```

### Handle a broken image

A missing or corrupt image rejects, so it can be replaced by a placeholder.

```ts
const image = await decodeImage(url).catch(() => placeholder);
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/decodeImage.ts)
