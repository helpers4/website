---
sidebar_label: "withLeadingSlash"
---

# withLeadingSlash

Adds a leading slash `/` to the given URL if it is not already present.

This function is useful for ensuring that URLs are properly formatted
with a leading slash, which is often required in web development for
consistency and to avoid issues with relative paths.

## Import

```ts
import { withLeadingSlash } from '@helpers4/url';
```

## Signature

```ts
function withLeadingSlash( url: string | undefined | null, ): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

The URL string with a leading slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Example

```ts
withLeadingSlash('') // => '/'
withLeadingSlash('no/slash') // => '/no/slash'
withLeadingSlash('/already/has/slash') // => '/already/has/slash'
withLeadingSlash(undefined) // => undefined
withLeadingSlash(null) // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/withLeadingSlash.ts)
