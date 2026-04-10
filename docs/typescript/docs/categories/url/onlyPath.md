---
sidebar_label: "onlyPath"
---

# onlyPath

Extract only the path from an URI with optional query and fragments.

For example, all these parameters will return `/path`:
 - `/path`
 - `/path?query=thing`
 - `/path#fragment`
 - `/path?query=thing#fragment`

> Available since v1.0.0

## Import

```ts
import { onlyPath } from '@helpers4/url';
```

## Signature

```ts
onlyPath(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

`string` — The URL string without query and fragment, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Examples

### Extract the path from a URL

Strips query parameters and fragments from a URL path.

```ts
onlyPath('/path?query=thing#fragment')
// => '/path'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/onlyPath.ts)
