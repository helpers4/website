---
title: "noop"
sidebar:
  label: "noop"
description: "A no-operation function that does nothing and returns `undefined`  Useful as a default callback, placeholder, or to exp…"
version: "3.1.0"
---

A no-operation function that does nothing and returns `undefined`

Useful as a default callback, placeholder, or to explicitly ignore a value.

> Available since v2.0.0

## Import

```ts
import { noop } from '@helpers4/function';
// or, from the all-in-one package (same code, one install):
import { noop } from 'helpers4/function';
```

## Signature


```ts
noop(): void
```

## Returns

`void` — Nothing (`undefined`)

## Examples

### Use as a default callback

Replace an optional callback with noop to avoid null checks.

```ts
const onComplete = options.callback ?? noop;
onComplete(); // does nothing
```

### Silence an event handler

Pass noop wherever a function is required but no action is needed.

```ts
element.addEventListener('click', noop);
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/noop.ts)
