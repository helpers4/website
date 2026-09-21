---
title: "intersects"
description: "Returns true when a and b share at least one element."
sidebar:
  label: "intersects"
---

Returns `true` when `a` and `b` share at least one element.

## Import

```rust
use helpers4::array::intersects;
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
pub fn intersects<T: Eq + Hash>(a: &[T], b: &[T]) -> bool
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
use helpers4::array::intersects;

assert!(intersects(&[1, 2, 3], &[3, 4]));
assert!(!intersects(&[1, 2], &[3, 4]));
```

## Source

[src/array/intersects.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/array/intersects.rs#L18)
