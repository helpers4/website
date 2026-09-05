---
title: "createCachedResolver"
sidebar:
  label: "createCachedResolver"
description: "Creates a lazy, cached resolver: `resolve(key)` computes and caches `compute(key)` the first time a given key is seen,…"
version: "3.1.0"
---

Creates a lazy, cached resolver: `resolve(key)` computes and caches
`compute(key)` the first time a given key is seen, and returns the cached
value on every later call for that same key — until `clear()` wipes the
whole cache.

Backed by a `Map` by default (works with any key type). Pass a factory
that returns a `WeakMap` instead when keys (objects, functions, or
symbols — see isWeakMapKey) should be allowed to be
garbage-collected once nothing else references them anymore — the whole
point of `WeakMap` over `Map`.

A *factory function* is accepted (not a cache instance) so `clear()` can
reliably produce a fresh, empty cache regardless of its kind: `WeakMap`
deliberately has no `.clear()` method (no way to enumerate its entries, by
design), so the only way to empty one is to replace it outright — the same
factory used to create the initial cache is called again to do that.

> Available since v3.0.7

## Import

```ts
import { createCachedResolver } from '@helpers4/function';
// or, from the all-in-one package (same code, one install):
import { createCachedResolver } from 'helpers4/function';
```

## Signature


```ts
createCachedResolver<K extends WeakKey, V>(compute: function, createCache: function): CachedResolver<K, V>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `compute` | `function` | Computes the value for a key not yet in the cache\. |
| `createCache` | `function` | Produces a fresh, empty cache\. Defaults to \`\(\) => new Map\(\)\`\. Its \*initial\* call must return an instance not already claimed by another \`createCachedResolver\(\)\` call sharing the same factory — otherwise the two would silently share cache state, so this throws instead\. |

## Returns

`CachedResolver<K, V>` — A CachedResolver.

## Examples

### Compute once, reuse on every later call for the same key

compute() only runs on a cache miss — a repeated call for the same key returns the cached value.

```ts
let calls = 0;
const { resolve } = createCachedResolver((id: number) => {
  calls++;
  return id * 2;
});
resolve(1); // calls compute, calls === 1
resolve(1); // cache hit, calls still === 1
```

### clear() wipes the cache — the next resolve() recomputes

Useful for a "refresh" action that must pick up changes since the cache was last filled.

```ts
let calls = 0;
const { resolve, clear } = createCachedResolver((id: number) => { calls++; return id; });
resolve(1);
clear();
resolve(1); // recomputed, calls === 2
```

### WeakMap-backed cache for object keys

Pass a factory returning a WeakMap so entries can be garbage-collected once the key object is no longer referenced elsewhere.

```ts
const resolver = createCachedResolver(
  (config: object) => deriveExpensiveSettings(config),
  () => new WeakMap(),
);
```

## Related Types

### `CachedResolver`

A cached resolver created by createCachedResolver.

```ts
interface CachedResolver<K, V> {
  clear(): void;
  resolve(key: K): V;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/createCachedResolver.ts)
