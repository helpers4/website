---
title: "base32_decode"
description: "Decodes s from base32 (RFC 4648 section 6)."
sidebar:
  label: "base32_decode"
---

Decodes `s` from base32 (RFC 4648 section 6).

## Import

```rust
use helpers4::hex::base32_decode;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn base32_decode(s: &str) -> Result<Vec<u8>, Base32DecodeError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The base32 string to decode, with `=` padding to a multiple of 8 characters. |

## Returns

`Result<Vec<u8>, Base32DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns a [`Base32DecodeError`](#error-type-base32decodeerror) when the length is not a multiple of 8, `=` appears anywhere
but the end, or a character is not in the base32 alphabet.

## Examples

```rust
use helpers4::hex::base32_decode;

assert_eq!(base32_decode("MZXW6YTBOI======").as_deref(), Ok(&b"foobar"[..]));
assert!(base32_decode("MZXW6YTBOI").is_err()); // not a multiple of 8
```

## Error type: Base32DecodeError

Why a string could not be decoded as base32.

```rust
use helpers4::hex::Base32DecodeError;

#[non_exhaustive]
pub enum Base32DecodeError {
    /// The string's length is not a multiple of 8.
    InvalidLength {
        /// Actual number of characters.
        actual: usize,
    },
    /// A `=` padding character appears somewhere other than the end of the string.
    InvalidPadding,
    /// A character that is not in the base32 alphabet (`A`-`Z`, `2`-`7`) or a trailing `=`.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
}
```

## Source

[src/hex/base32_decode.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/hex/base32_decode.rs#L46)
