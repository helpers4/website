---
title: "decode_array"
description: "Decodes a hexadecimal string into a fixed-size array, e.g."
sidebar:
  label: "decode_array"
---

Decodes a hexadecimal string into a fixed-size array, e.g. a 32-byte key from 64 hex digits.

## Import

```rust
use helpers4::hex::decode_array;
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
pub fn decode_array<const N: usize>(hex: &str) -> Result<[u8; N], DecodeError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hex` | `&str` |

## Returns

`Result<[u8; N], DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Same as [`decode_to_slice`](/rust/modules/hex/decode_to_slice/): the string must have exactly `2 * N`
hex digits.

## Examples

```rust
use helpers4::hex::decode_array;

let key: [u8; 4] = decode_array("deadbeef")?;
assert_eq!(key, [0xde, 0xad, 0xbe, 0xef]);
assert!(decode_array::<4>("dead").is_err());
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

[src/hex/decode_array.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/hex/decode_array.rs#L25)
