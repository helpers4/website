---
title: "to_sorted_vec"
description: "The elements of set as a sorted Vec."
sidebar:
  label: "to_sorted_vec"
---

The elements of `set` as a sorted `Vec`.

A `HashSet` iterates in an unspecified order that changes between runs; use this wherever the
order is visible (output, snapshots, tests).

## Import

```rust
use helpers4::set::to_sorted_vec;
```

Cargo feature `set` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features set
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["set"] }
```

## Signature

```rust
pub fn to_sorted_vec<T: Clone + Ord, S: BuildHasher>(set: &HashSet<T, S>) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `set` | `&HashSet<T, S>` | The set to list. |

## Returns

`Vec<T>` — The elements in ascending order.

## Examples

```rust
use helpers4::set::to_sorted_vec;
use std::collections::HashSet;

let set = HashSet::from([3, 1, 2]);
assert_eq!(to_sorted_vec(&set), vec![1, 2, 3]);
```

## Source

[src/set/to_sorted_vec.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/to_sorted_vec.rs#L31)
