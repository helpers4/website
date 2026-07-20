---
title: "isBrowser"
sidebar:
  label: "isBrowser"
---

Checks whether the code is currently running in a browser-like environment
(`window` and `window.document` both defined).

Note: some hybrid test environments (e.g. happy-dom, jsdom) define both `window` and Node's
`process` at the same time — this only reports on `window`'s presence, it does not imply
`isNode` is false. Use both together if you need to distinguish a real browser from a
DOM-emulating Node test environment.

> Available since v3.0.3

## Import

```ts
import { isBrowser } from '@helpers4/guard';
```

## Signature


```ts
isBrowser(): boolean
```

## Returns

`boolean` — `true` if `window` and `window.document` are both defined

## Examples

### Branch on the runtime environment

Useful for isomorphic code that behaves differently in the browser vs. Node.js.

```ts
if (isBrowser()) {
  localStorage.setItem('key', 'value')
} else {
  // Node.js / server-side fallback
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isBrowser.ts)
