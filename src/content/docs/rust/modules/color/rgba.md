---
title: "Rgba"
description: "An sRGB color with 8 bits per channel and an alpha (opacity) channel."
sidebar:
  label: "Rgba"
---

An sRGB color with 8 bits per channel and an alpha (opacity) channel.

[`Rgb`](/rust/modules/color/rgb/) is always opaque; `Rgba` adds the alpha of `#rrggbbaa` and `rgb(r g b / a)`. The alpha
is a `u8` like the other channels: `255` is opaque, `0` fully transparent. `Display` writes
the `#rrggbb` form when opaque and `#rrggbbaa` otherwise.

## Import

```rust
use helpers4::color::Rgba;
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
pub struct Rgba { /* private fields */ }
```

## Examples

```rust
use helpers4::color::{Rgb, Rgba};

let glass = Rgba::parse("#ff880080")?;
assert_eq!((glass.r(), glass.g(), glass.b(), glass.a()), (255, 136, 0, 128));
assert_eq!(glass.to_css(), "rgb(255 136 0 / 0.502)");
assert_eq!(glass.to_rgb(), Rgb::new(255, 136, 0)); // drops the alpha
assert_eq!(Rgba::parse("rgb(255 136 0 / 50%)")?.a(), 128);
```

## Methods

### `new`

```rust
pub fn new(r: u8, g: u8, b: u8, a: u8) -> Self
```

Builds a color from its four channels.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `r` | `u8` | Red, `0..=255`. |
| `g` | `u8` | Green, `0..=255`. |
| `b` | `u8` | Blue, `0..=255`. |
| `a` | `u8` | Alpha, `0` (transparent) to `255` (opaque). |

**Returns**

`Self` — The color.

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::new(255, 0, 0, 255).to_hex(), "#ff0000");
```

### `from_rgb`

```rust
pub fn from_rgb(rgb: Rgb, a: u8) -> Self
```

Adds an alpha to an opaque color.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `rgb` | `Rgb` | The color. |
| `a` | `u8` | Alpha, `0` (transparent) to `255` (opaque). |

**Returns**

`Self` — The color with that alpha.

**Examples**

```rust
use helpers4::color::{Rgb, Rgba};

assert_eq!(Rgba::from_rgb(Rgb::new(1, 2, 3), 4), Rgba::new(1, 2, 3, 4));
```

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseColorError>
```

Parses a color written as `#rgba`, `#rrggbbaa`, `rgb(r g b / a)`, `rgb(r, g, b, a)`,
`rgba(...)`, or any form [`Rgb::parse`](/rust/modules/env/parse/) reads (which is opaque).

The alpha of a function is a number (`0.5`) or a percentage (`50%`); like in CSS, a value
outside `0..=1` is clamped. Surrounding whitespace is ignored, and so is case.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The color to parse. |

**Returns**

`Result<Self, ParseColorError>` — The color.

**Errors**

A [`ParseColorError`](#error-type-parsecolorerror) for an empty text, a `#` color with a bad length or digit, a
malformed or out-of-range function, or an unknown name.

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::parse("#f808")?, Rgba::new(255, 136, 0, 136));
assert_eq!(Rgba::parse("rgba(0, 0, 0, 0.5)")?, Rgba::new(0, 0, 0, 128));
assert_eq!(Rgba::parse("red")?, Rgba::new(255, 0, 0, 255));
```

### `r`

```rust
pub fn r(self) -> u8
```

The red channel.

**Returns**

`u8` — A value from `0` to `255`.

### `g`

```rust
pub fn g(self) -> u8
```

The green channel.

**Returns**

`u8` — A value from `0` to `255`.

### `b`

```rust
pub fn b(self) -> u8
```

The blue channel.

**Returns**

`u8` — A value from `0` to `255`.

### `a`

```rust
pub fn a(self) -> u8
```

The alpha channel.

**Returns**

`u8` — A value from `0` (transparent) to `255` (opaque).

### `opacity`

```rust
pub fn opacity(self) -> f64
```

The alpha as an opacity.

**Returns**

`f64` — A value from `0.0` (transparent) to `1.0` (opaque).

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::new(0, 0, 0, 255).opacity(), 1.0);
assert_eq!(Rgba::new(0, 0, 0, 0).opacity(), 0.0);
```

