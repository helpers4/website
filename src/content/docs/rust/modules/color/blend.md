---
title: "blend"
description: "Composites a source color over a backdrop with a blend mode, as the browser does for mix-blend-mode (W3C Compositing and Blending Level 1, source-over)."
sidebar:
  label: "blend"
---

Composites a source color over a backdrop with a blend mode, as the browser does for
`mix-blend-mode` (W3C Compositing and Blending Level 1, source-over). Both colors are straight
(non-premultiplied); the maths run in premultiplied space and the result is straight again,
each channel and the alpha rounded to the nearest 8-bit value.

## Import

```rust
use helpers4::color::blend;
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
pub fn blend(backdrop: Rgba, source: Rgba, mode: BlendMode) -> Rgba
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `backdrop` | `Rgba` | The color underneath. |
| `source` | `Rgba` | The color painted over it. |
| `mode` | `BlendMode` | The blend mode; `BlendMode::Normal` is a plain alpha composite. |

## Returns

`Rgba` — The straight result. Transparent black when both colors are fully transparent.

## Examples

```rust
use helpers4::color::{blend, BlendMode, Rgba};

let red = Rgba::new(255, 0, 0, 255);
let half_blue = Rgba::new(0, 0, 255, 128);
assert_eq!(blend(red, half_blue, BlendMode::Normal), Rgba::new(127, 0, 128, 255));

let orange = Rgba::new(200, 100, 50, 255);
let gray = Rgba::new(100, 100, 100, 255);
assert_eq!(blend(orange, gray, BlendMode::Multiply), Rgba::new(78, 39, 20, 255));
```

## Source

[src/color/blend.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/blend.rs#L198)
