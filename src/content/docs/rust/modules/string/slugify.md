---
title: "slugify"
description: "Converts s into a lowercase, hyphen-separated slug safe for URLs."
sidebar:
  label: "slugify"
---

Converts `s` into a lowercase, hyphen-separated slug safe for URLs.

Letters and digits (Unicode included) are kept and lowercased, apostrophes are dropped, and
every other run of characters becomes a single hyphen; leading and trailing hyphens are
never produced. Diacritics are **not** stripped: `"café"` stays `"café"`.

## Import

```rust
use helpers4::string::slugify;
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
pub fn slugify(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::slugify;

assert_eq!(slugify("Hello World!"), "hello-world");
assert_eq!(slugify("  It's  a --- test "), "its-a-test");
assert_eq!(slugify("!!!"), "");
```

## Source

[src/string/slugify.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/string/slugify.rs#L21)
