---
title: "unique"
description: "Removes duplicate values, keeping the first occurrence of each and the original order."
sidebar:
  label: "unique"
---

Removes duplicate values, keeping the first occurrence of each and the original order.

## Import

```rust
use helpers4::array::unique;
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
pub fn unique<T: Clone + Eq + Hash>(items: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to deduplicate. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::unique;

assert_eq!(unique(&[1, 2, 1, 3, 2]), vec![1, 2, 3]);
assert_eq!(unique::<i32>(&[]), Vec::<i32>::new());
```

## Source

[src/array/unique.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/unique.rs#L22)
