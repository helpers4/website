---
title: "unary"
sidebar:
  label: "unary"
---

Creates a function that calls `fn` with only its first argument, discarding
any others.

Prevents the classic footgun where a callback expecting extra positional
arguments is passed directly to `Array.prototype.map`:
`['1', '2', '3'].map(parseInt)` silently passes the array index as
`parseInt`'s radix argument, producing `[1, NaN, NaN]`.

> Available since v3.0.0

## Import

```ts
import { unary } from '@helpers4/function';
```

## Signature


```ts
unary<F extends function>(fn: F): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `F` | The function to restrict to one argument |

## Returns

`function` — A new function that calls `fn` with only its first argument

## Examples

### Fix the classic .map(parseInt) bug

Array.prototype.map passes (value, index, array) — parseInt reads index as its radix argument.

```ts
['1', '2', '3'].map(parseInt)
// => [1, NaN, NaN]  (bug: index used as radix)

['1', '2', '3'].map(unary(parseInt))
// => [1, 2, 3]
```

### Restrict any multi-argument function to one argument

Useful whenever a callback slot passes more arguments than the function should see.

```ts
const double = unary((n: number, factor?: number) => n * (factor ?? 2));
double(21)
// => 42
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/unary.ts)
