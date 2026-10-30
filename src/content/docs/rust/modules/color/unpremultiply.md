---
title: "unpremultiply"
description: "Divides the color channels by the alpha, the inverse of premultiply."
sidebar:
  label: "unpremultiply"
---

Divides the color channels by the alpha, the inverse of [`premultiply`](/rust/modules/color/premultiply/).
A fully transparent color (alpha `0`) holds no color, so it gives transparent black. Channels
are clamped to 255 and rounded to 8 bits.

## Import

```rust
use helpers4::color::unpremultiply;
```

Cargo feature `color` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features color
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["color"] }
```

## Signature

```rust
pub fn unpremultiply(color: Rgba) -> Rgba
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `color` | `Rgba` | The premultiplied color. |

## Returns

`Rgba` — The straight color, with the same alpha.

## Examples

```rust
use helpers4::color::{unpremultiply, Rgba};

assert_eq!(unpremultiply(Rgba::new(100, 50, 25, 128)), Rgba::new(199, 100, 50, 128));
assert_eq!(unpremultiply(Rgba::new(9, 9, 9, 0)), Rgba::new(0, 0, 0, 0));
```

## Source

[src/color/unpremultiply.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/unpremultiply.rs#L29)
