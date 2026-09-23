---
title: "Color"
description: "A terminal color for Style."
sidebar:
  label: "Color"
---

A terminal color for [`Style`](/rust/modules/ansi/style/).

The 8 standard colors and their bright variants work everywhere; [`Color::Ansi256`](/rust/modules/ansi/color/) and
[`Color::Rgb`](/rust/modules/color/rgb/) need a terminal that supports 256 or true colors.

## Import

```rust
use helpers4::ansi::Color;
```

Cargo feature `ansi` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ansi
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ansi"] }
```

## Definition

```rust
pub enum Color {
    /// Black.
    Black,
    /// Red.
    Red,
    /// Green.
    Green,
    /// Yellow.
    Yellow,
    /// Blue.
    Blue,
    /// Magenta.
    Magenta,
    /// Cyan.
    Cyan,
    /// White (light grey on most terminals).
    White,
    /// Bright black (dark grey).
    BrightBlack,
    /// Bright red.
    BrightRed,
    /// Bright green.
    BrightGreen,
    /// Bright yellow.
    BrightYellow,
    /// Bright blue.
    BrightBlue,
    /// Bright magenta.
    BrightMagenta,
    /// Bright cyan.
    BrightCyan,
    /// Bright white.
    BrightWhite,
    /// A color of the 256-color palette, `0..=255`.
    Ansi256(u8),
    /// A true color.
    Rgb(u8, u8, u8),
}
```

## Examples

```rust
use helpers4::ansi::{Color, Style};

assert_eq!(Style::new().fg(Color::Green).paint("ok"), "\u{1b}[32mok\u{1b}[0m");
```

## Source

[src/ansi/color.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ansi/color.rs#L18)
