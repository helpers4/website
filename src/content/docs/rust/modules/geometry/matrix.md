---
title: "Matrix"
description: "A 2D affine transformation (a 2×3 matrix), in the layout of CSS and SVG matrix(a, b, c, d, e, f):"
sidebar:
  label: "Matrix"
---

A 2D affine transformation (a 2×3 matrix), in the layout of CSS and SVG
`matrix(a, b, c, d, e, f)`:

```text
x' = a·x + c·y + e
y' = b·x + d·y + f
```

## Import

```rust
use helpers4::geometry::Matrix;
```

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["geometry"] }
```

## Definition

```rust
pub struct Matrix { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::{Matrix, Point};

// Scale by 2, then move by (10, 0): the last matrix of a product applies first.
let scale = Matrix::new(2.0, 0.0, 0.0, 2.0, 0.0, 0.0);
let shift = Matrix::new(1.0, 0.0, 0.0, 1.0, 10.0, 0.0);
let m = shift.multiply(scale);
assert_eq!(m.apply(Point::new(1.0, 1.0)), Point::new(12.0, 2.0));
assert_eq!(m.invert().map(|inv| inv.apply(Point::new(12.0, 2.0))), Some(Point::new(1.0, 1.0)));
```

## Methods

### `multiply`

```rust
pub fn multiply(self, other: Self) -> Self
```

Multiplies `self` by `other`, in the mathematical order: `other` applies first, then
`self`, as in a CSS transform list (`transform: self other`).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `Self` | The transformation applied first. |

**Returns**

`Self` — The product, with `m.multiply(n).apply(p) == m.apply(n.apply(p))` (up to rounding).

**Examples**

```rust
use helpers4::geometry::{Matrix, Point};

let parent = Matrix::new(1.0, 0.0, 0.0, 1.0, 100.0, 50.0);
let child = Matrix::new(2.0, 0.0, 0.0, 2.0, 0.0, 0.0);
// A child layer's point, in the coordinates of the page
assert_eq!(parent.multiply(child).apply(Point::new(1.0, 1.0)), Point::new(102.0, 52.0));
```

### `invert`

```rust
pub fn invert(self) -> Option<Self>
```

The matrix that undoes `self`, e.g. to turn a pointer position into the coordinates of a
transformed layer.

A matrix that flattens the plane onto a line or a point (determinant `0`) cannot be
undone. There is no tolerance: a nearly flat matrix is inverted, with very large entries,
as long as they stay finite.

**Returns**

`Option<Self>` — The inverse, or `None` when `self` cannot be inverted (or has a non-finite entry).

**Examples**

```rust
use helpers4::geometry::Matrix;

let shift = Matrix::new(1.0, 0.0, 0.0, 1.0, 10.0, 5.0);
assert_eq!(shift.invert(), Some(Matrix::new(1.0, 0.0, 0.0, 1.0, -10.0, -5.0)));
assert_eq!(Matrix::new(0.0, 0.0, 0.0, 0.0, 1.0, 1.0).invert(), None);
```

### `apply`

```rust
pub fn apply(self, point: Point) -> Point
```

Transforms a point.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `point` | `Point` | The point to transform. |

**Returns**

`Point` — `(a·x + c·y + e, b·x + d·y + f)`.

**Examples**

```rust
use helpers4::geometry::{Matrix, Point};

let m = Matrix::new(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
assert_eq!(m.apply(Point::new(1.0, 1.0)), Point::new(9.0, 12.0));
```

### `bounding_box`

```rust
pub fn bounding_box(self, rect: Rect) -> Rect
```

Transforms a rectangle and returns its bounding box: the smallest axis-aligned rectangle
containing it. After a rotation or a skew, the box is larger than the rectangle.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `rect` | `Rect` | The rectangle to transform. |

**Returns**

`Rect` — The bounding box of the four transformed corners, with a non-negative size.

**Examples**

```rust
use helpers4::geometry::{Matrix, Rect};

let flip = Matrix::new(-2.0, 0.0, 0.0, 1.0, 0.0, 0.0);
assert_eq!(flip.bounding_box(Rect::new(1.0, 0.0, 2.0, 3.0)), Rect::new(-6.0, 0.0, 4.0, 3.0));
```

## Source

[src/geometry/matrix.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/geometry/matrix.rs#L28)
