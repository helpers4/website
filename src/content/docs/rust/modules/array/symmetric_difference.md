---
title: "symmetric_difference"
description: "Returns the elements present in exactly one of a and b."
sidebar:
  label: "symmetric_difference"
---

Returns the elements present in exactly one of `a` and `b`.

The result is the elements of `a` missing from `b` (in `a`'s order), followed by the elements
of `b` missing from `a` (in `b`'s order). Duplicates are kept.

## Import

```rust
use helpers4::array::symmetric_difference;
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
pub fn symmetric_difference<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `a` | `&[T]` |
| `b` | `&[T]` |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::symmetric_difference;

assert_eq!(symmetric_difference(&[1, 2, 3], &[2, 3, 4]), vec![1, 4]);
```

## More in this module

- [`cartesian_product`](../cartesian_product/) — Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.
- [`count_by`](../count_by/) — Counts the elements of `items` per key returned by `key`.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`equals_unordered`](../equals_unordered/) — Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.
- [`group_by`](../group_by/) — Groups the elements of `items` by the key returned by `key`.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.
- [`unique_by`](../unique_by/) — Removes elements whose `key` was already seen, keeping the first of each key in order.

## Source

[src/array/symmetric_difference.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/symmetric_difference.rs#L20)
