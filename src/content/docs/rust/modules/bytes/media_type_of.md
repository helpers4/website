---
title: "media_type_of"
description: "Finds the media type of an image from its first bytes (its magic number), whatever its name says: PNG, JPEG, GIF, WebP, AVIF and SVG."
sidebar:
  label: "media_type_of"
---

Finds the media type of an image from its first bytes (its magic number), whatever its name
says: PNG, JPEG, GIF, WebP, AVIF and SVG. SVG has no magic number, so it is recognized as
text whose first element is `<svg`, possibly after a byte order mark, whitespace, an XML
declaration, comments or a doctype.

## Import

```rust
use helpers4::bytes::media_type_of;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn media_type_of(bytes: &[u8]) -> Option<&'static str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The start of the file: 512 bytes are enough for every type but a long SVG prolog. |

## Returns

`Option<&'static str>` — The media type (`"image/png"`, ...), or `None` when it is none of these.

## Examples

```rust
use helpers4::bytes::media_type_of;

assert_eq!(media_type_of(&[0x89, b'P', b'N', b'G', 0x0d, 0x0a, 0x1a, 0x0a]), Some("image/png"));
assert_eq!(media_type_of(b"<svg xmlns='http://www.w3.org/2000/svg'/>"), Some("image/svg+xml"));
assert_eq!(media_type_of(b"hello"), None);
```

## Source

[src/bytes/media_type_of.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/bytes/media_type_of.rs#L68)
