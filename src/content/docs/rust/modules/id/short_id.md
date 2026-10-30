---
title: "short_id"
description: "A short id of len characters drawn from an Alphabet with a seedable generator, every character equally likely."
sidebar:
  label: "short_id"
---

A short id of `len` characters drawn from an [`Alphabet`](/rust/modules/id/alphabet/) with a seedable generator, every
character equally likely.

The same generator state always gives the same id, which makes it right for tests and
reproducible fixtures, and **wrong for anything secret** (a 64-bit seed can be guessed): use
[`new_short_id`](/rust/modules/id/new_short_id/) (feature `random-entropy`) for tokens.

## Import

```rust
use helpers4::id::short_id;
```

Cargo feature `id` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features id
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["id"] }
```

## Signature

```rust
pub fn short_id(alphabet: &Alphabet, len: usize, rng: &mut Rng) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `alphabet` | `&Alphabet` | The characters to draw from. |
| `len` | `usize` | The number of characters. |
| `rng` | `&mut Rng` | The generator that decides them. |

## Returns

`String` — A string of `len` characters (`len` characters, not bytes, for a non-ASCII alphabet).

## Examples

```rust
use helpers4::id::{short_id, Alphabet};
use helpers4::random::Rng;

let id = short_id(&Alphabet::safe(), 8, &mut Rng::seeded(1));
assert_eq!(id.chars().count(), 8);
assert_eq!(id, short_id(&Alphabet::safe(), 8, &mut Rng::seeded(1))); // reproducible
```

## Source

[src/id/short_id.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/id/short_id.rs#L36)
