---
title: "color"
description: "Colors without a dependency: parsing, hex, HSL, blending and WCAG contrast."
sidebar:
  label: "≡ Overview"
  order: 0
---

Colors without a dependency: parsing, hex, HSL, blending and WCAG contrast.

[`Rgb`](/rust/modules/color/rgb/) is an 8-bit sRGB color that parses from `#rgb`, `#rrggbb`, `rgb(r, g, b)` or a basic CSS name;
[`Hsl`](/rust/modules/color/hsl/) converts to and from it; `mix` blends two colors; `contrast_ratio` and `best_text_color` answer
"is this text readable on that background".

## Install

Cargo feature `color` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features color
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["color"] }
```

Import path: `helpers4::color`.

## Items

| Item | What it does |
| --- | --- |
| [`best_text_color`](/rust/modules/color/best_text_color/) | Picks black or white text, whichever contrasts more with `background`. |
| [`contrast_ratio`](/rust/modules/color/contrast_ratio/) | The WCAG contrast ratio between two colors, from `1.0` (identical) to `21.0` (black on white). |
| [`Hsl`](/rust/modules/color/hsl/) | A color as hue, saturation and lightness. |
| [`mix`](/rust/modules/color/mix/) | Blends two colors channel by channel. |
| [`Rgb`](/rust/modules/color/rgb/) | An sRGB color with 8 bits per channel. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseColorError`](/rust/modules/color/rgb/#error-type-parsecolorerror) | [`Rgb`](/rust/modules/color/rgb/) |
