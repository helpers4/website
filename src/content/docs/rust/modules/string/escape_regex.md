---
title: "escape_regex"
description: "Escapes regular expression metacharacters (."
sidebar:
  label: "escape_regex"
---

Escapes regular expression metacharacters (`. * + ? ^ $ ( ) [ ] { } | \`) in `s` so it can be
embedded literally in a regex pattern.

This crate has no regex engine of its own; use this before handing `s` to whichever one you
depend on (`regex`, `fancy-regex`, ...) when it should be matched character-for-character
instead of as a pattern.

## Import

```rust
use helpers4::string::escape_regex;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.7", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn escape_regex(s: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to escape. |

## Returns

`String` — `s` with every metacharacter preceded by a backslash.

## Examples

```rust
use helpers4::string::escape_regex;

assert_eq!(escape_regex("1 + 1 = 2?"), "1 \\+ 1 = 2\\?");
assert_eq!(escape_regex("plain text"), "plain text");
```

## Source

[src/string/escape_regex.rs](https://github.com/helpers4/rust/blob/v0.0.7/src/string/escape_regex.rs#L33)
