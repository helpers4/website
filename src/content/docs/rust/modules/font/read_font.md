---
title: "read_font"
description: "Reads what a font file says about itself: its family (typographic first), style, PostScript name, weight or wght range and whether it is italic."
sidebar:
  label: "read_font"
---

Reads what a font file says about itself: its family (typographic first), style, PostScript
name, weight or `wght` range and whether it is italic. Reads TrueType and OpenType files
(`.ttf`, `.otf`), the first font of a collection (`.ttc`) and WOFF files; it does not
interpret glyphs and does not check checksums.

WOFF2 tables are Brotli-compressed, and this crate has no Brotli decoder: a WOFF2 file is a
[`FontError::UnsupportedWoff2`](#error-type-fonterror).

## Import

```rust
use helpers4::font::read_font;
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
pub fn read_font(bytes: &[u8]) -> Result<FontInfo, FontError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The font file. |

## Returns

`Result<FontInfo, FontError>` — The [`FontInfo`](/rust/modules/font/fontinfo/).

## Errors

A [`FontError`](#error-type-fonterror) for data that is not a supported font, is truncated, or has no `name` table
or no family name.

## Examples

```rust
use helpers4::font::{read_font, FontError};

assert_eq!(read_font(b"not a font"), Err(FontError::UnknownFormat));
assert_eq!(read_font(b"wOF2...."), Err(FontError::UnsupportedWoff2));
```

## Error type: FontError

Why a font file could not be read.

```rust
use helpers4::font::FontError;

#[non_exhaustive]
pub enum FontError {
    /// The data ends before a table directory, a table or a record it announces.
    Truncated,
    /// Not a TrueType, OpenType, TrueType collection or WOFF file.
    UnknownFormat,
    /// A WOFF2 file: its tables are Brotli-compressed, and this crate has no Brotli decoder.
    UnsupportedWoff2,
    /// A WOFF table whose compressed data is invalid or does not have its announced size.
    InvalidCompressedData,
    /// The file has no `name` table.
    MissingNameTable,
    /// The `name` table holds neither a typographic nor a plain family name.
    MissingFamily,
}
```

## Source

[src/font/read_font.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/read_font.rs#L138)
