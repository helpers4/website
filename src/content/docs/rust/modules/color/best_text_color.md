---
title: "best_text_color"
description: "Picks black or white text, whichever contrasts more with background."
sidebar:
  label: "best_text_color"
---

Picks black or white text, whichever contrasts more with `background`.

Compares the WCAG [`contrast_ratio`](/rust/modules/color/contrast_ratio/) of both and returns the winner
(black on a tie), so the text stays as readable as it can be without you choosing a color per
background by hand.

## Import

```rust
use helpers4::color::best_text_color;
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
pub fn best_text_color(background: Rgb) -> Rgb
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `background` | `Rgb` | The color the text will sit on. |

## Returns

`Rgb` — Black (`#000000`) or white (`#ffffff`).

## Examples

```rust
use helpers4::color::{best_text_color, Rgb};

assert_eq!(best_text_color(Rgb::parse("#ffeb3b")?), Rgb::new(0, 0, 0)); // on yellow
assert_eq!(best_text_color(Rgb::parse("#0d47a1")?), Rgb::new(255, 255, 255)); // on dark blue
```

## Source

[src/color/best_text_color.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/color/best_text_color.rs#L31)
