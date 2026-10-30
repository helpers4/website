---
title: "preloadImages"
sidebar:
  label: "preloadImages"
description: "Loads and decodes several images with decodeImage, a few at a time, with `mapSettled` from `helpers4/array`."
version: "3.1.10"
---

Loads and decodes several images with decodeImage, a few at a time, with
`mapSettled` from `helpers4/array`.

It never rejects: an image that fails does not stop the others, and its result says why.

> Available since v3.1.5

## Import

```ts
import { preloadImages } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { preloadImages } from 'helpers4/browser';
```

## Signature


```ts
preloadImages(urls: readonly string[], options: PreloadImagesOptions): Promise<PromiseSettledResult<HTMLImageElement>[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `urls` | `readonly string[]` | The image URLs |
| `options` | `PreloadImagesOptions` | Concurrency — see PreloadImagesOptions |

## Returns

`Promise<PromiseSettledResult<HTMLImageElement>[]>` — One result per URL, in the same order

## Examples

### Preload the next screens

Each URL gets its own result, like Promise.allSettled: a broken image does not stop the others.

```ts
const results = await preloadImages(['/screens/a.png', '/screens/b.png']);
const failed = results.filter((result) => result.status === 'rejected');
```

### Limit concurrent downloads

concurrency caps how many images load at the same time (6 by default).

```ts
await preloadImages(thumbnails, { concurrency: 2 });
```

## Related Types

### `PreloadImagesOptions`

Options for preloadImages.

```ts
interface PreloadImagesOptions {
  concurrency?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/preloadImages.ts)
