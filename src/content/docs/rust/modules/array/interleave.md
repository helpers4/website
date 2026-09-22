---
title: "interleave"
description: "Alternates the elements of a and b, starting with a; the leftover of the longer slice goes at the end."
sidebar:
  label: "interleave"
---

Alternates the elements of `a` and `b`, starting with `a`; the leftover of the longer slice
goes at the end.

## Import

```rust
use helpers4::array::interleave;
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
pub fn interleave<T: Clone>(a: &[T], b: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[T]` | The slice to take the first, third, … elements from. |
| `b` | `&[T]` | The slice to take the second, fourth, … elements from. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::interleave;

assert_eq!(interleave(&[1, 3, 5], &[2, 4, 6]), vec![1, 2, 3, 4, 5, 6]);
assert_eq!(interleave(&["a", "b", "c"], &["x"]), vec!["a", "x", "b", "c"]);
```

## Source

[src/array/interleave.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/array/interleave.rs#L22)
