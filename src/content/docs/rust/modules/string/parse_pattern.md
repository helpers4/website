---
title: "parse_pattern"
description: "Reads a setting that is either a regular expression or a glob: /source/flags is a regular expression when every flag is valid (d, g, i, m, s, u, v, y), anything else is a glob."
sidebar:
  label: "parse_pattern"
---

Reads a setting that is either a regular expression or a glob: `/source/flags` is a regular
expression when every flag is valid (`d`, `g`, `i`, `m`, `s`, `u`, `v`, `y`), anything else is
a glob. For font substitution rules, ignore lists, filters. Note that `/usr/lib/img` is the
regular expression `usr/lib` with the flags `img`: for paths, build a [`Pattern::Glob`](/rust/modules/string/pattern/)
yourself.

The regular expression is returned as text, since this crate has no regex engine; the source
is not validated.

## Import

```rust
use helpers4::string::parse_pattern;
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

## Signature

```rust
pub fn parse_pattern(pattern: &str) -> Pattern
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `pattern` | `&str` | A `/source/flags` regular expression or a glob. |

## Returns

`Pattern` — The [`Pattern`](/rust/modules/string/pattern/).

## Examples

```rust
use helpers4::string::{parse_pattern, Pattern};

assert_eq!(
    parse_pattern("/^SF Pro/i"),
    Pattern::RegExp { source: "^SF Pro".to_string(), flags: "i".to_string() }
);
assert_eq!(parse_pattern("/src/*.ts/x"), Pattern::Glob("/src/*.ts/x".to_string()));
```

## Source

[src/string/parse_pattern.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/parse_pattern.rs#L58)
