---
title: "decode_to_slice"
description: "Decodes a hexadecimal string into out, which must be exactly half as long as the string."
sidebar:
  label: "decode_to_slice"
---

Decodes a hexadecimal string into `out`, which must be exactly half as long as the string.

Nothing is allocated; on error `out` may be partially written.

## Import

```rust
use helpers4::hex::decode_to_slice;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn decode_to_slice(hex: &str, out: &mut [u8]) -> Result<(), DecodeError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hex` | `&str` |
| `out` | `&mut [u8]` |

## Returns

`Result<(), DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`DecodeError::OddLength`](#error-type-decodeerror), [`DecodeError::InvalidLength`](#error-type-decodeerror) when the string does not match
`out.len() * 2`, or [`DecodeError::InvalidChar`](#error-type-decodeerror).

## Examples

```rust
use helpers4::hex::decode_to_slice;

let mut buf = [0u8; 2];
decode_to_slice("beef", &mut buf)?;
assert_eq!(buf, [0xbe, 0xef]);
```

## Error type: DecodeError

Why a string could not be decoded as hexadecimal.

```rust
use helpers4::hex::DecodeError;

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

[src/hex/decode_to_slice.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/hex/decode_to_slice.rs#L27)
