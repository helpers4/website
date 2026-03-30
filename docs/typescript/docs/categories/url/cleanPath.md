---
sidebar_label: "cleanPath"
---

# cleanPath

Clean an URL by removing duplicate slashes.
The protocol part of the URL is not modified.

## Import

```ts
import { cleanPath } from '@helpers4/url';
```

## Signature

```ts
function cleanPath( url: string | undefined | null, ): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

The cleaned URL string, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Example

```ts
cleanPath('/path//to///resource') // => '/path/to/resource'
cleanPath('http://example.com//path//to///resource') // => 'http://example.com/path/to/resource'
cleanPath(undefined) // => undefined
cleanPath(null) // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/cleanPath.ts)
