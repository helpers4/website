---
title: "geometry"
description: "2D geometry in f64: Point, Rect and the affine Matrix, in the layout of CSS and SVG matrix(a b c d e f)."
sidebar:
  label: "≡ Overview"
  order: 0
---

2D geometry in `f64`: [`Point`](/rust/modules/geometry/point/), [`Rect`](/rust/modules/geometry/rect/) and the affine [`Matrix`](/rust/modules/geometry/matrix/), in the layout of CSS and
SVG `matrix(a b c d e f)`.

Enough to map between coordinate spaces: build and multiply transforms, invert one to bring a
point back, take the bounding box of a transformed rectangle (hit areas, gradient bounds), place
content in a container like CSS `object-fit` ([`fit`](/rust/modules/geometry/fit/)), and simplify a polyline.

## Install

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["geometry"] }
```

Import path: `helpers4::geometry`.

## Items

| Item | What it does |
| --- | --- |
| [`FitAlign`](/rust/modules/geometry/fitalign/) | Where `fit` places content in the space left over (or overflowing), as CSS `object-position`: `0.0` is left or top, `0.5` centered, `1.0` right or bottom. |
| [`FitMode`](/rust/modules/geometry/fitmode/) | How `fit` sizes content in a container, as CSS `object-fit`. |
| [`fit`](/rust/modules/geometry/fit/) | Places content in a container like CSS `object-fit` and `object-position`, e.g. |
| [`Matrix`](/rust/modules/geometry/matrix/) | A 2D affine transformation (a 2×3 matrix), in the layout of CSS and SVG `matrix(a, b, c, d, e, f)`: |
| [`Point`](/rust/modules/geometry/point/) | A point in 2D space. |
| [`Rect`](/rust/modules/geometry/rect/) | An axis-aligned rectangle: its top-left corner and its size. |
| [`simplify_polyline`](/rust/modules/geometry/simplify_polyline/) | Removes the points of a polyline that change its shape by less than `tolerance`, with the Ramer–Douglas–Peucker algorithm: each removed point is at most `tolerance` away from the simplified line. |
| [`Size`](/rust/modules/geometry/size/) | A width and a height. |
