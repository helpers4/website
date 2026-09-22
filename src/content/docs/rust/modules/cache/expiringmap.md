---
title: "ExpiringMap"
description: "A map whose entries expire, with the clock passed in by the caller."
sidebar:
  label: "ExpiringMap"
---

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

## Import

```rust
use helpers4::cache::ExpiringMap;
```

Cargo feature `cache` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features cache
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["cache"] }
```

## Definition

```rust
pub struct ExpiringMap<K, V, T = u64> { /* private fields */ }
```

## Examples

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

## Methods

### `new`

```rust
pub fn new() -> Self
```

Creates an empty map.

**Returns**

`Self` — A new, empty `ExpiringMap`.

### `len`

```rust
pub fn len(&self) -> usize
```

The number of stored entries, including expired ones that no write has swept yet.

**Returns**

`usize` — The number of entries currently stored, including any that have expired but were not evicted yet.

### `is_empty`

```rust
pub fn is_empty(&self) -> bool
```

Whether nothing is stored (see [`len`](#len)).

**Returns**

`bool` — `true` when the map stores no entries at all, including expired ones not yet evicted.

### `clear`

```rust
pub fn clear(&mut self)
```

Removes every entry, expired or not.

**Returns**

`()`

### `insert`

```rust
pub fn insert(&mut self, key: K, value: V, expires_at: T, now: T) -> Option<V>
```

Stores `value` under `key` until `expires_at`, replacing any live entry, and returns the
replaced value. Expired entries are swept first. An `expires_at` that is not after `now`
expires immediately.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `K` | The key to store the value under. |
| `value` | `V` | The value to store. |
| `expires_at` | `T` | The point in time at which the entry becomes invisible. |
| `now` | `T` | The current time, used to evict already-expired entries before inserting. |

**Returns**

`Option<V>` — The previous value for `key`, if there was one and it had not expired yet.

### `insert_if_absent`

```rust
pub fn insert_if_absent(&mut self, key: K, value: V, expires_at: T, now: T) -> bool
```

Stores `value` under `key` only if there is no live entry for it, and returns whether it
did. This is the replay check: `false` means the key was already seen and is still live.
Expired entries are swept first.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `K` | The key to store the value under. |
| `value` | `V` | The value to store. |
| `expires_at` | `T` | The point in time at which the entry becomes invisible. |
| `now` | `T` | The current time, used to decide whether an existing entry has already expired. |

**Returns**

`bool` — `true` when the value was inserted, `false` when `key` already had a live entry.

### `get`

```rust
pub fn get(&self, key: &K, now: T) -> Option<&V>
```

The live value under `key`, or `None` if absent or expired at `now`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `&K` | The key to look up. |
| `now` | `T` | The current time, used to decide whether the entry has expired. |

**Returns**

`Option<&V>` — The value for `key`, or `None` when it is missing or expired.

### `contains_key`

```rust
pub fn contains_key(&self, key: &K, now: T) -> bool
```

Whether there is a live entry under `key` at `now`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `&K` | The key to look up. |
| `now` | `T` | The current time, used to decide whether the entry has expired. |

**Returns**

`bool` — `true` when `key` has a live entry.

### `remove`

```rust
pub fn remove(&mut self, key: &K, now: T) -> Option<V>
```

Removes `key` and returns its value if it was still live at `now`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `&K` | The key to remove. |
| `now` | `T` | The current time, used to decide whether the entry had already expired. |

**Returns**

`Option<V>` — The removed value, or `None` when there was no live entry for `key`.

### `evict_expired`

```rust
pub fn evict_expired(&mut self, now: T) -> usize
```

Drops every entry that has expired at `now` and returns how many. Writes do this already;
call it directly to release memory while nothing is being written.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `now` | `T` | The current time. |

**Returns**

`usize` — The number of entries removed.

## Source

[src/cache/expiring_map.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/cache/expiring_map.rs#L41)
