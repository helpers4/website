---
title: "withTrailingSlash"
sidebar:
  label: "withTrailingSlash"
---

Adds a trailing slash `/` to the given URL if it is not already present.

This function is useful for ensuring that URLs are properly formatted
with a trailing slash, which is often required in web development for
consistency and to avoid issues with relative paths.

> Available since v1.0.0

## Import

```ts
import { withTrailingSlash } from '@helpers4/url';
```

## Signature


```ts
withTrailingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string` — The URL string with a trailing slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Add a trailing slash

Ensures the URL ends with a forward slash.

```ts
withTrailingSlash('path/to/resource')
// => 'path/to/resource/'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/url/withTrailingSlash.ts)
