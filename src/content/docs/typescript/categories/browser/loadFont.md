---
title: "loadFont"
sidebar:
  label: "loadFont"
description: "Loads a font and registers it in `document.fonts`, so CSS and canvas can use `family` right away."
version: "3.1.5"
---

Loads a font and registers it in `document.fonts`, so CSS and canvas can use `family` right
away.

`source` is either a URL (wrapped in `url()` for you) or the font file's bytes. Outside a
browser (no `FontFace`), it rejects with a `TypeError`.

> Available since v3.1.5

## Import

```ts
import { loadFont } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { loadFont } from 'helpers4/browser';
```

## Signature


```ts
loadFont(family: string, source: string | BufferSource, descriptors?: FontFaceDescriptors): Promise<FontFace>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `family` | `string` | The family name CSS will use, e\.g\. \`'Inter'\` |
| `source` | `string \| BufferSource` | The font URL, or its bytes |
| `descriptors` | `FontFaceDescriptors` | \`weight\`, \`style\`, \`unicodeRange\`, \.\.\. as in a CSS \`@font\-face\` rule *(optional)* |

## Returns

`Promise<FontFace>` — The loaded `FontFace`

## Examples

### Load a web font before drawing text

The font is registered in document.fonts, so CSS and canvas can use it right away.

```ts
await loadFont('Inter', '/fonts/Inter-Bold.woff2', { weight: '700' });
context.font = '700 16px Inter';
```

### Load embedded font bytes

Pass the bytes of a font file extracted from an archive or a design file.

```ts
await loadFont('Embedded', await file.arrayBuffer());
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/loadFont.ts)
