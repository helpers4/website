---
title: "parse_size"
description: "Parses a human-written size such as \"1.5 KiB\", \"10MB\" or \"512\" into a number of bytes."
sidebar:
  label: "parse_size"
---

Parses a human-written size such as `"1.5 KiB"`, `"10MB"` or `"512"` into a number of bytes.

The number is a non-negative decimal (a fraction is allowed, at most 18 decimal digits are
used, and the result is rounded down), optionally followed by whitespace and a unit, matched
without regard to case:

- none or `B`: bytes;
- `KiB`, `MiB`, `GiB`, `TiB`, `PiB`, `EiB`, and the single letters `K`, `M`, `G`, `T`, `P`,
  `E`: powers of 1024;
- `KB`, `MB`, `GB`, `TB`, `PB`, `EB`: powers of 1000.

[`format_size`](/rust/modules/bytes/format_size/) writes the binary form back.

## Import

```rust
use helpers4::bytes::parse_size;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn parse_size(input: &str) -> Result<u64, ParseSizeError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `input` | `&str` | The size to parse. |

## Returns

`Result<u64, ParseSizeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns a [`ParseSizeError`](#error-type-parsesizeerror) for an empty string, something other than a number where one is
expected, an unknown unit, or a size that does not fit in a `u64`.

## Examples

```rust
use helpers4::bytes::parse_size;

assert_eq!(parse_size("1.5 KiB"), Ok(1536));
assert_eq!(parse_size("10MB"), Ok(10_000_000));
assert_eq!(parse_size("512"), Ok(512));
assert!(parse_size("ten").is_err());
```

## Error type: ParseSizeError

Why a string could not be parsed as a size.

```rust
use helpers4::bytes::ParseSizeError;

#[non_exhaustive]
pub enum ParseSizeError {
    /// The string is empty or only whitespace.
    Empty,
    /// A number was expected but something else was found.
    ExpectedNumber {
        /// Byte offset of the offending character in the input.
        index: usize,
    },
    /// The unit is not one of the known ones (`B`, `KB`, `KiB`, `K`, ...).
    UnknownUnit {
        /// Byte offset of the unit in the input.
        index: usize,
    },
    /// The size does not fit in a `u64`.
    Overflow,
}
```

## Source

[src/bytes/parse_size.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/parse_size.rs#L39)
