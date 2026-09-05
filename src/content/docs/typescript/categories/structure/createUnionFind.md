---
title: "createUnionFind"
sidebar:
  label: "createUnionFind"
description: "Creates a disjoint-set (union-find) structure: tracks a partition of items into non-overlapping sets, merging two sets…"
version: "3.1.1"
---

Creates a disjoint-set (union-find) structure: tracks a partition of items into
non-overlapping sets, merging two sets in near-constant time via `union`, and answering
"are these in the same set?" via `connected` — the classic tool for clustering items by
an equivalence relation built up incrementally (e.g. grouping records that pairwise match
on some criterion into connected components), without recomputing the whole partition
from scratch after every new match.

Uses union-by-rank and path compression internally, so `find`/`union`/`connected` are all
near-O(1) amortized regardless of how many items or unions have been performed.

Items are compared by `Map` key semantics (`SameValueZero`, like `Set`/`Map` themselves) —
so object identity for objects, value equality for primitives.

> Available since v3.0.8

## Import

```ts
import { createUnionFind } from '@helpers4/structure';
// or, from the all-in-one package (same code, one install):
import { createUnionFind } from 'helpers4/structure';
```

## Signature


```ts
createUnionFind<T>(): UnionFind<T>
```

## Returns

`UnionFind<T>` — A UnionFind.

## Examples

### Group items by a pairwise match built up incrementally

union() merges two items into the same set; connected() checks whether two items ended up in the same set, even through a chain of intermediate matches.

```ts
const uf = createUnionFind<string>();
uf.union('a', 'b');
uf.union('b', 'c');
uf.connected('a', 'c'); // true — merged transitively through 'b'
uf.connected('a', 'd'); // false — 'd' was never unioned with anything
```

### find() returns the shared representative of a set

Every item in the same set resolves to the same representative via find() — useful to bucket items by their final group afterwards.

```ts
const uf = createUnionFind<number>();
uf.union(1, 2);
uf.union(2, 3);
uf.find(1) === uf.find(3) // true
```

## Related Types

### `UnionFind`

A disjoint-set structure created by createUnionFind.

```ts
interface UnionFind<T> {
  connected(a: T, b: T): boolean;
  find(item: T): T;
  union(a: T, b: T): void;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/structure/createUnionFind.ts)
