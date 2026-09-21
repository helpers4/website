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
helpers4 = { version = "0.0.3", default-features = false, features = ["array"] }
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

## Source

[src/array/symmetric_difference.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/array/symmetric_difference.rs#L20)
