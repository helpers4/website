---
title: "DecodeError"
description: "Why a string could not be decoded as hexadecimal."
sidebar:
  label: "DecodeError"
---

Why a string could not be decoded as hexadecimal.

## Import

```rust
use helpers4::hex::DecodeError;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["hex"] }
```

## Definition

```rust
#[non_exhaustive]
pub enum DecodeError {
    /// The string has an odd number of characters.
    OddLength,
    /// The string does not match the requested output size.
    InvalidLength {
        /// Expected number of hex characters (twice the output size).
        expected: usize,
        /// Actual number of hex characters.
        actual: usize,
    },
    /// A character that is not a hexadecimal digit.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
}
```

## Source

[src/hex/error.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/hex/error.rs#L10)
