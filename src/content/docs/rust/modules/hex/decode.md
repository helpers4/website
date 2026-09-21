---
title: "decode"
description: "Decodes a hexadecimal string (either case) into bytes."
sidebar:
  label: "decode"
---

Decodes a hexadecimal string (either case) into bytes.

The string must be made of digit pairs only: surrounding whitespace, a `0x` prefix or
separators are errors, so trim or strip them first.

## Import

```rust
use helpers4::hex::decode;
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
pub fn decode(hex: &str) -> Result<Vec<u8>, DecodeError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hex` | `&str` |

## Returns

`Result<Vec<u8>, DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`DecodeError::OddLength`](#error-type-decodeerror) for an odd number of characters, [`DecodeError::InvalidChar`](#error-type-decodeerror) for
a character that is not a hex digit.

## Examples

```rust
use helpers4::hex::decode;

assert_eq!(decode("DeadBeef")?, vec![0xde, 0xad, 0xbe, 0xef]);
assert!(decode("abc").is_err());
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

[src/hex/decode.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/hex/decode.rs#L27)
