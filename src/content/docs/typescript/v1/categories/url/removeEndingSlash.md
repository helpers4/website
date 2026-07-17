---
title: "removeEndingSlash"
sidebar:
  label: "removeEndingSlash"
---

Simple helper that removes an ending slash `/` if present.

> Available since v1.0.1

## Import

```ts
import { removeEndingSlash } from '@helpers4/url';
```

## Signature

```ts
removeEndingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | A valid URL. |

## Returns

`string` — The URL without its trailing slash.

## Examples

### Strip a trailing slash

```ts
removeEndingSlash('https://www.google.com/');
// => 'https://www.google.com'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/url/v/1.0.1)
