---
title: "unique_by"
description: "Removes elements whose key was already seen, keeping the first of each key in order."
sidebar:
  label: "unique_by"
---

Removes elements whose `key` was already seen, keeping the first of each key in order.

## Import

```rust
use helpers4::array::unique_by;
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
pub fn unique_by<T: Clone, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> Vec<T>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `items` | `&[T]` |
| `key` | `impl FnMut(&T) -> K` |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::unique_by;

let words = ["apple", "avocado", "banana", "blueberry", "cherry"];
assert_eq!(
    unique_by(&words, |w| w.chars().next()),
    vec!["apple", "banana", "cherry"]
);
```

## More in this module

- [`cartesian_product`](../cartesian_product/) — Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.
- [`count_by`](../count_by/) — Counts the elements of `items` per key returned by `key`.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`equals_unordered`](../equals_unordered/) — Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.
- [`group_by`](../group_by/) — Groups the elements of `items` by the key returned by `key`.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`symmetric_difference`](../symmetric_difference/) — Returns the elements present in exactly one of `a` and `b`.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.

## Source

[src/array/unique_by.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/unique_by.rs#L21)
