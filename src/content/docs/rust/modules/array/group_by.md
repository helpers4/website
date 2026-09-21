---
title: "group_by"
description: "Groups the elements of items by the key returned by key."
sidebar:
  label: "group_by"
---

Groups the elements of `items` by the key returned by `key`.

Within each group, elements keep their original order. The order of the groups themselves is
unspecified (`HashMap`).

## Import

```rust
use helpers4::array::group_by;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn group_by<T: Clone, K: Eq + Hash>(
    items: &[T],
    mut key: impl FnMut(&T) -> K,
) -> HashMap<K, Vec<T>>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `items` | `&[T]` |
| `key` | `impl FnMut(&T) -> K` |

## Returns

`HashMap<K, Vec<T>>`

## Examples

```rust
use helpers4::array::group_by;

let groups = group_by(&[1, 2, 3, 4, 5], |n| n % 2 == 0);
assert_eq!(groups[&true], vec![2, 4]);
assert_eq!(groups[&false], vec![1, 3, 5]);
```

## Source

[src/array/group_by.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/array/group_by.rs#L22)
