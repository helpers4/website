---
title: "same_family"
description: "Whether two family names are the same family: compared without spaces or case, since design files and font files write \"SF Pro\", \"SFPro\" and \"sf pro\" for one family."
sidebar:
  label: "same_family"
---

Whether two family names are the same family: compared without spaces or case, since design
files and font files write `"SF Pro"`, `"SFPro"` and `"sf pro"` for one family.

## Import

```rust
use helpers4::font::same_family;
```

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["font"] }
```

## Signature

```rust
pub fn same_family(a: &str, b: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&str` | A family name. |
| `b` | `&str` | Another one. |

## Returns

`bool` — `true` if the names are equal once spaces are removed and case is ignored.

## Examples

```rust
use helpers4::font::same_family;

assert!(same_family("SF Pro", "sfpro"));
assert!(!same_family("SF Pro", "SF Mono"));
```

## Source

[src/font/same_family.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/same_family.rs#L32)
