---
title: "noop"
sidebar:
  label: "noop"
---

# noop

A no-operation function that does nothing and returns `undefined`

Useful as a default callback, placeholder, or to explicitly ignore a value.

> Available since v2.0.0

## Import

```ts
import { noop } from '@helpers4/function';
```

## Signature


```ts
noop(): void
```

## Returns

`void` — Nothing (`undefined`)

## Examples

### noop



```ts
const onComplete = options.callback ?? noop;
onComplete();
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/noop.ts)
