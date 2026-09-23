---
title: "Rgb"
description: "An sRGB color with 8 bits per channel."
sidebar:
  label: "Rgb"
---

An sRGB color with 8 bits per channel.

Built with [`Rgb::new`](/rust/modules/color/rgb/) or parsed from text with [`Rgb::parse`](/rust/modules/env/parse/) (`#rgb`, `#rrggbb`,
`rgb(r, g, b)` or one of the 17 basic CSS color names). `Display` writes the `#rrggbb` form.

## Import

```rust
use helpers4::color::Rgb;
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
pub struct Rgb { /* private fields */ }
```

## Examples

```rust
use helpers4::color::Rgb;

let orange = Rgb::parse("#ff8800")?;
assert_eq!((orange.r(), orange.g(), orange.b()), (255, 136, 0));
assert_eq!(orange.to_string(), "#ff8800");
assert_eq!(Rgb::parse("rgb(0, 128, 255)")?, Rgb::new(0, 128, 255));
assert_eq!(Rgb::parse("Red")?.to_hex(), "#ff0000");
```

## Methods

### `new`

```rust
pub fn new(r: u8, g: u8, b: u8) -> Self
```

Builds a color from its three channels.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `r` | `u8` | Red, `0..=255`. |
| `g` | `u8` | Green, `0..=255`. |
| `b` | `u8` | Blue, `0..=255`. |

**Returns**

`Self` — The color.

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseColorError>
```

Parses a color written as `#rgb`, `#rrggbb`, `rgb(r, g, b)` or a basic CSS color name.

Surrounding whitespace is ignored, hex digits and names are case-insensitive. `#rgb`
repeats each digit (`#f80` is `#ff8800`). In `rgb(...)` the three whole numbers (`0..=255`)
may be separated by commas or spaces. The names are the 17 basic CSS keywords: `black`,
`silver`, `gray`, `white`, `maroon`, `red`, `purple`, `fuchsia`, `green`, `lime`, `olive`,
`yellow`, `navy`, `blue`, `teal`, `aqua` and `orange`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The color to parse. |

**Returns**

`Result<Self, ParseColorError>`

**Errors**

A [`ParseColorError`](#error-type-parsecolorerror) for an empty text, a `#` color with a bad length or digit, a
malformed or out-of-range `rgb(...)`, or an unknown name.

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

### `to_hex`

```rust
pub fn to_hex(self) -> String
```

The `#rrggbb` form, in lower case.

**Returns**

`String` — For instance `"#ff8800"`.

### `to_hsl`

```rust
pub fn to_hsl(self) -> Hsl
```

The same color as hue, saturation and lightness.

**Returns**

`Hsl` — The [`Hsl`](/rust/modules/color/hsl/) value. Converting it back with [`Hsl::to_rgb`](/rust/modules/color/hsl/) gives this color again.

### `luminance`

```rust
pub fn luminance(self) -> f64
```

The WCAG relative luminance: `0.0` for black, `1.0` for white.

The channels are linearized from sRGB and weighted by how bright the eye finds each
(0.2126 red, 0.7152 green, 0.0722 blue).

**Returns**

`f64` — A value from `0.0` to `1.0`.

### `lighten`

```rust
pub fn lighten(self, amount: f64) -> Self
```

Moves the color towards white.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `amount` | `f64` | How far to go, from `0.0` (unchanged) to `1.0` (white); out-of-range values are clamped. |

**Returns**

`Self` — The lighter color.

### `darken`

```rust
pub fn darken(self, amount: f64) -> Self
```

Moves the color towards black.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `amount` | `f64` | How far to go, from `0.0` (unchanged) to `1.0` (black); out-of-range values are clamped. |

**Returns**

`Self` — The darker color.

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

[src/color/rgb.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/color/rgb.rs#L28)
