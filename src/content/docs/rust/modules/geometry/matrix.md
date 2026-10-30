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
helpers4 = { version = "0.0.10", default-features = false, features = ["geometry"] }
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

### `rotate`

```rust
pub fn rotate(radians: f64) -> Self
```

A rotation around the origin. With the y axis pointing down (screens, CSS, SVG), a
positive angle turns clockwise, like CSS `rotate()`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `radians` | `f64` | The angle, in radians. |

**Returns**

`Self` — The matrix.

**Examples**

```rust
use helpers4::geometry::{Matrix, Point};

let p = Matrix::rotate(std::f64::consts::FRAC_PI_2).apply(Point::new(1.0, 0.0));
assert!(p.x.abs() < 1e-12 && (p.y - 1.0).abs() < 1e-12);
```

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

### `rect_to_rect`

```rust
pub fn rect_to_rect(from: Rect, to: Rect) -> Self
```

The translation and scale that put one rectangle exactly on another, for animating or
fitting between two boxes. An axis where `from` has no extent is only translated (scale
`1`).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `from` | `Rect` | The rectangle to move. |
| `to` | `Rect` | The rectangle to reach. |

**Returns**

`Self` — The matrix that maps `from` onto `to`.

**Examples**

```rust
use helpers4::geometry::{Matrix, Rect};

let m = Matrix::rect_to_rect(Rect::new(0.0, 0.0, 10.0, 10.0), Rect::new(5.0, 5.0, 20.0, 10.0));
assert_eq!(m, Matrix::new(2.0, 0.0, 0.0, 1.0, 5.0, 5.0));
```

### `to_css`

```rust
pub fn to_css(self) -> String
```

The CSS and SVG `transform` value, `matrix(a, b, c, d, e, f)`.

Entries are written as Rust prints them, without rounding (and `0` for `-0`); a
non-finite entry gives a value CSS rejects.

**Returns**

`String` — For instance `"matrix(2, 0, 0, 2, 10, -5)"`.

**Examples**

```rust
use helpers4::geometry::Matrix;

assert_eq!(Matrix::new(2.0, 0.0, 0.0, 2.0, 10.0, -5.0).to_css(), "matrix(2, 0, 0, 2, 10, -5)");
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

[src/geometry/matrix.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/matrix.rs#L28)
