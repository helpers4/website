---
title: "unique_by"
description: "Removes elements whose key was already seen, keeping the first of each key in order."
sidebar:
  label: "unique_by"
---

Removes elements whose `key` was already seen, keeping the first of each key in order.

## Import

```rust
use helpers4::array::unique_by;
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
pub fn unique_by<T: Clone, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to deduplicate. |
| `key` | `impl FnMut(&T) -> K` | Returns the key that decides which elements are duplicates. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::unique_by;

let words = ["apple", "avocado", "banana", "blueberry", "cherry"];
assert_eq!(
    unique_by(&words, |w| w.chars().next()),
    vec!["apple", "banana", "cherry"]
);
```

## Source

[src/array/unique_by.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/unique_by.rs#L26)
