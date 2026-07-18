---
title: "removeDiacritics"
sidebar:
  label: "removeDiacritics"
---

Removes diacritical marks (accents) from a string, e.g. `'café'` → `'cafe'`.

Works by Unicode-decomposing each character into its base letter plus
combining marks (`'é'` → `'e'` + a combining acute accent), then
stripping the marks. Same technique already used internally by `slugify`.

> Available since v3.0.0

## Import

```ts
import { removeDiacritics } from '@helpers4/string';
```

## Signature


```ts
removeDiacritics(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to strip diacritics from |

## Returns

`string` — The string with diacritics removed

## Examples

### Strip accents from a string

Useful for accent-insensitive search or generating ASCII-safe identifiers.

```ts
removeDiacritics('café')
// => 'cafe'
```

### Plain ASCII text is left unchanged

Only characters with combining diacritical marks are affected.

```ts
removeDiacritics('hello world')
// => 'hello world'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/removeDiacritics.ts)
