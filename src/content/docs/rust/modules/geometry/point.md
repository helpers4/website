---
title: "Point"
description: "A point in 2D space."
sidebar:
  label: "Point"
---

A point in 2D space.

## Import

```rust
use helpers4::geometry::Point;
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
pub struct Point { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::Point;

let p = Point::new(3.0, 4.0);
assert_eq!((p.x, p.y), (3.0, 4.0));
```

## Source

[src/geometry/point.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/geometry/point.rs#L16)
