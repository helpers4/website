---
title: "media_type_of_path"
description: "Finds the media type of a file from the extension of its path or URL: images, fonts, web documents, scripts and styles, data, audio and video."
sidebar:
  label: "media_type_of_path"
---

Finds the media type of a file from the extension of its path or URL: images, fonts, web
documents, scripts and styles, data, audio and video. Case is ignored, and a query string or
fragment after the path is skipped. Pass it where a server or a blob needs a `Content-Type`.

## Import

```rust
use helpers4::bytes::media_type_of_path;
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
pub fn media_type_of_path(path: &str) -> Option<&'static str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `&str` | A file path or URL. |

## Returns

`Option<&'static str>` — The media type (`"image/webp"`, ...), or `None` for an unknown or missing extension.

## Examples

```rust
use helpers4::bytes::media_type_of_path;

assert_eq!(media_type_of_path("layers/a@2x.webp"), Some("image/webp"));
assert_eq!(media_type_of_path("/fonts/Inter.WOFF2?v=3"), Some("font/woff2"));
assert_eq!(media_type_of_path("LICENSE"), None);
```

## Source

[src/bytes/media_type_of_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/bytes/media_type_of_path.rs#L60)
