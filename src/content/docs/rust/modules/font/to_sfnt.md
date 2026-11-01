---
title: "to_sfnt"
description: "The font file as the sfnt that shapers and rasterizers read (skrifa, ttf-parser, ...): a WOFF file is rebuilt with its tables decompressed; a TrueType, OpenType or collection file is already one and comes back as it is, without a copy."
sidebar:
  label: "to_sfnt"
---

The font file as the sfnt that shapers and rasterizers read (`skrifa`, `ttf-parser`, ...):
a WOFF file is rebuilt with its tables decompressed; a TrueType, OpenType or collection file
is already one and comes back as it is, without a copy. A collection keeps all its fonts:
open it with the same index as [`read_font_at`](/rust/modules/font/read_font_at/).

Checksums are neither verified nor recomputed: the table checksums are the ones the WOFF
file records.

## Import

```rust
use helpers4::font::to_sfnt;
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
pub fn to_sfnt(bytes: &[u8]) -> Result<Cow<'_, [u8]>, FontError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The font file. |

## Returns

`Result<Cow<'_, [u8]>, FontError>` — The sfnt bytes, borrowed from `bytes` unless the file was WOFF.

## Errors

A [`FontError`](#error-type-fonterror) for data that is not a supported font, is truncated, or holds a WOFF table
that does not decompress to its announced size.

## Examples

```rust
use helpers4::font::{to_sfnt, FontError};

let ttf = b"\0\x01\0\0\0\0\0\0\0\0\0\0";
assert_eq!(to_sfnt(ttf).unwrap().as_ref(), ttf);
assert_eq!(to_sfnt(b"wOF2....").err(), Some(FontError::UnsupportedWoff2));
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

[src/font/to_sfnt.rs](https://github.com/helpers4/rust/blob/v0.0.11/src/font/to_sfnt.rs#L38)
