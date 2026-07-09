---
title: "DeepGet"
sidebar:
  label: "DeepGet"
---

Resolves the value type at a given `Path` within `T`.

Returns `unknown` when any key in `Path` is not present in the corresponding
level of `T`. An empty path resolves to `T` itself.

> Available since v3.0.0

## Import

```ts
import type { DeepGet } from '@helpers4/type';
```

## Type Definition

```ts
type DeepGet<T, Path extends readonly PropertyKey[]> =
  Path extends readonly []
    ? T
    : Path extends readonly [infer K, ...infer Rest extends readonly PropertyKey[]]
      ? K extends keyof T
        ? DeepGet<T[K], Rest>
        : unknown
      : unknown
```

## Examples

### DeepGet



```ts
type Obj = { a: { b: { c: number } } };

DeepGet<Obj, ['a', 'b', 'c']> // => number
DeepGet<Obj, ['a', 'b']>      // => { c: number }
DeepGet<Obj, ['a', 'x']>      // => unknown
DeepGet<Obj, []>              // => Obj
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/DeepGet.ts)
