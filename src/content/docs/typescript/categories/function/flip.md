---
title: "flip"
sidebar:
  label: "flip"
---

Creates a function that invokes `fn` with the first two arguments swapped.

Useful when adapting a function for use in higher-order pipelines where the
argument order is reversed (e.g. passing a binary callback to `reduce`).

> Available since v2.0.0

## Import

```ts
import { flip } from '@helpers4/function';
```

## Signature


```ts
flip<A, B, Rest extends unknown[], R>(fn: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to wrap. |

## Returns

`function` — A new function with the first two parameters swapped.

## Examples

### Swap argument order

Returns a new function where the first two arguments are swapped.

```ts
const sub = (a: number, b: number) => a - b;
flip(sub)(3, 10); // => 7  (10 - 3)
```

### Adapt a divide function

Useful for adapting binary callbacks in higher-order functions.

```ts
const divide = (a: number, b: number) => a / b;
const divideInto = flip(divide);
divideInto(2, 100); // => 50
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/flip.ts)
