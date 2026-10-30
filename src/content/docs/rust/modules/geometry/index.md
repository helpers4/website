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
content in a container like CSS `object-fit` ([`fit`](/rust/modules/geometry/fit/)), simplify a polyline, and work with SVG
path data: parse it ([`parse_path`](/rust/modules/geometry/parse_path/)), transform it by a matrix ([`transform_path`](/rust/modules/geometry/transform_path/)) and write
rectangles and ellipses as paths ([`rounded_rect_path`](/rust/modules/geometry/rounded_rect_path/), [`ellipse_path`](/rust/modules/geometry/ellipse_path/)).

## Install

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["geometry"] }
```

Import path: `helpers4::geometry`.

## Items

| Item | What it does |
| --- | --- |
| [`ellipse_path`](/rust/modules/geometry/ellipse_path/) | The path of the ellipse that fills a box, as SVG path data: two half-turn arcs. |
| [`FitAlign`](/rust/modules/geometry/fitalign/) | Where `fit` places content in the space left over (or overflowing), as CSS `object-position`: `0.0` is left or top, `0.5` centered, `1.0` right or bottom. |
| [`FitMode`](/rust/modules/geometry/fitmode/) | How `fit` sizes content in a container, as CSS `object-fit`. |
| [`fit`](/rust/modules/geometry/fit/) | Places content in a container like CSS `object-fit` and `object-position`, e.g. |
| [`format_path`](/rust/modules/geometry/format_path/) | Writes path commands back as SVG path data: letters glued to their first number, single spaces elsewhere, numbers rounded to `precision` decimals with the trailing zeros dropped (`-0` is written `0`). |
| [`Matrix`](/rust/modules/geometry/matrix/) | A 2D affine transformation (a 2×3 matrix), in the layout of CSS and SVG `matrix(a, b, c, d, e, f)`: |
| [`parse_path`](/rust/modules/geometry/parse_path/) | Parses SVG path data (the `d` attribute) into commands, as written: the letters keep their case (absolute or relative), `H`/`V`/`S`/`T`/`A` stay what they are, and a command repeated without its letter (`L 1 2 3 4`) becomes one command per set of numbers (`M` repeats as `L`, `m` as `l`). |
| [`PathCommand`](/rust/modules/geometry/pathcommand/) | One command of SVG path data: its letter (uppercase is absolute, lowercase relative to the current point) and its numbers, as written in the `d` attribute. |
| [`Point`](/rust/modules/geometry/point/) | A point in 2D space. |
| [`Rect`](/rust/modules/geometry/rect/) | An axis-aligned rectangle: its top-left corner and its size. |
| [`rounded_rect_path`](/rust/modules/geometry/rounded_rect_path/) | The path of a rectangle with a radius per corner, as SVG path data. |
| [`simplify_polyline`](/rust/modules/geometry/simplify_polyline/) | Removes the points of a polyline that change its shape by less than `tolerance`, with the Ramer–Douglas–Peucker algorithm: each removed point is at most `tolerance` away from the simplified line. |
| [`Size`](/rust/modules/geometry/size/) | A width and a height. |
| [`transform_path`](/rust/modules/geometry/transform_path/) | Transforms SVG path data by a matrix. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParsePathError`](/rust/modules/geometry/parse_path/#error-type-parsepatherror) | [`parse_path`](/rust/modules/geometry/parse_path/), [`transform_path`](/rust/modules/geometry/transform_path/) |
