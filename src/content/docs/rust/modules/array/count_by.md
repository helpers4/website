---
title: "count_by"
description: "Counts the elements of items per key returned by key."
sidebar:
  label: "count_by"
---

Counts the elements of `items` per key returned by `key`.

## Import

```rust
use helpers4::array::count_by;
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
pub fn count_by<T, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> HashMap<K, usize>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to count. |
| `key` | `impl FnMut(&T) -> K` | Returns the key to count each element under. |

## Returns

`HashMap<K, usize>`

## Examples

```rust
use helpers4::array::count_by;

let counts = count_by(&[1, 2, 3, 4, 5], |n| if n % 2 == 0 { "even" } else { "odd" });
assert_eq!(counts["odd"], 3);
assert_eq!(counts["even"], 2);
```

## Source

[src/array/count_by.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/count_by.rs#L24)
