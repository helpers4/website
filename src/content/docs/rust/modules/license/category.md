---
title: "Category"
description: "How a license treats the code that uses it: the main families, from most to least permissive."
sidebar:
  label: "Category"
---

How a license treats the code that uses it: the main families, from most to least permissive.

## Import

```rust
use helpers4::license::Category;
```

Cargo feature `license` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features license
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["license"] }
```

## Definition

```rust
pub enum Category {
    /// No restriction beyond keeping the notice (MIT, Apache-2.0, BSD).
    Permissive,
    /// Copyright waived or dedicated to the public domain (CC0-1.0, Unlicense).
    PublicDomain,
    /// Changes to the licensed files must stay open, but a program that merely uses them need not
    /// (MPL-2.0, LGPL).
    WeakCopyleft,
    /// A program that includes the code must be released under the same license (GPL).
    StrongCopyleft,
    /// Like strong copyleft, and it also applies when the program is only offered over a network
    /// (AGPL, SSPL).
    NetworkCopyleft,
}
```

## Examples

```rust
use helpers4::license::{lookup, Category};

assert_eq!(lookup("MIT").map(|info| info.category()), Some(Category::Permissive));
assert_eq!(lookup("GPL-3.0-only").map(|info| info.category()), Some(Category::StrongCopyleft));
```

## Source

[src/license/category.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/category.rs#L16)
