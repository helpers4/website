---
title: "premultiply"
description: "Multiplies the color channels by the alpha, the form a renderer composites with (a translucent color then adds to what is underneath without a further multiplication)."
sidebar:
  label: "premultiply"
---

Multiplies the color channels by the alpha, the form a renderer composites with (a
translucent color then adds to what is underneath without a further multiplication).
Channels are rounded to 8 bits, so [`unpremultiply`](/rust/modules/color/unpremultiply/) gives back the
original only approximately for translucent colors, and not at all for alpha `0`.

## Import

```rust
use helpers4::color::premultiply;
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
pub fn premultiply(color: Rgba) -> Rgba
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `color` | `Rgba` | The straight color. |

## Returns

`Rgba` — The premultiplied color, with the same alpha.

## Examples

```rust
use helpers4::color::{premultiply, Rgba};

assert_eq!(premultiply(Rgba::new(200, 100, 50, 128)), Rgba::new(100, 50, 25, 128));
assert_eq!(premultiply(Rgba::new(200, 100, 50, 255)), Rgba::new(200, 100, 50, 255));
```

## Source

[src/color/premultiply.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/premultiply.rs#L30)
