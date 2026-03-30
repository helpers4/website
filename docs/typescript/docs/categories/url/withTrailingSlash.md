---
sidebar_label: "withTrailingSlash"
---

# withTrailingSlash

Adds a trailing slash `/` to the given URL if it is not already present.

This function is useful for ensuring that URLs are properly formatted
with a trailing slash, which is often required in web development for
consistency and to avoid issues with relative paths.

## Import

```ts
import { withTrailingSlash } from '@helpers4/url';
```

## Signature

```ts
function withTrailingSlash( url: string | undefined | null, ): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

The URL string with a trailing slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Example

```ts
withTrailingSlash('') // => '/'
withTrailingSlash('no/slash') // => 'no/slash/'
withTrailingSlash('already/has/slash/') // => 'already/has/slash/'
withTrailingSlash(undefined) // => undefined
withTrailingSlash(null) // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/withTrailingSlash.ts)
