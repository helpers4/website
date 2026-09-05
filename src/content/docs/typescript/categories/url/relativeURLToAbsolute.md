---
title: "relativeURLToAbsolute"
sidebar:
  label: "relativeURLToAbsolute"
description: "Converts a relative URL to an absolute URL using the current document base URI."
version: "3.1.0"
---

Converts a relative URL to an absolute URL using the current document base URI.

> Available since v1.0.0

## Import

```ts
import { relativeURLToAbsolute } from '@helpers4/url';
// or, from the all-in-one package (same code, one install):
import { relativeURLToAbsolute } from 'helpers4/url';
```

## Signature


```ts
relativeURLToAbsolute(relativeUrl: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `relativeUrl` | `string` | The relative URL to convert |

## Returns

`string` — The absolute URL

## Examples

### Convert a relative URL to absolute

Prepends the base URI to a relative path, cleaning duplicate slashes.

```ts
relativeURLToAbsolute('/api/data')
// => 'http://localhost/api/data' (depends on document.baseURI)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/relativeURLToAbsolute.ts)
