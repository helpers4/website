---
title: "Rect"
description: "An axis-aligned rectangle: its top-left corner and its size."
sidebar:
  label: "Rect"
---

An axis-aligned rectangle: its top-left corner and its size. Width and height are expected
to be non-negative.

## Import

```rust
use helpers4::geometry::Rect;
```

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["geometry"] }
```

## Definition

```rust
pub struct Rect { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::Rect;

let r = Rect::new(10.0, 20.0, 100.0, 50.0);
assert_eq!((r.right(), r.bottom()), (110.0, 70.0));
```

## Methods

### `right`

```rust
pub fn right(&self) -> f64
```

The right edge, `x + width`.

**Returns**

`f64` — The x coordinate of the right edge.

**Examples**

```rust
use helpers4::geometry::Rect;

assert_eq!(Rect::new(1.0, 0.0, 2.0, 0.0).right(), 3.0);
```

### `union`

```rust
pub fn union(&self, other: &Self) -> Self
```

The smallest rectangle that contains both `self` and `other`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `&Self` | The other rectangle. |

**Returns**

`Self` — The bounding rectangle.

**Examples**

```rust
use helpers4::geometry::Rect;

let a = Rect::new(0.0, 0.0, 10.0, 10.0);
let b = Rect::new(20.0, 5.0, 10.0, 10.0);
assert_eq!(a.union(&b), Rect::new(0.0, 0.0, 30.0, 15.0));
```

### `bounding`

```rust
pub fn bounding(rects: &[Self]) -> Option<Self>
```

The smallest rectangle that contains all of `rects`, e.g. the bounds of a group of layers.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `rects` | `&[Self]` | The rectangles. |

**Returns**

`Option<Self>` — The bounding rectangle, or `None` for no rectangle.

**Examples**

```rust
use helpers4::geometry::Rect;

let group = [Rect::new(0.0, 0.0, 10.0, 10.0), Rect::new(20.0, 5.0, 10.0, 10.0)];
assert_eq!(Rect::bounding(&group), Some(Rect::new(0.0, 0.0, 30.0, 15.0)));
assert_eq!(Rect::bounding(&[]), None);
```

### `intersection`

```rust
pub fn intersection(&self, other: &Self) -> Option<Self>
```

The area `self` and `other` have in common.

Rectangles that only touch (along an edge or at a corner) have no area in common.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `&Self` | The other rectangle. |

**Returns**

`Option<Self>` — The overlapping rectangle, or `None` when they do not overlap.

**Examples**

```rust
use helpers4::geometry::Rect;

let a = Rect::new(0.0, 0.0, 10.0, 10.0);
assert_eq!(a.intersection(&Rect::new(5.0, 5.0, 10.0, 10.0)), Some(Rect::new(5.0, 5.0, 5.0, 5.0)));
assert_eq!(a.intersection(&Rect::new(10.0, 0.0, 10.0, 10.0)), None); // only touching
```

### `intersects`

```rust
pub fn intersects(&self, other: &Self) -> bool
```

Whether `self` and `other` have an area in common: exactly when
[`intersection`](#intersection) returns a rectangle (touching rectangles and empty
ones do not).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `&Self` | The other rectangle. |

**Returns**

`bool` — `true` if they overlap.

**Examples**

```rust
use helpers4::geometry::Rect;

let a = Rect::new(0.0, 0.0, 10.0, 10.0);
assert!(a.intersects(&Rect::new(5.0, 5.0, 10.0, 10.0)));
assert!(!a.intersects(&Rect::new(10.0, 0.0, 10.0, 10.0)));
```

### `contains_point`

```rust
pub fn contains_point(&self, point: Point) -> bool
```

Whether a point is inside the rectangle, for hit-testing.

The left and top edges are inside, the right and bottom ones are not, so a point on the
edge between two adjacent rectangles hits exactly one of them.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `point` | `Point` | The point to test. |

**Returns**

`bool` — `true` if the point is inside.

**Examples**

```rust
use helpers4::geometry::{Point, Rect};

let r = Rect::new(0.0, 0.0, 10.0, 10.0);
assert!(r.contains_point(Point::new(0.0, 5.0)));
assert!(!r.contains_point(Point::new(10.0, 5.0)));
```

### `contains_rect`

```rust
pub fn contains_rect(&self, other: &Self) -> bool
```

Whether `other` is inside the rectangle: it does not stick out on any side, and may touch
any edge.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `&Self` | The rectangle to test. |

**Returns**

`bool` — `true` if `other` is entirely inside (or equal to) `self`.

**Examples**

```rust
use helpers4::geometry::Rect;

let screen = Rect::new(0.0, 0.0, 100.0, 100.0);
assert!(screen.contains_rect(&Rect::new(10.0, 10.0, 90.0, 90.0)));
assert!(!screen.contains_rect(&Rect::new(50.0, 50.0, 100.0, 10.0)));
```

### `bottom`

```rust
pub fn bottom(&self) -> f64
```

The bottom edge, `y + height`.

**Returns**

`f64` — The y coordinate of the bottom edge.

**Examples**

```rust
use helpers4::geometry::Rect;

assert_eq!(Rect::new(0.0, 1.0, 0.0, 2.0).bottom(), 3.0);
```

## Source

[src/geometry/rect.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/geometry/rect.rs#L19)
