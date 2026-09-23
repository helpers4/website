---
title: "is_slug"
description: "Checks whether s has the shape of an ASCII URL slug: non-empty, made only of lowercase ASCII letters, digits and hyphens, with no leading, trailing or doubled hyphen."
sidebar:
  label: "is_slug"
---

Checks whether `s` has the shape of an ASCII URL slug: non-empty, made only of lowercase
ASCII letters, digits and hyphens, with no leading, trailing or doubled hyphen.

This is ASCII-only by design, even though [`slugify`](/rust/modules/string/slugify/) keeps Unicode
letters (`slugify("café")` is `"café"`, which `is_slug` rejects): a slug meant to go
unescaped in a URL path is conventionally ASCII. For ASCII input, `is_slug(&slugify(s))` is
`true` whenever `slugify(s)` is not empty.

## Import

```rust
use helpers4::validate::is_slug;
```

Cargo feature `validate` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features validate
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["validate"] }
```

## Signature

```rust
pub fn is_slug(s: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to check. |

## Returns

`bool` — `true` when `s` already has the shape of a slug.

## Examples

```rust
use helpers4::validate::is_slug;

assert!(is_slug("hello-world"));
assert!(is_slug("v2"));
assert!(!is_slug("Hello-World"));
assert!(!is_slug("-leading"));
assert!(!is_slug("double--hyphen"));
assert!(!is_slug(""));
```

## Source

[src/validate/is_slug.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/validate/is_slug.rs#L34)
