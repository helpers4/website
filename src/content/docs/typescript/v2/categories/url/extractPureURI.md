---
title: "extractPureURI"
sidebar:
  label: "extractPureURI"
---

Extracts the pure URI from a URL by removing query parameters and fragments.

> Available since v1.9.0

## Import

```ts
import { extractPureURI } from '@helpers4/url';
```

## Signature


```ts
extractPureURI(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to process |

## Returns

`string` — The URI without query parameters and fragments, or the original value if undefined/null

## Examples

### Remove query parameters and fragments

Strips everything after ? or # from the URL.

```ts
extractPureURI('https://example.com/path?query=1#section')
// => 'https://example.com/path'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/url/extractPureURI.ts)
