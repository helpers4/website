---
title: "withoutTrailingSlash"
sidebar:
  label: "withoutTrailingSlash"
---

Removes the trailing slash `/` from the given URL if it is present.

This function is useful for ensuring that URLs are properly formatted
without a trailing slash, which is often required in web development for
consistency and to avoid issues with relative paths.

> Available since v1.0.0

## Import

```ts
import { withoutTrailingSlash } from '@helpers4/url';
```

## Signature


```ts
withoutTrailingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string` — The URL string without a trailing slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Remove trailing slash

Strips the trailing slash from a URL path.

```ts
withoutTrailingSlash('path/to/resource/')
// => 'path/to/resource'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/url/withoutTrailingSlash.ts)
