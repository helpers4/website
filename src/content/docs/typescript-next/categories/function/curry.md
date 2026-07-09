---
title: "curry"
sidebar:
  label: "curry"
---

Transforms a multi-argument function into a chain of single-argument functions
(Haskell-style currying). Supports up to 5 arguments.

The inverse operation of applying all arguments at once:
`curry(fn)(a)(b)` is equivalent to `fn(a, b)`.

> Available since v2.0.0

## Import

```ts
import { curry } from '@helpers4/function';
```

## Signature


```ts
curry<A, R>(fn: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to curry |

## Returns

`function` — A curried version of `fn`

## Examples

### Create reusable adder

Curry a 2-argument function to build specialised versions.

```ts
const add = curry((a: number, b: number) => a + b);
const add5 = add(5);

add5(3);  // => 8
add5(10); // => 15
```

### Pipeline-friendly 3-argument function

Curry enables point-free style when composing pipelines.

```ts
const clamp = curry((min: number, max: number, v: number) =>
  Math.min(Math.max(v, min), max)
);
const clamp0to100 = clamp(0)(100);

clamp0to100(42);  // => 42
clamp0to100(-5);  // => 0
clamp0to100(150); // => 100
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/function/curry.ts)
