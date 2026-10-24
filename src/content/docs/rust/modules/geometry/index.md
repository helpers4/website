---
title: "geometry"
description: "2D geometry in f64: Point, Rect and the affine Matrix, in the layout of CSS and SVG matrix(a b c d e f)."
sidebar:
  label: "≡ Overview"
  order: 0
---

2D geometry in `f64`: [`Point`](/rust/modules/geometry/point/), [`Rect`](/rust/modules/geometry/rect/) and the affine [`Matrix`](/rust/modules/geometry/matrix/), in the layout of CSS and
SVG `matrix(a b c d e f)`.

Enough to map between coordinate spaces: multiply transforms, invert one to bring a point
back, and take the bounding box of a transformed rectangle (hit areas, gradient bounds).

## Install

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["geometry"] }
```

Import path: `helpers4::geometry`.

## Items

| Item | What it does |
| --- | --- |
| [`Matrix`](/rust/modules/geometry/matrix/) | A 2D affine transformation (a 2×3 matrix), in the layout of CSS and SVG `matrix(a, b, c, d, e, f)`: |
| [`Point`](/rust/modules/geometry/point/) | A point in 2D space. |
| [`Rect`](/rust/modules/geometry/rect/) | An axis-aligned rectangle: its top-left corner and its size. |
