---
title: "jaccard"
description: "The Jaccard similarity of two sets: the size of their intersection over the size of their union."
sidebar:
  label: "jaccard"
---

The Jaccard similarity of two sets: the size of their intersection over the size of their
union.

`1.0` means the sets are equal, `0.0` that they share nothing. Two empty sets are equal, so
they score `1.0`.

## Import

```rust
use helpers4::set::jaccard;
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
pub fn jaccard<T: Eq + Hash, S: BuildHasher>(a: &HashSet<T, S>, b: &HashSet<T, S>) -> f64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&HashSet<T, S>` | The first set. |
| `b` | `&HashSet<T, S>` | The second set. |

## Returns

`f64` — A value between `0.0` and `1.0`.

## Examples

```rust
use helpers4::set::jaccard;
use std::collections::HashSet;

let a = HashSet::from([1, 2, 3]);
let b = HashSet::from([2, 3, 4]);
assert_eq!(jaccard(&a, &b), 0.5); // {2, 3} out of {1, 2, 3, 4}
```

## Source

[src/set/jaccard.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/jaccard.rs#L35)
