---
title: "createBackStack"
sidebar:
  label: "createBackStack"
description: "Creates a back stack: a stack that always has a current entry (the one on top), with the previous ones underneath to go…"
version: "3.1.7"
---

Creates a back stack: a stack that always has a current entry (the one on top), with the
previous ones underneath to go `back` to. The bottom entry is never removed, so there is always
something to show: screens of a prototype, overlays stacked over a screen (with `null` as the
initial entry), wizard steps, undo levels.

It does not decide what the next entry is: compute it (with a state machine, a router, ...)
and `push` it.

> Available since v3.1.5

## Import

```ts
import { createBackStack } from '@helpers4/structure';
// or, from the all-in-one package (same code, one install):
import { createBackStack } from 'helpers4/structure';
```

## Signature


```ts
createBackStack<T>(initial: T, options: BackStackOptions): BackStack<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `initial` | `T` | The first current entry, also the default of BackStack\.reset |
| `options` | `BackStackOptions` | Depth limit — see BackStackOptions |

## Returns

`BackStack<T>` — A BackStack

## Examples

### Navigate and go back

push() moves to a new entry; back() returns the entry it left and restores the previous one.

```ts
const screens = createBackStack('home');
screens.push('settings');
screens.back();  // => 'settings'
screens.current; // => 'home'
```

### Bound the stack

limit caps how many past entries are kept; the oldest are dropped first.

```ts
const stack = createBackStack('', { limit: 1 });
stack.push('a');
stack.push('ab');
stack.back(); // => 'ab'
stack.back(); // => undefined — '' was dropped
```

## Related Types

### `BackStack`

A back stack created by createBackStack.

```ts
interface BackStack<T> {
  canGoBack: boolean;
  current: T;
  back(): T | undefined;
  push(value: T): void;
  reset(value?: T): void;
  subscribe(listener: function): function;
}
```

### `BackStackOptions`

Options for createBackStack.

```ts
interface BackStackOptions {
  limit?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/structure/createBackStack.ts)
