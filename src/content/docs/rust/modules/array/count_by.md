---
title: "count_by"
description: "Counts the elements of items per key returned by key."
sidebar:
  label: "count_by"
---

Counts the elements of `items` per key returned by `key`.

## Import

```rust
use helpers4::array::count_by;
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
pub fn count_by<T, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> HashMap<K, usize>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `items` | `&[T]` |
| `key` | `impl FnMut(&T) -> K` |

## Returns

`HashMap<K, usize>`

## Examples

```rust
use helpers4::array::count_by;

let counts = count_by(&[1, 2, 3, 4, 5], |n| if n % 2 == 0 { "even" } else { "odd" });
assert_eq!(counts["odd"], 3);
assert_eq!(counts["even"], 2);
```

## More in this module

- [`cartesian_product`](../cartesian_product/) — Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.
- [`difference`](../difference/) — Returns the elements of `a` that are not in `b`, in `a`'s order.
- [`equals_unordered`](../equals_unordered/) — Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.
- [`group_by`](../group_by/) — Groups the elements of `items` by the key returned by `key`.
- [`intersection`](../intersection/) — Returns the elements of `a` that also appear in `b`, in `a`'s order.
- [`intersects`](../intersects/) — Returns `true` when `a` and `b` share at least one element.
- [`symmetric_difference`](../symmetric_difference/) — Returns the elements present in exactly one of `a` and `b`.
- [`unique`](../unique/) — Removes duplicate values, keeping the first occurrence of each and the original order.
- [`unique_by`](../unique_by/) — Removes elements whose `key` was already seen, keeping the first of each key in order.

## Source

[src/array/count_by.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/count_by.rs#L19)
