---
title: "sample"
description: "Picks count different elements at random (without replacement), in random order."
sidebar:
  label: "sample"
---

Picks `count` different elements at random (without replacement), in random order.

Elements are different by position: two equal values in `items` can both be picked. When
`count` is at least `items.len()`, every element is returned, shuffled.

## Import

```rust
use helpers4::random::sample;
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
pub fn sample<T: Clone>(items: &[T], count: usize, rng: &mut Rng) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to pick from. |
| `count` | `usize` | How many to pick. |
| `rng` | `&mut Rng` | The generator that decides the picks. |

## Returns

`Vec<T>` — A new `Vec` of `min(count, items.len())` elements.

## Examples

```rust
use helpers4::random::{sample, Rng};

let winners = sample(&["ana", "bo", "cy", "di", "ed"], 2, &mut Rng::seeded(1));
assert_eq!(winners.len(), 2);
assert_ne!(winners[0], winners[1]);

assert_eq!(sample(&[1, 2], 10, &mut Rng::seeded(1)).len(), 2);
```

## Source

[src/random/sample.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/random/sample.rs#L34)
