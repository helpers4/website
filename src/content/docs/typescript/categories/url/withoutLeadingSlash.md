---
title: "withoutLeadingSlash"
sidebar:
  label: "withoutLeadingSlash"
---

# withoutLeadingSlash

Removes the leading slash `/` from the given URL if it is present.

This function is useful for ensuring that URLs are properly formatted
without a leading slash, which is often required in web development for
consistency and to avoid issues with relative paths.

> Available since v1.0.0

## Import

```ts
import { withoutLeadingSlash } from '@helpers4/url';
```

## Signature


```ts
withoutLeadingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string` — The URL string without a leading slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Remove leading slash

Strips the leading slash from a URL path.

```ts
withoutLeadingSlash('/path/to/resource')
// => 'path/to/resource'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/withoutLeadingSlash.ts)
