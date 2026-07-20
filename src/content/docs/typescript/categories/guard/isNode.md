---
title: "isNode"
sidebar:
  label: "isNode"
---

Checks whether the code is currently running in a Node.js-like environment
(`process.versions.node` is defined — also true in Electron's Node context).

Note: some hybrid test environments (e.g. happy-dom, jsdom) define both `window` and Node's
`process` at the same time — this only reports on `process.versions.node`'s presence, it does
not imply `isBrowser` is false. Use both together if you need to distinguish plain Node.js
from a DOM-emulating Node test environment.

> Available since v3.0.3

## Import

```ts
import { isNode } from '@helpers4/guard';
```

## Signature


```ts
isNode(): boolean
```

## Returns

`boolean` — `true` if `process.versions.node` is defined

## Examples

### Branch on the runtime environment

Useful for isomorphic code that behaves differently on the server vs. the browser.

```ts
if (isNode()) {
  const fs = await import('node:fs')
  // server-side file access
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isNode.ts)
