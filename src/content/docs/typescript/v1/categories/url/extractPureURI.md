---
title: "extractPureURI"
sidebar:
  label: "extractPureURI"
---

Extracts only the URI from a path with optional query and fragments.

For example, all these inputs return `/path`:

- `/path`
- `/path?query=thing`
- `/path#fragment`
- `/path?query=thing#fragment`

> Available since v1.0.1

## Import

```ts
import { extractPureURI } from '@helpers4/url';
```

## Signature

```ts
extractPureURI(path: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | `string` | A complete path, without the server part. |

## Returns

`string` — The path without its query string or fragment.

## Examples

### Drop a query string

```ts
extractPureURI('https://www.google.com/?q=search');
// => 'https://www.google.com/'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/url/v/1.0.1)
