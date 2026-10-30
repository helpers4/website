---
title: "is_italic"
description: "Whether a style name is italic or oblique, as design tools and font files write it (\"Italic\", \"Semi Bold Italic\", \"Light Oblique\")."
sidebar:
  label: "is_italic"
---

Whether a style name is italic or oblique, as design tools and font files write it
(`"Italic"`, `"Semi Bold Italic"`, `"Light Oblique"`). Case is ignored.

## Import

```rust
use helpers4::font::is_italic;
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
pub fn is_italic(style: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `style` | `&str` | The style name. |

## Returns

`bool` — `true` if the name holds `italic` or `oblique`.

## Examples

```rust
use helpers4::font::is_italic;

assert!(is_italic("Semi Bold Italic"));
assert!(is_italic("OBLIQUE"));
assert!(!is_italic("Bold"));
```

## Source

[src/font/is_italic.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/is_italic.rs#L26)
