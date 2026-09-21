---
title: "capitalize"
description: "Uppercases the first character of s and leaves the rest untouched."
sidebar:
  label: "capitalize"
---

Uppercases the first character of `s` and leaves the rest untouched.

Unicode-aware: a character whose uppercase form is several characters
(`ß` -> `SS`) is expanded accordingly.

## Import

```rust
use helpers4::string::capitalize;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.3", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn capitalize(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::capitalize;

assert_eq!(capitalize("hello world"), "Hello world");
assert_eq!(capitalize(""), "");
```

## Source

[src/string/capitalize.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/string/capitalize.rs#L19)
