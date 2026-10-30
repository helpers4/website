---
title: "pickClosest"
sidebar:
  label: "pickClosest"
description: "Picks the face that CSS would use for a request, among the faces of one family: the CSS Fonts Level 4 matching algorith…"
version: "3.1.10"
---

Picks the face that CSS would use for a request, among the faces of one family: the CSS Fonts
Level 4 matching algorithm (§5.2), as a pure function. The stretch is matched first, then the
style, then the weight; each step keeps only the faces closest to what was asked.

- Stretch: at or below 100, narrower faces first (nearest), then wider ones; above 100, the other way round.
- Style: `normal` prefers normal, then oblique, then italic; `italic` prefers italic, then oblique, then
  normal; `oblique` prefers oblique, then italic, then normal.
- Weight: from 400 to 500, the nearest heavier weight up to 500, then lighter ones, then heavier ones
  above 500; below 400, lighter first then heavier; above 500, heavier first then lighter.

> Available since v3.1.8

## Import

```ts
import { pickClosest } from '@helpers4/font';
// or, from the all-in-one package (same code, one install):
import { pickClosest } from 'helpers4/font';
```

## Signature


```ts
pickClosest<T extends FontFaceDescriptor>(faces: readonly T[], wanted: FontFaceDescriptor): T | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `faces` | `readonly T[]` | The faces of one family, for instance the entries of a font catalogue |
| `wanted` | `FontFaceDescriptor` | What was asked; each missing property is its CSS initial value |

## Returns

`T | undefined` — The closest face, the first one when several are equally close, or `undefined` for no face

## Examples

### Pick the face for a weight that is not available

Above 500, CSS goes to the next heavier face before any lighter one.

```ts
const faces = [{ weight: 300 }, { weight: 400 }, { weight: 700 }];
pickClosest(faces, { weight: 600 })
// => { weight: 700 }
```

### Ask for an italic, with a fallback

Without an italic face, oblique is tried, then normal, as in a browser.

```ts
pickClosest([{ weight: 400 }, { weight: 400, style: 'oblique' }], { style: 'italic' })
// => { weight: 400, style: 'oblique' }
```

## Related Types

### `FontFaceDescriptor`

The properties of a font face that CSS font matching compares.

```ts
interface FontFaceDescriptor {
  stretch?: number;
  style?: "normal" | "italic" | "oblique";
  weight?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/font/pickClosest.ts)
