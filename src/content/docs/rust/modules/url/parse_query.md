---
title: "parse_query"
description: "Parses a query string (a=1&b=two) into its key-value pairs, decoded, in order."
sidebar:
  label: "parse_query"
---

Parses a query string (`a=1&b=two`) into its key-value pairs, decoded, in order.

A leading `?` is ignored. Pairs are separated by `&`; empty pairs are skipped; a pair without
`=` has an empty value; only the first `=` splits key from value. Repeated keys are all kept.
Both keys and values are decoded the way HTML forms are: `+` is a space and `%XX` is a byte.

## Import

```rust
use helpers4::url::parse_query;
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
pub fn parse_query(query: &str) -> Result<Vec<(String, String)>, PercentDecodeError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `query` | `&str` | The query string, with or without the leading `?`. |

## Returns

`Result<Vec<(String, String)>, PercentDecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

A [`PercentDecodeError`](#error-type-percentdecodeerror) for an invalid escape in a key or a value (its `index` is a byte
offset within that key or value).

## Examples

```rust
use helpers4::url::parse_query;

assert_eq!(
    parse_query("?q=rust+lang&page=2&flag")?,
    vec![
        ("q".to_string(), "rust lang".to_string()),
        ("page".to_string(), "2".to_string()),
        ("flag".to_string(), String::new()),
    ]
);
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

[src/url/parse_query.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/parse_query.rs#L37)
