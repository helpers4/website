---
title: "AbortSignalLike"
sidebar:
  label: "AbortSignalLike"
description: "What helpers4 needs of an `AbortSignal`: whether it is aborted, why, and a way to listen for the abort."
version: "3.1.10"
---

What helpers4 needs of an `AbortSignal`: whether it is aborted, why, and a way to listen for
the abort. A real `AbortSignal` is assignable to it, and so is an object of your own in a
runtime that has no `AbortController` (GJS, embedded engines) or no DOM typings: the type
names nothing but itself, so it compiles without the DOM lib.

Every `signal` option of the library takes this type.

> Available since v3.1.10

## Import

```ts
import type { AbortSignalLike } from '@helpers4/type';
// or, from the all-in-one package (same code, one install):
import type { AbortSignalLike } from 'helpers4/type';
```

## Type Definition

```ts
interface AbortSignalLike {
  aborted: boolean;
  reason?: unknown;
  addEventListener(type: "abort", listener: function, options?: object): void;
  removeEventListener(type: "abort", listener: function): void;
}
```

## Examples

### AbortSignalLike



```ts
// A signal for a runtime without AbortController
const listeners = new Set<() => void>();
const signal: AbortSignalLike = {
  aborted: false,
  addEventListener: (_type, listener) => listeners.add(listener),
  removeEventListener: (_type, listener) => listeners.delete(listener),
};
await delay(1000, { signal });
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/AbortSignalLike.ts)
