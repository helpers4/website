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
helpers4 = { version = "0.0.2", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn cartesian_product<A: Clone, B: Clone>(a: &[A], b: &[B]) -> Vec<(A, B)>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `a` | `&[A]` |
| `b` | `&[B]` |

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

## More in this module

- [`count_by`](../count_by/) — Counts the elements of `items` per key returned by `key`.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`equals_unordered`](../equals_unordered/) — Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.
- [`group_by`](../group_by/) — Groups the elements of `items` by the key returned by `key`.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`symmetric_difference`](../symmetric_difference/) — Returns the elements present in exactly one of `a` and `b`.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.
- [`unique_by`](../unique_by/) — Removes elements whose `key` was already seen, keeping the first of each key in order.

## Source

[src/array/cartesian_product.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/cartesian_product.rs#L19)
