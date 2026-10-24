---
title: "LruCache"
description: "A map bounded to at most capacity entries: once full, inserting a new key evicts the least recently used one."
sidebar:
  label: "LruCache"
---

A map bounded to at most `capacity` entries: once full, inserting a new key evicts the least
recently used one.

"Used" means read with [`get`](#get) or [`get_or_insert_with`](#get_or_insert_with),
or written with [`insert`](#insert); [`contains_key`](#contains_key) does not count,
so checking for a key without reading it never changes what gets evicted next.

Unlike [`ExpiringMap`](/rust/modules/cache/expiringmap/), entries never expire on their own: eviction is
only ever "the entry nobody has touched in the longest time", driven purely by capacity.

A capacity of `0` is a documented degenerate case, not an error: the cache never stores
anything, and every [`insert`](#insert) is immediately evicted.

## Import

```rust
use helpers4::cache::LruCache;
```

Cargo feature `cache` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features cache
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["cache"] }
```

## Definition

```rust
pub struct LruCache<K, V> { /* private fields */ }
```

## Examples

```rust
use helpers4::cache::LruCache;

let mut cache: LruCache<&str, i32> = LruCache::new(2);
cache.insert("a", 1);
cache.insert("b", 2);
cache.get(&"a"); // touch "a": "b" is now the least recently used
cache.insert("c", 3); // evicts "b", not "a"
assert_eq!(cache.get(&"a"), Some(&1));
assert_eq!(cache.get(&"b"), None);
assert_eq!(cache.get(&"c"), Some(&3));
```

## Methods

### `new`

```rust
pub fn new(capacity: usize) -> Self
```

Creates an empty cache holding at most `capacity` entries.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `capacity` | `usize` | The most entries the cache holds before it starts evicting. |

**Returns**

`Self` — An empty cache.

### `get`

```rust
pub fn get(&mut self, key: &K) -> Option<&V>
```

The live value for `key`, marking it as just used.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `&K` | The key to look up. |

**Returns**

`Option<&V>` — The value for `key`, or `None` when it is not present.

### `insert`

```rust
pub fn insert(&mut self, key: K, value: V) -> Option<V>
```

Inserts `value` under `key`, marking it as just used.

Evicts the least recently used entry first when `key` is new and the cache is already at
capacity.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `K` | The key to insert or update. |
| `value` | `V` | The value to store. |

**Returns**

`Option<V>` — The previous value stored under `key`, if any.

### `contains_key`

```rust
pub fn contains_key(&self, key: &K) -> bool
```

Whether `key` has a live entry, without affecting eviction order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `&K` | The key to check. |

**Returns**

`bool` — `true` when `key` has a live entry.

### `len`

```rust
pub fn len(&self) -> usize
```

How many entries are currently stored.

**Returns**

`usize` — The number of live entries, at most [`capacity`](#capacity).

### `is_empty`

```rust
pub fn is_empty(&self) -> bool
```

Whether the cache holds no entries.

**Returns**

`bool` — `true` when [`len`](#len) is `0`.

### `capacity`

```rust
pub fn capacity(&self) -> usize
```

The capacity this cache was created with.

**Returns**

`usize` — The most entries the cache holds before it starts evicting.

### `clear`

```rust
pub fn clear(&mut self)
```

Removes every entry.

**Returns**

`()`

### `get_or_insert_with`

```rust
pub fn get_or_insert_with(&mut self, key: K, f: impl FnOnce() -> V) -> V
```

Returns the value for `key`, computing and storing it with `f` first if absent.

Bounded, single-key equivalent of [`Memoize`](/rust/modules/function/memoize/): the same key
never recomputes while it stays in the cache, but an old key can be evicted to make room.
With a capacity of `0` the freshly computed value is still returned, but is not retained
(nothing is, see [`new`](#new)): the next call recomputes it.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `K` | The key to look up. |
| `f` | `impl FnOnce() -> V` | Computes the value to store when `key` is absent. Not called when `key` is already present. |

**Returns**

`V` — The value for `key`.

**Examples**

```rust
use helpers4::cache::LruCache;

let mut calls = 0;
let mut cache: LruCache<u32, u32> = LruCache::new(4);
let square = |cache: &mut LruCache<u32, u32>, n: u32, calls: &mut i32| {
    cache.get_or_insert_with(n, || {
        *calls += 1;
        n * n
    })
};
assert_eq!(square(&mut cache, 7, &mut calls), 49);
assert_eq!(square(&mut cache, 7, &mut calls), 49); // served from the cache
assert_eq!(calls, 1);
```

## Source

[src/cache/lru_cache.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/cache/lru_cache.rs#L36)
