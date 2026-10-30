---
title: "weight_of_style"
description: "The CSS weight a style name stands for, as design tools and font files write it: Thin 100, ExtraLight 200, Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800, Black 900, ExtraBlack 950."
sidebar:
  label: "weight_of_style"
---

The CSS weight a style name stands for, as design tools and font files write it: `Thin` 100,
`ExtraLight` 200, `Light` 300, `Regular` 400, `Medium` 500, `SemiBold` 600, `Bold` 700,
`ExtraBold` 800, `Black` 900, `ExtraBlack` 950. Case, spaces, hyphens and underscores are
ignored (`"Semi Bold Italic"`, `"semi-bold"`, `"SEMIBOLD"`), and so are other words such as
`Italic` or `Condensed`.

## Import

```rust
use helpers4::font::weight_of_style;
```

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["font"] }
```

## Signature

```rust
pub fn weight_of_style(style: &str) -> f64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `style` | `&str` | The style name. |

## Returns

`f64` — The weight, or `400.0` when the name holds no weight word.

## Examples

```rust
use helpers4::font::weight_of_style;

assert_eq!(weight_of_style("Semi Bold Italic"), 600.0);
assert_eq!(weight_of_style("Black"), 900.0);
assert_eq!(weight_of_style("Italic"), 400.0);
```

## Source

[src/font/weight_of_style.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/weight_of_style.rs#L54)
