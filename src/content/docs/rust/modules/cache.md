---
title: "cache"
description: "Caches and stores whose entries expire."
sidebar:
  order: 2
---

Caches and stores whose entries expire. The clock is always passed in, never read.

Cargo feature `cache` (enabled by default) · import path `helpers4::cache`

| Item | What it does |
| --- | --- |
| [`ExpiringMap`](#expiringmap) | A map whose entries expire, with the clock passed in by the caller. |
| [`ExpiringSet`](#expiringset) | A set whose members expire: an `ExpiringMap` without values. |

## `ExpiringMap`

```rust
pub struct ExpiringMap<K, V, T = u64> { /* private fields */ }
```

A map whose entries expire, with the clock passed in by the caller.

Nothing here reads a clock, so it is trivially testable and works with any timestamp: pass
unix seconds (`u64`, e.g. the `exp` of a token), milliseconds, or an `Instant`. An entry is
live while `now < expires_at`. Expired entries are dropped lazily: every write sweeps them, so
the map only grows with the entries inserted inside one lifetime window (a replay-protection
store keyed by token id, a cache of pending challenges, ...).

The sweep is skipped in constant time while nothing can have expired yet, and is a single pass
otherwise. `len` counts entries still stored, expired or not, until the next write sweeps them:
call [`evict_expired`](#evict_expired) first when comparing it to a threshold.

There is **no capacity bound**. If the keys come from untrusted input and their lifetimes are
long, the number of live entries is only limited by the insert rate times the lifetime: bound
it yourself (reject or rate-limit inserts) when that matters.

### Examples

```rust
use helpers4::cache::ExpiringMap;

let mut seen: ExpiringMap<&str, (), u64> = ExpiringMap::new();
let now = 1_000;

// First use of a token id, valid until t = 1_060: accepted.
assert!(seen.insert_if_absent("jti-1", (), 1_060, now));
// The same id again while it is live: a replay.
assert!(!seen.insert_if_absent("jti-1", (), 1_060, now + 10));
// Once it has expired it can be used (and remembered) again.
assert!(seen.insert_if_absent("jti-1", (), 1_200, 1_060));
```

### Methods

#### `new`

```rust
pub fn new() -> Self
```

Creates an empty map.

#### `len`

```rust
pub fn len(&self) -> usize
```

The number of stored entries, including expired ones that no write has swept yet.

#### `is_empty`

```rust
pub fn is_empty(&self) -> bool
```

Whether nothing is stored (see [`len`](#len)).

#### `clear`

```rust
pub fn clear(&mut self)
```

Removes every entry, expired or not.

#### `insert`

```rust
pub fn insert(&mut self, key: K, value: V, expires_at: T, now: T) -> Option<V>
```

Stores `value` under `key` until `expires_at`, replacing any live entry, and returns the
replaced value. Expired entries are swept first. An `expires_at` that is not after `now`
expires immediately.

#### `insert_if_absent`

```rust
pub fn insert_if_absent(&mut self, key: K, value: V, expires_at: T, now: T) -> bool
```

Stores `value` under `key` only if there is no live entry for it, and returns whether it
did. This is the replay check: `false` means the key was already seen and is still live.
Expired entries are swept first.

#### `get`

```rust
pub fn get(&self, key: &K, now: T) -> Option<&V>
```

The live value under `key`, or `None` if absent or expired at `now`.

#### `contains_key`

```rust
pub fn contains_key(&self, key: &K, now: T) -> bool
```

Whether there is a live entry under `key` at `now`.

#### `remove`

```rust
pub fn remove(&mut self, key: &K, now: T) -> Option<V>
```

Removes `key` and returns its value if it was still live at `now`.

#### `evict_expired`

```rust
pub fn evict_expired(&mut self, now: T) -> usize
```

Drops every entry that has expired at `now` and returns how many. Writes do this already;
call it directly to release memory while nothing is being written.

## `ExpiringSet`

```rust
pub type ExpiringSet<K, T = u64> = ExpiringMap<K, (), T>
```

A set whose members expire: an [`ExpiringMap`](#expiringmap) without values.

