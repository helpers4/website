---
title: "Size"
description: "A width and a height."
sidebar:
  label: "Size"
---

A width and a height.

## Import

```rust
use helpers4::geometry::Size;
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
pub struct Size { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::Size;

let frame = Size::new(390.0, 844.0);
assert_eq!((frame.width, frame.height), (390.0, 844.0));
```

## Source

[src/geometry/size.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/geometry/size.rs#L16)
