---
title: "shuffle"
description: "Returns the elements in a random order (Fisher–Yates: every permutation is equally likely), leaving items as it is."
sidebar:
  label: "shuffle"
---

Returns the elements in a random order (Fisher–Yates: every permutation is equally likely),
leaving `items` as it is.

The order depends only on the generator, so the same seed always gives the same result.

## Import

```rust
use helpers4::random::shuffle;
```

Cargo feature `random` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features random
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["random"] }
```

## Signature

```rust
pub fn shuffle<T: Clone>(items: &[T], rng: &mut Rng) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to shuffle. |
| `rng` | `&mut Rng` | The generator that decides the order. |

## Returns

`Vec<T>` — A new `Vec` with the same elements in a random order.

## Examples

```rust
use helpers4::random::{shuffle, Rng};

let deck = [1, 2, 3, 4, 5];
let first = shuffle(&deck, &mut Rng::seeded(7));
let again = shuffle(&deck, &mut Rng::seeded(7));
assert_eq!(first, again); // reproducible

let mut sorted = first.clone();
sorted.sort_unstable();
assert_eq!(sorted, deck); // nothing lost, nothing added
```

## Source

[src/random/shuffle.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/random/shuffle.rs#L36)
