---
title: "choose"
description: "Picks one element at random, each with the same probability."
sidebar:
  label: "choose"
---

Picks one element at random, each with the same probability.

## Import

```rust
use helpers4::random::choose;
```

Cargo feature `random` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features random
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["random"] }
```

## Signature

```rust
pub fn choose<'a, T>(items: &'a [T], rng: &mut Rng) -> Option<&'a T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&'a [T]` | The elements to pick from. |
| `rng` | `&mut Rng` | The generator that decides the pick. |

## Returns

`Option<&'a T>` — A reference to the chosen element, or `None` when `items` is empty.

## Examples

```rust
use helpers4::random::{choose, Rng};

let names = ["ana", "bo", "cy"];
let pick = choose(&names, &mut Rng::seeded(3));
assert!(pick.is_some_and(|name| names.contains(name)));
assert_eq!(choose::<u8>(&[], &mut Rng::seeded(3)), None);
```

## Source

[src/random/choose.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/random/choose.rs#L29)
