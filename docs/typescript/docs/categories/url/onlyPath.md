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

## Import

```ts
import { onlyPath } from '@helpers4/url';
```

## Signature

```ts
function onlyPath( url: string | undefined | null, ): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to be processed. Can be `string`, `undefined`, or `null`. |

## Returns

The URL string without query and fragment, or `undefined` if the input is `undefined`, or `null` if the input is `null`.

## Example

```ts
onlyPath('/path') // => '/path'
onlyPath('/path?query=thing') // => '/path'
onlyPath('/path#fragment') // => '/path'
onlyPath('/path?query=thing#fragment') // => '/path'
onlyPath(undefined) // => undefined
onlyPath(null) // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/onlyPath.ts)
