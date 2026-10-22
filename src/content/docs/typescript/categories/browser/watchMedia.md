---
title: "watchMedia"
sidebar:
  label: "watchMedia"
description: "Calls `listener` each time a CSS media query starts or stops matching."
version: "3.1.5"
---

Calls `listener` each time a CSS media query starts or stops matching.

It is not called with the current value: read it with matchesMedia. Outside a browser
(no `matchMedia`), it does nothing and returns a function that does nothing.

> Available since v3.1.5

## Import

```ts
import { watchMedia } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { watchMedia } from 'helpers4/browser';
```

## Signature


```ts
watchMedia(query: string, listener: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `string` | A media query, e\.g\. \`'\(prefers\-reduced\-motion: reduce\)'\` |
| `listener` | `function` | Receives whether the query matches after the change |

## Returns

`function` — A function that stops watching

## Examples

### Follow the color scheme

The listener runs each time the query starts or stops matching.

```ts
const stop = watchMedia('(prefers-color-scheme: dark)', (dark) => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
});
```

### Stop watching

Call the returned function, e.g. when a component is removed.

```ts
const stop = watchMedia('(min-width: 600px)', relayout);
// later
stop();
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/watchMedia.ts)
