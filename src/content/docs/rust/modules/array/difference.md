---
title: "difference"
description: "Returns the elements of a that are not in b, in a's order."
sidebar:
  label: "difference"
---

Returns the elements of `a` that are not in `b`, in `a`'s order.

Duplicates in `a` are kept: only membership in `b` decides whether an element stays.

## Import

```rust
use helpers4::array::difference;
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
pub fn difference<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[T]` | The elements to keep from. |
| `b` | `&[T]` | The elements to remove. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::difference;

assert_eq!(difference(&[1, 2, 3, 2], &[2]), vec![1, 3]);
assert_eq!(difference(&[1, 1, 2], &[3]), vec![1, 1, 2]);
```

## Source

[src/array/difference.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/array/difference.rs#L25)
