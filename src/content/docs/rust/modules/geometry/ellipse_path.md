---
title: "ellipse_path"
description: "The path of the ellipse that fills a box, as SVG path data: two half-turn arcs."
sidebar:
  label: "ellipse_path"
---

The path of the ellipse that fills a box, as SVG path data: two half-turn arcs. A square box
gives a circle.

## Import

```rust
use helpers4::geometry::ellipse_path;
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
pub fn ellipse_path(bounds: Rect) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bounds` | `Rect` | The bounding box of the ellipse. |

## Returns

`String` — The path data, closed.

## Examples

```rust
use helpers4::geometry::{ellipse_path, Rect};

assert_eq!(
    ellipse_path(Rect::new(0.0, 0.0, 10.0, 6.0)),
    "M0 3 A5 3 0 0 1 10 3 A5 3 0 0 1 0 3 Z"
);
```

## Source

[src/geometry/ellipse_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/ellipse_path.rs#L29)
