---
title: "Hsb"
description: "A color as hue, saturation and brightness (also called HSV), the model of design tool color pickers."
sidebar:
  label: "Hsb"
---

A color as hue, saturation and brightness (also called HSV), the model of design tool color
pickers. Unlike [`Hsl`](/rust/modules/color/hsl/) lightness, brightness `1.0` is the pure color, not white.

The hue is in degrees, `0.0..360.0`; saturation and brightness are fractions from `0.0` to
`1.0`. [`Hsb::new`](/rust/modules/color/hsb/) brings any input into those ranges. Get one from [`Rgb::to_hsb`](/rust/modules/color/rgb/) and go
back with [`Hsb::to_rgb`](/rust/modules/color/hsb/).

## Import

```rust
use helpers4::color::Hsb;
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
pub struct Hsb { /* private fields */ }
```

## Examples

```rust
use helpers4::color::{Hsb, Rgb};

assert_eq!(Hsb::new(0.0, 1.0, 1.0).to_rgb(), Rgb::new(255, 0, 0));
assert_eq!(Rgb::new(0, 128, 128).to_hsb(), Hsb::new(180.0, 1.0, 128.0 / 255.0));
```

## Methods

### `new`

```rust
pub fn new(h: f64, s: f64, b: f64) -> Self
```

Builds a color, normalizing the values: the hue wraps around 360 degrees, saturation and
brightness are clamped to `0.0..=1.0`, and a `NaN` counts as `0.0`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `h` | `f64` | The hue in degrees. |
| `s` | `f64` | The saturation, `0.0` (grey) to `1.0` (vivid). |
| `b` | `f64` | The brightness, `0.0` (black) to `1.0` (the pure color). |

**Returns**

`Self` — The normalized color.

### `h`

```rust
pub fn h(self) -> f64
```

The hue in degrees.

**Returns**

`f64` — A value in `0.0..360.0`.

### `s`

```rust
pub fn s(self) -> f64
```

The saturation.

**Returns**

`f64` — A value from `0.0` to `1.0`.

### `b`

```rust
pub fn b(self) -> f64
```

The brightness.

**Returns**

`f64` — A value from `0.0` to `1.0`.

### `to_rgb`

```rust
pub fn to_rgb(self) -> Rgb
```

The nearest 8-bit sRGB color.

**Returns**

`Rgb` — The [`Rgb`](/rust/modules/color/rgb/) color, each channel rounded to the nearest integer.

## Source

[src/color/hsb.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/hsb.rs#L23)
