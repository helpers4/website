---
title: "base64_decode"
description: "Decodes s from base64 (RFC 4648 section 4)."
sidebar:
  label: "base64_decode"
---

Decodes `s` from base64 (RFC 4648 section 4).

## Import

```rust
use helpers4::hex::base64_decode;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.7", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn base64_decode(s: &str) -> Result<Vec<u8>, Base64DecodeError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The base64 string to decode, with `=` padding to a multiple of 4 characters. |

## Returns

`Result<Vec<u8>, Base64DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns a [`Base64DecodeError`](#error-type-base64decodeerror) when the length is not a multiple of 4, `=` appears anywhere
but the end, or a character is not in the base64 alphabet.

## Examples

```rust
use helpers4::hex::base64_decode;

assert_eq!(base64_decode("TWFu").as_deref(), Ok(&b"Man"[..]));
assert!(base64_decode("TWFu!").is_err()); // not a multiple of 4
```

## Error type: Base64DecodeError

Why a string could not be decoded as base64.

```rust
use helpers4::hex::Base64DecodeError;

#[non_exhaustive]
pub enum Base64DecodeError {
    /// The string's length is not a multiple of 4.
    InvalidLength {
        /// Actual number of characters.
        actual: usize,
    },
    /// A `=` padding character appears somewhere other than the end of the string.
    InvalidPadding,
    /// A character that is not in the base64 alphabet (`A`-`Z`, `a`-`z`, `0`-`9`, `+`, `/`) or a
    /// trailing `=`.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
}
```

## Source

[src/hex/base64_decode.rs](https://github.com/helpers4/rust/blob/v0.0.7/src/hex/base64_decode.rs#L49)
