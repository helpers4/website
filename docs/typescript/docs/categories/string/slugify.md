---
sidebar_label: "slugify"
---

# slugify

Converts a string into a URL-friendly slug.

## Import

```ts
import { slugify } from '@helpers4/string';
```

## Signature

```ts
function slugify(str: string): string
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `str` | The string to convert into a slug. |

## Returns

A lowercase, hyphen-separated slug safe for URLs.

## Example

```ts
slugify('Hello World!');
// 'hello-world'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/slugify.ts)
