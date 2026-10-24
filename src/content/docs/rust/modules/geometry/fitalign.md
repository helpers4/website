---
title: "FitAlign"
description: "Where fit places content in the space left over (or overflowing), as CSS object-position: 0.0 is left or top, 0.5 centered, 1.0 right or bottom."
sidebar:
  label: "FitAlign"
---

Where [`fit`](/rust/modules/geometry/fit/) places content in the space left over (or overflowing), as CSS
`object-position`: `0.0` is left or top, `0.5` centered, `1.0` right or bottom.

## Import

```rust
use helpers4::geometry::FitAlign;
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
pub struct FitAlign { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::FitAlign;

assert_eq!(FitAlign::default(), FitAlign::CENTER);
assert_eq!(FitAlign::new(0.0, 0.0).x, 0.0);
```

## Source

[src/geometry/fit.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/geometry/fit.rs#L47)
