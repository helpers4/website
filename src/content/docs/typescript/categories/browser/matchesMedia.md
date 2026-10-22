---
title: "matchesMedia"
sidebar:
  label: "matchesMedia"
description: "Whether the document currently matches a CSS media query."
version: "3.1.5"
---

Whether the document currently matches a CSS media query.

Outside a browser (no `matchMedia`, e.g. during server-side rendering), it returns `false`.

> Available since v3.1.5

## Import

```ts
import { matchesMedia } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { matchesMedia } from 'helpers4/browser';
```

## Signature


```ts
matchesMedia(query: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `string` | A media query, e\.g\. \`'\(min\-width: 600px\)'\` |

## Returns

`boolean` — `true` if the query matches now

## Examples

### Read a media query

Returns whether the document matches the query right now.

```ts
const dark = matchesMedia('(prefers-color-scheme: dark)');
```

### Safe during server-side rendering

Without matchMedia (Node.js, a build step), it returns false instead of throwing.

```ts
// on the server
matchesMedia('(min-width: 600px)') // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/matchesMedia.ts)
