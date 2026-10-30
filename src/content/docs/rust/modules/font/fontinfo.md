---
title: "FontInfo"
description: "What a font file says about itself, as read_font reads it."
sidebar:
  label: "FontInfo"
---

What a font file says about itself, as [`read_font`](/rust/modules/font/read_font/) reads it.

## Import

```rust
use helpers4::font::FontInfo;
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
pub struct FontInfo { /* private fields */ }
```

## Examples

```rust
use helpers4::font::{FontFace, FontInfo, FontStyle};

let info = FontInfo {
    family: "Inter".to_string(),
    style: "Bold Italic".to_string(),
    postscript_name: Some("Inter-BoldItalic".to_string()),
    weight: 700.0,
    weight_range: None,
    italic: true,
};
assert_eq!(info.to_face(), FontFace::new(700.0, FontStyle::Italic));
```

## Methods

### `to_face`

```rust
pub fn to_face(&self) -> FontFace
```

The face to give to [`pick_closest`](/rust/modules/font/pick_closest/): a variable font covers its
`wght` range, a static one its weight.

**Returns**

`FontFace` — The face, italic when the font is.

## Source

[src/font/font_info.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/font_info.rs#L25)
