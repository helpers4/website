---
title: "new_short_id"
description: "A short id of len characters drawn from an Alphabet with the operating system's random source, every character equally likely."
sidebar:
  label: "new_short_id"
---

A short id of `len` characters drawn from an [`Alphabet`](/rust/modules/id/alphabet/) with the operating system's random
source, every character equally likely.

Needs the `random-entropy` feature. Bytes that would favor some characters (256 is rarely a
multiple of the alphabet size) are discarded, not folded with a modulo. The result carries
`len × log2(size)` bits of randomness: 21 characters of [`url_safe`](/rust/modules/id/alphabet/) give
126 bits, as much as a UUID.

## Import

```rust
use helpers4::id::new_short_id;
```

Cargo feature `id` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features id
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["id"] }
```

## Signature

```rust
pub fn new_short_id(alphabet: &Alphabet, len: usize) -> Result<String, EntropyError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `alphabet` | `&Alphabet` | The characters to draw from. |
| `len` | `usize` | The number of characters. |

## Returns

`Result<String, EntropyError>` — A string of `len` characters.

## Errors

Returns an [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) when the operating system cannot provide random bytes.

## Examples

```rust
use helpers4::id::{new_short_id, Alphabet};

let id = new_short_id(&Alphabet::url_safe(), 21)?;
assert_eq!(id.chars().count(), 21);
```

## Source

[src/id/new_short_id.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/id/new_short_id.rs#L39)
