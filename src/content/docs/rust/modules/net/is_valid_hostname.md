---
title: "is_valid_hostname"
description: "Checks that hostname is a valid hostname (RFC 1035 and RFC 1123, ASCII only)."
sidebar:
  label: "is_valid_hostname"
---

Checks that `hostname` is a valid hostname (RFC 1035 and RFC 1123, ASCII only).

The rules: at most 253 octets, not counting one optional trailing dot; labels of 1 to 63
octets made of ASCII letters, digits and hyphens; no label starts or ends with a hyphen. A
label may start with a digit, but the **last** label may not be a number (decimal like `1`, or
hexadecimal like `0x7f`): RFC 1123 section 2.1 keeps the top-level label alphabetic so that a
hostname is never mistaken for an address, and URL parsers do read `127.1`, `2130706433` or
`0x7f000001` as `127.0.0.1`. Underscores are refused (they are not hostname characters), and so
are non-ASCII characters: convert an internationalized name to its `xn--` form first.

This checks syntax only. It is not an SSRF check: a name that passes can still resolve to a
private address. To guard a server that fetches user-supplied URLs, parse the URL first, then
check the address you will actually connect to with
[`is_public_ip`](/rust/modules/net/is_public_ip/).

## Import

```rust
use helpers4::net::is_valid_hostname;
```

Cargo feature `net` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features net
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["net"] }
```

## Signature

```rust
pub fn is_valid_hostname(hostname: &str) -> Result<(), HostnameError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hostname` | `&str` |

## Returns

`Result<(), HostnameError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

A [`HostnameError`](#error-type-hostnameerror) naming the first rule that fails.

## Examples

```rust
use helpers4::net::{is_valid_hostname, HostnameError};

assert!(is_valid_hostname("example.com").is_ok());
assert!(is_valid_hostname("localhost.").is_ok());
assert_eq!(is_valid_hostname("-bad.example"), Err(HostnameError::HyphenEdge));
assert_eq!(is_valid_hostname("a..b"), Err(HostnameError::EmptyLabel));
assert_eq!(is_valid_hostname("127.0.0.1"), Err(HostnameError::NumericLastLabel));
```

## Error type: HostnameError

Why a string is not a valid hostname (see [`is_valid_hostname`](/rust/modules/net/is_valid_hostname/)).

```rust
use helpers4::net::HostnameError;

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

[src/net/is_valid_hostname.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/net/is_valid_hostname.rs#L37)
