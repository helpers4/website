---
title: "equals_unordered"
description: "Returns true when a and b hold the same elements the same number of times, in any order."
sidebar:
  label: "equals_unordered"
---

Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.

Use it for collections where order is meaningless (tags, ids). For positional equality,
compare the slices with `==`.

## Import

```rust
use helpers4::array::equals_unordered;
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
pub fn equals_unordered<T: Eq + Hash>(a: &[T], b: &[T]) -> bool
```

## Parameters

| Parameter | Type |
| --- | --- |
| `a` | `&[T]` |
| `b` | `&[T]` |

## Returns

`bool`

## Examples

```rust
use helpers4::array::equals_unordered;

assert!(equals_unordered(&[1, 2, 2, 3], &[3, 2, 1, 2]));
assert!(!equals_unordered(&[1, 2, 2], &[1, 1, 2]));
```

## More in this module

- [`cartesian_product`](../cartesian_product/) — Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.
- [`count_by`](../count_by/) — Counts the elements of `items` per key returned by `key`.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`group_by`](../group_by/) — Groups the elements of `items` by the key returned by `key`.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`symmetric_difference`](../symmetric_difference/) — Returns the elements present in exactly one of `a` and `b`.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.
- [`unique_by`](../unique_by/) — Removes elements whose `key` was already seen, keeping the first of each key in order.

## Source

[src/array/equals_unordered.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/equals_unordered.rs#L21)
