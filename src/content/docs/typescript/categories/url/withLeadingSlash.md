---
title: "withLeadingSlash"
sidebar:
  label: "withLeadingSlash"
---

# withLeadingSlash

Adds a leading slash `/` to the given URL if it is not already present.

This function is useful for ensuring that URLs are properly formatted
with a leading slash, which is often required in web development for
consistency and to avoid issues with relative paths.

> Available since v1.0.0

## Import

```ts
import { withLeadingSlash } from '@helpers4/url';
```

## Signature


```ts
withLeadingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string` — The URL string with a leading slash, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Add a leading slash

Ensures the URL starts with a forward slash.

```ts
withLeadingSlash('path/to/resource')
// => '/path/to/resource'
```

### Already has leading slash

Does not add a duplicate slash.

```ts
withLeadingSlash('/already/has/slash')
// => '/already/has/slash'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/withLeadingSlash.ts)
