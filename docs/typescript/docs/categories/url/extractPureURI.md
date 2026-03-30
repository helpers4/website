---
sidebar_label: "extractPureURI"
---

# extractPureURI

Extracts the pure URI from a URL by removing query parameters and fragments.

## Import

```ts
import { extractPureURI } from '@helpers4/url';
```

## Signature

```ts
function extractPureURI(url: string | undefined | null): string | undefined | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | The URL string to process |

## Returns

The URI without query parameters and fragments, or the original value if undefined/null

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/url/extractPureURI.ts)
