---
title: "mix"
description: "Blends two colors channel by channel."
sidebar:
  label: "mix"
---

Blends two colors channel by channel.

`t` is how far to go from `a` to `b`: `0.0` gives `a`, `1.0` gives `b`, `0.5` the midpoint. It
is clamped to `0.0..=1.0` (a `NaN` counts as `0.0`), and each channel is rounded to the nearest
integer. The blend happens in sRGB, without gamma correction, like CSS `color-mix(in srgb)`.

## Import

```rust
use helpers4::color::mix;
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

## Signature

```rust
pub fn mix(a: Rgb, b: Rgb, t: f64) -> Rgb
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `Rgb` | The color at `t = 0`. |
| `b` | `Rgb` | The color at `t = 1`. |
| `t` | `f64` | How far from `a` towards `b`, `0.0..=1.0`. |

## Returns

`Rgb` — The blended color.

## Examples

```rust
use helpers4::color::{mix, Rgb};

let red = Rgb::new(255, 0, 0);
let blue = Rgb::new(0, 0, 255);
assert_eq!(mix(red, blue, 0.5), Rgb::new(128, 0, 128));
assert_eq!(mix(red, blue, 0.0), red);
```

## Source

[src/color/mix.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/color/mix.rs#L34)
