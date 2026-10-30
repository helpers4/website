---
title: "simplify_polyline"
description: "Removes the points of a polyline that change its shape by less than tolerance, with the Ramer–Douglas–Peucker algorithm: each removed point is at most tolerance away from the simplified line."
sidebar:
  label: "simplify_polyline"
---

Removes the points of a polyline that change its shape by less than `tolerance`, with the
Ramer–Douglas–Peucker algorithm: each removed point is at most `tolerance` away from the
simplified line. It shrinks map outlines or traced paths by orders of magnitude while keeping
their look.

The first and last points are always kept. With a `tolerance` of `0.0`, only points exactly on
a straight line are removed. It is iterative, so very long polylines cannot overflow the stack.

## Import

```rust
use helpers4::geometry::simplify_polyline;
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
pub fn simplify_polyline(points: &[Point], tolerance: f64) -> Option<Vec<Point>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `points` | `&[Point]` | The polyline. |
| `tolerance` | `f64` | The maximum distance between a removed point and the result, in the units of the points. |

## Returns

`Option<Vec<Point>>` — The kept points in their original order, or `None` when `tolerance` is negative or `NaN`.

## Examples

```rust
use helpers4::geometry::{simplify_polyline, Point};

let line = [Point::new(0.0, 0.0), Point::new(1.0, 0.1), Point::new(2.0, 0.0)];
assert_eq!(
    simplify_polyline(&line, 0.5),
    Some(vec![Point::new(0.0, 0.0), Point::new(2.0, 0.0)])
);
assert_eq!(simplify_polyline(&line, -1.0), None);
```

## Source

[src/geometry/simplify_polyline.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/simplify_polyline.rs#L38)
