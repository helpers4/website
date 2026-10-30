---
title: "BlendMode"
description: "The blend modes of the W3C Compositing and Blending specification, the same ones as CSS mix-blend-mode."
sidebar:
  label: "BlendMode"
---

The blend modes of the W3C Compositing and Blending specification, the same ones as CSS
`mix-blend-mode`. The last four ([`Hue`](#hue), [`Saturation`](#saturation),
[`Color`](#color), [`Luminosity`](#luminosity)) are non-separable: they mix the
three channels together instead of one channel at a time.

## Import

```rust
use helpers4::color::BlendMode;
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

## Definition

```rust
#[non_exhaustive]
pub enum BlendMode {
    /// The source replaces the backdrop (a plain alpha composite). The default.
    #[default]
    Normal,
    /// Multiplies the channels: always darker.
    Multiply,
    /// The inverse of [`Multiply`](Self::Multiply): always lighter.
    Screen,
    /// [`Multiply`](Self::Multiply) or [`Screen`](Self::Screen) depending on the backdrop.
    Overlay,
    /// The darker of the two, per channel.
    Darken,
    /// The lighter of the two, per channel.
    Lighten,
    /// Brightens the backdrop to reflect the source.
    ColorDodge,
    /// Darkens the backdrop to reflect the source.
    ColorBurn,
    /// [`Multiply`](Self::Multiply) or [`Screen`](Self::Screen) depending on the source.
    HardLight,
    /// A softer [`HardLight`](Self::HardLight).
    SoftLight,
    /// The absolute difference of the two.
    Difference,
    /// Like [`Difference`](Self::Difference), with less contrast.
    Exclusion,
    /// The hue of the source with the saturation and luminosity of the backdrop.
    Hue,
    /// The saturation of the source with the hue and luminosity of the backdrop.
    Saturation,
    /// The hue and saturation of the source with the luminosity of the backdrop.
    Color,
    /// The luminosity of the source with the hue and saturation of the backdrop.
    Luminosity,
}
```

## Examples

```rust
use helpers4::color::BlendMode;

assert_eq!(BlendMode::default(), BlendMode::Normal);
```

## Source

[src/color/blend.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/blend.rs#L21)