### `from_unit`

```rust
pub fn from_unit(r: f64, g: f64, b: f64, a: f64) -> Self
```

Builds a color from channels given as floats from `0.0` to `1.0`, the way Figma, Sketch
and Penpot store them. Each value is clamped to that range (a `NaN` counts as `0.0`) and
rounded to the nearest 8-bit value.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `r` | `f64` | Red, `0.0` to `1.0`. |
| `g` | `f64` | Green, `0.0` to `1.0`. |
| `b` | `f64` | Blue, `0.0` to `1.0`. |
| `a` | `f64` | Alpha, `0.0` (transparent) to `1.0` (opaque). |

**Returns**

`Self` — The 8-bit color.

**Examples**

```rust
use helpers4::color::Rgba;

let orange = Rgba::from_unit(1.0, 0.5, 0.0, 0.5);
assert_eq!(orange, Rgba::new(255, 128, 0, 128));
assert_eq!(orange.to_hex(), "#ff800080");
```

### `to_unit`

```rust
pub fn to_unit(self) -> [f64; 4]
```

The channels as floats from `0.0` to `1.0`, the way Figma, Sketch and Penpot store them.

**Returns**

`[f64; 4]` — `[r, g, b, a]`.

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::new(255, 51, 0, 255).to_unit(), [1.0, 0.2, 0.0, 1.0]);
```

### `to_rgb`

```rust
pub fn to_rgb(self) -> Rgb
```

The same color without its alpha.

**Returns**

`Rgb` — The opaque [`Rgb`](/rust/modules/color/rgb/).

**Examples**

```rust
use helpers4::color::{Rgb, Rgba};

assert_eq!(Rgba::new(1, 2, 3, 4).to_rgb(), Rgb::new(1, 2, 3));
```

### `to_hex`

```rust
pub fn to_hex(self) -> String
```

The `#rrggbb` form when opaque, `#rrggbbaa` otherwise, in lower case.

**Returns**

`String` — For instance `"#ff8800"` or `"#ff880080"`.

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::new(255, 136, 0, 128).to_hex(), "#ff880080");
```

### `to_css`

```rust
pub fn to_css(self) -> String
```

The CSS form: `rgb(r g b)` when opaque, `rgb(r g b / alpha)` otherwise, with the alpha
as an opacity rounded to 3 decimals.

**Returns**

`String` — For instance `"rgb(255 136 0 / 0.502)"`.

**Examples**

```rust
use helpers4::color::Rgba;

assert_eq!(Rgba::new(255, 136, 0, 255).to_css(), "rgb(255 136 0)");
assert_eq!(Rgba::new(255, 136, 0, 0).to_css(), "rgb(255 136 0 / 0)");
```

## Error type: ParseColorError

Why a string could not be parsed as a color.

```rust
use helpers4::color::ParseColorError;

#[non_exhaustive]
pub enum ParseColorError {
    /// The string is empty or only whitespace.
    Empty,
    /// A `#` color that does not have 3 or 6 hexadecimal digits.
    InvalidLength {
        /// The number of characters after the `#`.
        length: usize,
    },
    /// A character that is not a hexadecimal digit.
    InvalidDigit {
        /// Byte offset of the character in the input.
        index: usize,
    },
    /// An `rgb(...)` that does not hold exactly three whole numbers.
    InvalidFunction,
    /// A channel above 255 in `rgb(...)`.
    OutOfRange,
    /// Neither a `#hex` color, an `rgb(...)`, nor a known color name.
    UnknownName,
}
```

## Source

[src/color/rgba.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/color/rgba.rs#L29)
