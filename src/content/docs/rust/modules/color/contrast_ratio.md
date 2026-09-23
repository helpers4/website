---
title: "contrast_ratio"
description: "The WCAG contrast ratio between two colors, from 1.0 (identical) to 21.0 (black on white)."
sidebar:
  label: "contrast_ratio"
---

The WCAG contrast ratio between two colors, from `1.0` (identical) to `21.0` (black on white).

It is `(L1 + 0.05) / (L2 + 0.05)` where `L1` is the relative luminance of the lighter color
and `L2` of the darker one, so the order of the arguments does not matter. WCAG 2.x asks for
at least `4.5` for normal text and `3.0` for large text (level AA), `7.0` and `4.5` for AAA.

## Import

```rust
use helpers4::color::contrast_ratio;
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
pub fn contrast_ratio(a: Rgb, b: Rgb) -> f64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `Rgb` | One color, for instance the text. |
| `b` | `Rgb` | The other color, for instance its background. |

## Returns

`f64` — The ratio, `1.0..=21.0`.

## Examples

```rust
use helpers4::color::{contrast_ratio, Rgb};

let ratio = contrast_ratio(Rgb::new(0, 0, 0), Rgb::new(255, 255, 255));
assert!((ratio - 21.0).abs() < 1e-9);
assert!(contrast_ratio(Rgb::parse("#767676")?, Rgb::new(255, 255, 255)) >= 4.5);
```

## Source

[src/color/contrast_ratio.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/color/contrast_ratio.rs#L33)
