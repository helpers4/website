---
sidebar_label: "cleanPath"
---

# cleanPath

Clean an URL by removing duplicate slashes.
The protocol part of the URL is not modified.

> Available since v1.0.0

## Import

```ts
import { cleanPath } from '@helpers4/url';
```

## Signature


```ts
cleanPath(url: string | null | undefined): string | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string \| null \| undefined` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string | null | undefined` — The cleaned URL string, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Remove duplicate slashes

Cleans an URL by removing duplicate slashes while preserving the protocol.

```ts
cleanPath('/path//to///resource')
// => '/path/to/resource'
```

### Preserve protocol

The double slash after the protocol (http://) is not modified.

```ts
cleanPath('http://example.com//path')
// => 'http://example.com/path'
```

### Handle null and undefined

Returns null for null input and undefined for undefined input.

```ts
cleanPath(null)      // => null
cleanPath(undefined) // => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/cleanPath.ts)
