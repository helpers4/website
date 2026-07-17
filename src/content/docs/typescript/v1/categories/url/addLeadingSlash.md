---
title: "addLeadingSlash"
sidebar:
  label: "addLeadingSlash"
---

Simple helper that adds a leading slash `/` if not yet present.

> Available since v1.0.1

## Import

```ts
import { addLeadingSlash } from '@helpers4/url';
```

## Signature

```ts
addLeadingSlash(url: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `string` | A valid URL. |

## Returns

`string` — The URL with a leading slash, unchanged if it already had one.

## Examples

### Add a missing leading slash

```ts
addLeadingSlash('your/path/without/leading/slash');
// => '/your/path/without/leading/slash'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/url/v/1.0.1)
