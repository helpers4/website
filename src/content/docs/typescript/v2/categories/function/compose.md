---
title: "compose"
sidebar:
  label: "compose"
---

Composes functions right-to-left: `compose(f, g)(x)` is equivalent to `f(g(x))`.

The inverse of pipe, which applies functions left-to-right.

> Available since v2.0.0

## Import

```ts
import { compose } from '@helpers4/function';
```

## Signature


```ts
compose<A, B>(fn1: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn1` | `function` |  |

## Returns

`function` — A function that applies `fns` in reverse order

## Examples

### Compose functions right-to-left

`compose(f, g)(x)` is equivalent to `f(g(x))`. The rightmost function is applied first.

```ts
const process = compose(
  String,
  (x: number) => x * 2,
  (x: number) => x + 1
);
process(3); // => "8"
```

### Build a validator from small predicates

Compose small predicate functions into a single validator.

```ts
const validate = compose(
  (ok: boolean) => ok || (() => { throw new Error('invalid'); })(),
  (s: string) => s.length >= 3
);
validate('ab');  // throws
validate('abc'); // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/function/compose.ts)
