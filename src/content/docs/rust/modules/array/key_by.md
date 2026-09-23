---
title: "key_by"
description: "Indexes the elements of items by the key returned by key."
sidebar:
  label: "key_by"
---

Indexes the elements of `items` by the key returned by `key`.

When several elements share a key, the last one wins. Use [`group_by`](/rust/modules/array/group_by/) to keep
them all.

## Import

```rust
use helpers4::array::key_by;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn key_by<T: Clone, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> HashMap<K, T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to index. |
| `key` | `impl FnMut(&T) -> K` | Returns the key to index each element under. |

## Returns

`HashMap<K, T>`

## Examples

```rust
use helpers4::array::key_by;

let users = [("ann", 1), ("bob", 2), ("cat", 1)];
let by_id = key_by(&users, |&(_, id)| id);
assert_eq!(by_id[&2], ("bob", 2));
assert_eq!(by_id[&1], ("cat", 1));
```

## Source

[src/array/key_by.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/key_by.rs#L28)
