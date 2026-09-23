---
title: "union_all"
description: "The union of every set in sets."
sidebar:
  label: "union_all"
---

The union of every set in `sets`.

`HashSet::union` only combines two sets and returns a lazy iterator; this takes any number
of sets and returns an owned set. An empty slice gives an empty set.

## Import

```rust
use helpers4::set::union_all;
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
pub fn union_all<T: Clone + Eq + Hash, S: BuildHasher>(sets: &[HashSet<T, S>]) -> HashSet<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `sets` | `&[HashSet<T, S>]` | The sets to merge. |

## Returns

`HashSet<T>` — A new set with every element that appears in at least one of `sets`.

## Examples

```rust
use helpers4::set::union_all;
use std::collections::HashSet;

let a = HashSet::from([1, 2]);
let b = HashSet::from([2, 3]);
let c = HashSet::from([4]);
assert_eq!(union_all(&[a, b, c]), HashSet::from([1, 2, 3, 4]));
```

## Source

[src/set/union_all.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/union_all.rs#L33)
