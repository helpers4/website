---
title: "fit"
description: "Places content in a container like CSS object-fit and object-position, e.g."
sidebar:
  label: "fit"
---

Places content in a container like CSS `object-fit` and `object-position`, e.g. to show a
design frame in a viewport of another size.

The result is the matrix from content coordinates to container coordinates: `a` and `d` are
the scales, `e` and `f` the position of the content's top-left corner. Map points with
[`Matrix::apply`](/rust/modules/geometry/matrix/), combine it with [`Matrix::multiply`](/rust/modules/geometry/matrix/), or write it with
[`Matrix::to_css`](/rust/modules/geometry/matrix/). Sizes are expected to be positive.

## Import

```rust
use helpers4::geometry::fit;
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
pub fn fit(content: Size, container: Size, mode: FitMode, align: FitAlign) -> Matrix
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `Size` | The size of the content. |
| `container` | `Size` | The size of the container. |
| `mode` | `FitMode` | How to size the content. |
| `align` | `FitAlign` | Where to place it. |

## Returns

`Matrix` — The content-to-container matrix.

## Examples

```rust
use helpers4::geometry::{fit, FitAlign, FitMode, Matrix, Size};

let m = fit(Size::new(200.0, 100.0), Size::new(100.0, 100.0), FitMode::Contain, FitAlign::CENTER);
assert_eq!(m, Matrix::new(0.5, 0.0, 0.0, 0.5, 0.0, 25.0));

let left = fit(Size::new(200.0, 100.0), Size::new(100.0, 100.0), FitMode::Cover, FitAlign::new(0.0, 0.5));
assert_eq!(left, Matrix::new(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)); // cropped on the right
```

## Source

[src/geometry/fit.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/fit.rs#L111)
