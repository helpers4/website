---
title: "FitMode"
description: "How fit sizes content in a container, as CSS object-fit."
sidebar:
  label: "FitMode"
---

How [`fit`](/rust/modules/geometry/fit/) sizes content in a container, as CSS `object-fit`.

## Import

```rust
use helpers4::geometry::FitMode;
```

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["geometry"] }
```

## Definition

```rust
pub enum FitMode {
    /// As large as possible while staying entirely inside (bands remain on two sides). The default.
    #[default]
    Contain,
    /// As small as possible while covering the whole container (it overflows on two sides).
    Cover,
    /// Stretched to the container on each axis, proportions not kept.
    Fill,
    /// Not scaled (CSS `object-fit: none`).
    Original,
    /// Like [`Contain`](Self::Contain), but never enlarged.
    ScaleDown,
}
```

## Examples

```rust
use helpers4::geometry::{fit, FitAlign, FitMode, Size};

let frame = Size::new(200.0, 100.0);
let viewport = Size::new(100.0, 100.0);
let whole = fit(frame, viewport, FitMode::Contain, FitAlign::CENTER);
let filled = fit(frame, viewport, FitMode::Cover, FitAlign::CENTER);
assert_eq!((whole.a, filled.a), (0.5, 1.0));
```

## Source

[src/geometry/fit.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/fit.rs#L21)
