---
title: "rounded_rect_path"
description: "The path of a rectangle with a radius per corner, as SVG path data."
sidebar:
  label: "rounded_rect_path"
---

The path of a rectangle with a radius per corner, as SVG path data. Each radius is clamped to
half the smaller side, and a radius of `0` gives a square corner (no arc is written).

## Import

```rust
use helpers4::geometry::rounded_rect_path;
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

## Signature

```rust
pub fn rounded_rect_path(rect: Rect, radii: [f64; 4]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `rect` | `Rect` | The rectangle. |
| `radii` | `[f64; 4]` | `[top_left, top_right, bottom_right, bottom_left]`, as in CSS `border-radius`; pass `[r; 4]` for one radius. Negative radii count as `0`. |

## Returns

`String` — The path data, closed.

## Examples

```rust
use helpers4::geometry::{rounded_rect_path, Rect};

let square = Rect::new(0.0, 0.0, 10.0, 10.0);
assert_eq!(rounded_rect_path(square, [0.0; 4]), "M0 0 L10 0 L10 10 L0 10 L0 0 Z");
assert_eq!(
    rounded_rect_path(square, [5.0, 0.0, 0.0, 0.0]),
    "M5 0 L10 0 L10 10 L0 10 L0 5 A5 5 0 0 1 5 0 Z"
);
```

## Source

[src/geometry/rounded_rect_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/rounded_rect_path.rs#L33)
