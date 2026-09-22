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
helpers4 = { version = "0.0.5", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn equals_unordered<T: Eq + Hash>(a: &[T], b: &[T]) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[T]` | The first slice. |
| `b` | `&[T]` | The second slice. |

## Returns

`bool`

## Examples

```rust
use helpers4::array::equals_unordered;

assert!(equals_unordered(&[1, 2, 2, 3], &[3, 2, 1, 2]));
assert!(!equals_unordered(&[1, 2, 2], &[1, 1, 2]));
```

## Source

[src/array/equals_unordered.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/array/equals_unordered.rs#L26)
