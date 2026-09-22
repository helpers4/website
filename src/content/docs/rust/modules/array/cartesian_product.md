---
title: "cartesian_product"
description: "Returns every pair (x, y) with x from a and y from b, in row-major order."
sidebar:
  label: "cartesian_product"
---

Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.

For more than two inputs, nest the calls.

## Import

```rust
use helpers4::array::cartesian_product;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn cartesian_product<A: Clone, B: Clone>(a: &[A], b: &[B]) -> Vec<(A, B)>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[A]` | The first slice. |
| `b` | `&[B]` | The second slice. |

## Returns

`Vec<(A, B)>`

## Examples

```rust
use helpers4::array::cartesian_product;

assert_eq!(
    cartesian_product(&[1, 2], &['a', 'b']),
    vec![(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]
);
```

## Source

[src/array/cartesian_product.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/array/cartesian_product.rs#L24)
