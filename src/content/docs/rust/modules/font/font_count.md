---
title: "font_count"
description: "How many fonts a font file holds: the number of fonts of a collection (.ttc), 1 for a TrueType, OpenType or WOFF file."
sidebar:
  label: "font_count"
---

How many fonts a font file holds: the number of fonts of a collection (`.ttc`), 1 for a
TrueType, OpenType or WOFF file. Only the first bytes are read; the fonts themselves are not
parsed.

## Import

```rust
use helpers4::font::font_count;
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
pub fn font_count(bytes: &[u8]) -> Result<usize, FontError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The font file. |

## Returns

`Result<usize, FontError>` — The number of fonts, to use as the bound of the `index` of [`read_font_at`](/rust/modules/font/read_font_at/).

## Errors

A [`FontError`](#error-type-fonterror) for data that is not a supported font, or is truncated.

## Examples

```rust
use helpers4::font::{font_count, FontError};

assert_eq!(font_count(b"not a font"), Err(FontError::UnknownFormat));
assert_eq!(font_count(b"\0\x01\0\0\0\0\0\0"), Ok(1));
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

[src/font/font_count.rs](https://github.com/helpers4/rust/blob/v0.0.11/src/font/font_count.rs#L31)
