---
title: "relativeURLToAbsolute"
sidebar:
  label: "relativeURLToAbsolute"
description: "Converts a relative URL to an absolute URL, using `base` when given, or else the current document base URI (and the win…"
version: "3.1.9"
---

Converts a relative URL to an absolute URL, using `base` when given, or else the current
document base URI (and the window origin when the document has none).

Works outside a browser as long as `base` is passed; without `base` and without a document it
throws a `TypeError`, since there is nothing to resolve against.

> Available since v1.0.0

## Import

```ts
import { relativeURLToAbsolute } from '@helpers4/url';
// or, from the all-in-one package (same code, one install):
import { relativeURLToAbsolute } from 'helpers4/url';
```

## Signature


```ts
relativeURLToAbsolute(relativeUrl: string, base?: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `relativeUrl` | `string` | The relative URL to convert |
| `base` | `string` | The URL to resolve against\. Defaults to the document base URI\. *(optional)* |

## Returns

`string` — The absolute URL

## Examples

### Convert a relative URL to absolute

Prepends the base URI to a relative path, cleaning duplicate slashes.

```ts
relativeURLToAbsolute('/api/data')
// => 'http://localhost/api/data' (depends on document.baseURI)
```

### Resolve against an explicit base, with no browser

Pass a base to use it in Node.js or during server-side rendering.

```ts
relativeURLToAbsolute('/api/data', 'https://example.com')
// => 'https://example.com/api/data'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/relativeURLToAbsolute.ts)
