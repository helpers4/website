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
helpers4 = { version = "0.0.8", default-features = false, features = ["geometry"] }
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

[src/geometry/rect.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/geometry/rect.rs#L17)
