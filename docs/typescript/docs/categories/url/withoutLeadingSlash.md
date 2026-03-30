---
sidebar_label: "withoutLeadingSlash"
---

# withoutLeadingSlash

Removes the leading slash `/` from the given URL if it is present.

This function is useful for ensuring that URLs are properly formatted
without a leading slash, which is often required in web development for
consistency and to avoid issues with relative paths.

## Import

```ts
import { withoutLeadingSlash } from '@helpers4/url';
```

## Signature

```ts
function withoutLeadingSlash( url: string | undefined | null, ): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

The URL string without a leading slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Example

```ts
withoutLeadingSlash('') // => ''
withoutLeadingSlash('/') // => ''
withoutLeadingSlash('/no/slash') // => 'no/slash'
withoutLeadingSlash('already/has/slash') // => 'already/has/slash'
withoutLeadingSlash(undefined) // => undefined
withoutLeadingSlash(null) // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/withoutLeadingSlash.ts)
