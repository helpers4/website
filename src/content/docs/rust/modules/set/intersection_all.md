---
title: "intersection_all"
description: "The elements that appear in every set of sets."
sidebar:
  label: "intersection_all"
---

The elements that appear in every set of `sets`.

[`HashSet::intersection`](/rust/modules/array/intersection/) only combines two sets and returns a lazy iterator; this takes any
number of sets and returns an owned set. An empty slice gives an empty set (there is no set
to draw elements from), not "everything".

## Import

```rust
use helpers4::set::intersection_all;
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
pub fn intersection_all<T: Clone + Eq + Hash, S: BuildHasher>(
    sets: &[HashSet<T, S>],
) -> HashSet<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `sets` | `&[HashSet<T, S>]` | The sets to intersect. |

## Returns

`HashSet<T>` — A new set with the elements common to all of `sets`.

## Examples

```rust
use helpers4::set::intersection_all;
use std::collections::HashSet;

let a = HashSet::from([1, 2, 3]);
let b = HashSet::from([2, 3, 4]);
let c = HashSet::from([3, 5]);
assert_eq!(intersection_all(&[a, b, c]), HashSet::from([3]));
```

## Source

[src/set/intersection_all.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/intersection_all.rs#L34)
