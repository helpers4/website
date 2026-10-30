---
title: "Pattern"
description: "A pattern read by parse_pattern: a glob, or a regular expression kept as text for the regex engine of your choice (this crate has none)."
sidebar:
  label: "Pattern"
---

A pattern read by [`parse_pattern`](/rust/modules/string/parse_pattern/): a glob, or a regular expression kept as text for the
regex engine of your choice (this crate has none).

## Import

```rust
use helpers4::string::Pattern;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["string"] }
```

## Definition

```rust
#[non_exhaustive]
pub enum Pattern {
    /// A glob, to use with [`match_glob`](super::match_glob).
    Glob(String),
    /// A regular expression written `/source/flags`.
    RegExp {
        /// The source, without the slashes.
        source: String,
        /// The flags (any of `d`, `g`, `i`, `m`, `s`, `u`, `v`, `y`), possibly empty.
        flags: String,
    },
}
```

## Examples

```rust
use helpers4::string::{parse_pattern, Pattern};

assert_eq!(parse_pattern("SF Pro*"), Pattern::Glob("SF Pro*".to_string()));
```

## Source

[src/string/parse_pattern.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/parse_pattern.rs#L17)
