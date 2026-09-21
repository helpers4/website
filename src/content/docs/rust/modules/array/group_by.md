---
title: "group_by"
description: "Groups the elements of items by the key returned by key."
sidebar:
  label: "group_by"
---

Groups the elements of `items` by the key returned by `key`.

Within each group, elements keep their original order. The order of the groups themselves is
unspecified (`HashMap`).

## Import

```rust
use helpers4::array::group_by;
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
pub fn group_by<T: Clone, K: Eq + Hash>(
    items: &[T],
    mut key: impl FnMut(&T) -> K,
) -> HashMap<K, Vec<T>>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `items` | `&[T]` |
| `key` | `impl FnMut(&T) -> K` |

## Returns

`HashMap<K, Vec<T>>`

## Examples

```rust
use helpers4::array::group_by;

let groups = group_by(&[1, 2, 3, 4, 5], |n| n % 2 == 0);
assert_eq!(groups[&true], vec![2, 4]);
assert_eq!(groups[&false], vec![1, 3, 5]);
```

## More in this module

- [`cartesian_product`](../cartesian_product/) — Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.
- [`count_by`](../count_by/) — Counts the elements of `items` per key returned by `key`.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`equals_unordered`](../equals_unordered/) — Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`symmetric_difference`](../symmetric_difference/) — Returns the elements present in exactly one of `a` and `b`.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.
- [`unique_by`](../unique_by/) — Removes elements whose `key` was already seen, keeping the first of each key in order.

## Source

[src/array/group_by.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/group_by.rs#L22)
