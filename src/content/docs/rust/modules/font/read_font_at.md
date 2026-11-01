---
title: "read_font_at"
description: "Reads what the font number index of a file says about itself, as read_font does for the first one: the way to read the other fonts of a collection (.ttc), whose count font_count gives."
sidebar:
  label: "read_font_at"
---

Reads what the font number `index` of a file says about itself, as [`read_font`](/rust/modules/font/read_font/)
does for the first one: the way to read the other fonts of a collection (`.ttc`), whose count
[`font_count`](/rust/modules/font/font_count/) gives. Any other file holds the single font number 0.

## Import

```rust
use helpers4::font::read_font_at;
```

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.11", default-features = false, features = ["font"] }
```

## Signature

```rust
pub fn read_font_at(bytes: &[u8], index: usize) -> Result<FontInfo, FontError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The font file. |
| `index` | `usize` | The font to read, from 0. |

## Returns

`Result<FontInfo, FontError>` — The [`FontInfo`](/rust/modules/font/fontinfo/).

## Errors

A [`FontError`](#error-type-fonterror) as for [`read_font`](/rust/modules/font/read_font/), and [`FontError::IndexOutOfRange`](#error-type-fonterror)
when the file holds no font number `index`.

## Examples

```rust
use helpers4::font::{read_font_at, FontError};

assert_eq!(read_font_at(b"not a font", 0), Err(FontError::UnknownFormat));
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
    /// The font number asked for is not in the file: a collection holds fewer fonts, and any
    /// other file holds only the font number 0.
    IndexOutOfRange,
}
```

## Source

[src/font/read_font_at.rs](https://github.com/helpers4/rust/blob/v0.0.11/src/font/read_font_at.rs#L134)
