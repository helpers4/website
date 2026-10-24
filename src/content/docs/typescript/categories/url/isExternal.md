---
title: "isExternal"
sidebar:
  label: "isExternal"
description: "Whether a link points to another origin than `base`: an absolute `http(s)` URL or a protocol-relative one (`//host/path…"
version: "3.1.7"
---

Whether a link points to another origin than `base`: an absolute `http(s)` URL or a
protocol-relative one (`//host/path`). Paths, anchors, query strings and non-HTTP schemes
(`mailto:`, `tel:`) are never external.

Without `base`, any absolute or protocol-relative URL counts as external. With a `base`,
a link to the same origin is internal. An unparseable URL or `base` gives `false`.

> Available since v3.1.4

## Import

```ts
import { isExternal } from '@helpers4/url';
// or, from the all-in-one package (same code, one install):
import { isExternal } from 'helpers4/url';
```

## Signature


```ts
isExternal(url: string, base?: string | URL): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The link to check |
| `base` | `string \| URL` | The current origin or page URL to compare with \(optional\) *(optional)* |

## Returns

`boolean` — `true` if the link leaves the origin, `false` otherwise

## Examples

### Open external links in a new tab

Compares the link with the current origin: same-origin absolute links stay internal.

```ts
isExternal('https://github.com/helpers4', 'https://helpers4.dev')
// => true
isExternal('https://helpers4.dev/docs', 'https://helpers4.dev')
// => false
```

### Paths and non-HTTP schemes

Relative paths, anchors, mailto: and tel: are never external; protocol-relative URLs are.

```ts
isExternal('/docs')                 // => false
isExternal('mailto:hi@example.com') // => false
isExternal('//cdn.example.com/a.js') // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/isExternal.ts)
