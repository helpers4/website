---
title: "percent_decode"
description: "Decodes the %XX escapes of input."
sidebar:
  label: "percent_decode"
---

Decodes the `%XX` escapes of `input`.

Every `%` must be followed by two hexadecimal digits (either case). A `+` stays a `+`: turning
it into a space is a rule of HTML form encoding, applied by [`parse_query`](/rust/modules/url/parse_query/)
and not by URL components in general. Returns the input borrowed when it has no `%`.

## Import

```rust
use helpers4::url::percent_decode;
```

Cargo feature `url` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features url
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["url"] }
```

## Signature

```rust
pub fn percent_decode(input: &str) -> Result<Cow<'_, str>, PercentDecodeError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `input` | `&str` | The text to decode. |

## Returns

`Result<Cow<'_, str>, PercentDecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`PercentDecodeError::InvalidEscape`](#error-type-percentdecodeerror) for a `%` not followed by two hex digits, and
[`PercentDecodeError::InvalidUtf8`](#error-type-percentdecodeerror) when the decoded bytes are not valid UTF-8.

## Examples

```rust
use helpers4::url::percent_decode;

assert_eq!(percent_decode("caf%C3%A9 %26 more")?, "café & more");
assert!(percent_decode("100%").is_err());
```

## Error type: PercentDecodeError

Why a string could not be percent-decoded.

```rust
use helpers4::url::PercentDecodeError;

#[non_exhaustive]
pub enum PercentDecodeError {
    /// A `%` that is not followed by two hexadecimal digits.
    InvalidEscape {
        /// Byte offset of the `%` in the input that was being decoded.
        index: usize,
    },
    /// The decoded bytes are not valid UTF-8.
    InvalidUtf8,
}
```

## Source

[src/url/percent_decode.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/percent_decode.rs#L32)
