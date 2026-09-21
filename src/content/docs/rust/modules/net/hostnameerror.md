---
title: "HostnameError"
description: "Why a string is not a valid hostname (see is_valid_hostname)."
sidebar:
  label: "HostnameError"
---

Why a string is not a valid hostname (see [`is_valid_hostname`](/rust/modules/net/is_valid_hostname/)).

## Import

```rust
use helpers4::net::HostnameError;
```

Cargo feature `net` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features net
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.3", default-features = false, features = ["net"] }
```

## Definition

```rust
#[non_exhaustive]
pub enum HostnameError {
    /// The string is empty.
    Empty,
    /// The name is longer than 253 octets (not counting an optional trailing dot).
    TooLong,
    /// A label is empty: a leading dot, two consecutive dots, or a lone `"."`.
    EmptyLabel,
    /// A label is longer than 63 octets.
    LabelTooLong,
    /// A character other than an ASCII letter, digit or hyphen.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
    /// A label starts or ends with a hyphen.
    HyphenEdge,
    /// The last label is a number (`127.1`, `2130706433`, `0x7f`): URL parsers read such a name as
    /// an IPv4 address, not as a hostname.
    NumericLastLabel,
}
```

## Source

[src/net/error.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/net/error.rs#L10)
