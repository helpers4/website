---
title: "UnionToIntersection"
sidebar:
  label: "UnionToIntersection"
---

Converts a union type to an intersection type: `A | B | C` → `A & B & C`.

Uses conditional-type distribution and the contravariant position of a
function parameter to collapse the union into an intersection.

> Available since v3.0.0

## Import

```ts
import type { UnionToIntersection } from '@helpers4/type';
```

## Type Definition

```ts
type UnionToIntersection<U> =
  (U extends unknown ? (x: U) => void : never) extends (x: infer I) => void ? I : never
```

## Examples

### UnionToIntersection



```ts
type Union = { a: number } | { b: string } | { c: boolean };
type Intersection = UnionToIntersection<Union>;
// { a: number } & { b: string } & { c: boolean }

type Keys = UnionToIntersection<'a' | 'b'>;
// 'a' & 'b'  (resolves to never for disjoint literals)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/UnionToIntersection.ts)
