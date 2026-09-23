---
title: "intersection"
description: "Returns the elements of a that also appear in b, in a's order."
sidebar:
  label: "intersection"
---

Returns the elements of `a` that also appear in `b`, in `a`'s order.

Duplicates in `a` are kept: only membership in `b` decides whether an element stays.

## Import

```rust
use helpers4::array::intersection;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn intersection<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[T]` | The first slice. |
| `b` | `&[T]` | The second slice. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::intersection;

assert_eq!(intersection(&[1, 2, 3, 2], &[2, 3, 4]), vec![2, 3, 2]);
assert_eq!(intersection(&[1], &[2]), Vec::<i32>::new());
```

## Source

[src/array/intersection.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/intersection.rs#L25)
