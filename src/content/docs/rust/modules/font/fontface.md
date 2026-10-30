---
title: "FontFace"
description: "A face of a font family, with the properties CSS font matching compares."
sidebar:
  label: "FontFace"
---

A face of a font family, with the properties CSS font matching compares. A variable face
covers a weight range.

## Import

```rust
use helpers4::font::FontFace;
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
pub struct FontFace { /* private fields */ }
```

## Examples

```rust
use helpers4::font::{FontFace, FontStyle};

let bold = FontFace::new(700.0, FontStyle::Normal);
let variable = FontFace::variable(100.0, 900.0, FontStyle::Italic);
assert_eq!((bold.weight_min, bold.weight_max), (700.0, 700.0));
assert_eq!((variable.weight_min, variable.weight_max), (100.0, 900.0));
```

## Source

[src/font/font_face.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/font_face.rs#L21)
