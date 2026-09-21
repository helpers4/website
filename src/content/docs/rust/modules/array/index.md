---
title: "array"
description: "Helpers for slices and Vecs that the standard library does not provide."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for slices and `Vec`s that the standard library does not provide.

Inputs are borrowed slices and results are new `Vec`s: nothing is mutated. Membership-based
helpers require `Eq + Hash`.

## Install

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["array"] }
```

Import path: `helpers4::array`.

## Items

| Item | What it does |
| --- | --- |
| [`cartesian_product`](/rust/modules/array/cartesian_product/) | Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order. |
| [`count_by`](/rust/modules/array/count_by/) | Counts the elements of `items` per key returned by `key`. |
| [`difference`](/rust/modules/array/difference/) | Returns the elements of `a` that are not in `b`, in `a`'s order. |
| [`equals_unordered`](/rust/modules/array/equals_unordered/) | Returns `true` when `a` and `b` hold the same elements the same number of times, in any order. |
| [`group_by`](/rust/modules/array/group_by/) | Groups the elements of `items` by the key returned by `key`. |
| [`intersection`](/rust/modules/array/intersection/) | Returns the elements of `a` that also appear in `b`, in `a`'s order. |
| [`intersects`](/rust/modules/array/intersects/) | Returns `true` when `a` and `b` share at least one element. |
| [`symmetric_difference`](/rust/modules/array/symmetric_difference/) | Returns the elements present in exactly one of `a` and `b`. |
| [`unique`](/rust/modules/array/unique/) | Removes duplicate values, keeping the first occurrence of each and the original order. |
| [`unique_by`](/rust/modules/array/unique_by/) | Removes elements whose `key` was already seen, keeping the first of each key in order. |
