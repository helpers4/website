---
title: "FontStyle"
description: "The font-style of a face or a request."
sidebar:
  label: "FontStyle"
---

The `font-style` of a face or a request. Oblique angles are not compared.

## Import

```rust
use helpers4::font::FontStyle;
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

## Definition

```rust
#[non_exhaustive]
pub enum FontStyle {
    /// Upright. The default.
    #[default]
    Normal,
    /// A true italic.
    Italic,
    /// A slanted upright.
    Oblique,
}
```

## Examples

```rust
use helpers4::font::FontStyle;

assert_eq!(FontStyle::default(), FontStyle::Normal);
```

## Source

[src/font/font_style.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/font_style.rs#L16)
