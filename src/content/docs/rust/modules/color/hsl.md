---
title: "Hsl"
description: "A color as hue, saturation and lightness."
sidebar:
  label: "Hsl"
---

A color as hue, saturation and lightness.

The hue is in degrees, `0.0..360.0`; saturation and lightness are fractions from `0.0` to `1.0`.
[`Hsl::new`](/rust/modules/color/hsl/) brings any input into those ranges. Get one from [`Rgb::to_hsl`](/rust/modules/color/rgb/) and go back with
[`Hsl::to_rgb`](/rust/modules/color/hsl/).

## Import

```rust
use helpers4::color::Hsl;
```

Cargo feature `color` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features color
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["color"] }
```

## Definition

```rust
pub struct Hsl { /* private fields */ }
```

## Examples

```rust
use helpers4::color::{Hsl, Rgb};

let teal = Hsl::new(180.0, 1.0, 0.25);
assert_eq!(teal.to_rgb(), Rgb::new(0, 128, 128));
assert_eq!(Hsl::new(-90.0, 2.0, -1.0), Hsl::new(270.0, 1.0, 0.0));
```

## Methods

### `new`

```rust
pub fn new(h: f64, s: f64, l: f64) -> Self
```

Builds a color, normalizing the values: the hue wraps around 360 degrees, saturation and
lightness are clamped to `0.0..=1.0`, and a `NaN` counts as `0.0`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `h` | `f64` | The hue in degrees. |
| `s` | `f64` | The saturation, `0.0` (grey) to `1.0` (vivid). |
| `l` | `f64` | The lightness, `0.0` (black) to `1.0` (white). |

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

### `l`

```rust
pub fn l(self) -> f64
```

The lightness.

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

[src/color/hsl.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/color/hsl.rs#L23)
