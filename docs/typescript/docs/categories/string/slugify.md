---
sidebar_label: "slugify"
---

# slugify

Converts a string into a URL-friendly slug.

> Available since v2.0.0

## Import

```ts
import { slugify } from '@helpers4/string';
```

## Signature

```ts
slugify(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert into a slug. |

## Returns

`string` — A lowercase, hyphen-separated slug safe for URLs.

## Examples

### Create a URL-safe slug

Converts a string into a lowercase, hyphen-separated slug.

```ts
slugify('Hello World!')
// => 'hello-world'
```

### Handle accented characters

Normalizes Unicode characters and strips diacritics.

```ts
slugify('Crème brûlée')
// => 'creme-brulee'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/slugify.ts)
