---
title: "DeepSet"
sidebar:
  label: "DeepSet"
---

Produces the type of `T` after replacing the value at `Path` with `V`.

When a key in `Path` is absent from the corresponding level of `T`, that level
(and everything below it) is added as a new field instead of resolving to
`never` — mirroring how `set()` creates intermediate objects at runtime.

> Available since v3.0.0

## Import

```ts
import type { DeepSet } from '@helpers4/type';
```

## Type Definition

```ts
type DeepSet<T, Path extends readonly PropertyKey[], V> =
  Path extends readonly []
    ? V
    : Path extends readonly [infer K extends PropertyKey, ...infer Rest extends readonly PropertyKey[]]
      ? T extends object
        ? K extends keyof T
          ? { [P in keyof T]: P extends K ? DeepSet<T[K], Rest, V> : T[P] }
          : T & Record<K, BuildPath<Rest, V>>
        : BuildPath<Path, V>
      : never
```

## Examples

### DeepSet



```ts
type Obj = { a: { b: number; c: string } };

DeepSet<Obj, ['a', 'b'], string>
// => { a: { b: string; c: string } }

DeepSet<Obj, ['a', 'x'], boolean>
// => { a: { b: number; c: string } & { x: boolean } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/DeepSet.ts)
