---
title: "duplicates"
description: "Returns the elements that appear more than once in items, each one once, in the order they first appear."
sidebar:
  label: "duplicates"
---

Returns the elements that appear more than once in `items`, each one once, in the order they
first appear.

The counterpart of [`unique`](/rust/modules/array/unique/): what `unique` keeps, this reports as repeated.

## Import

```rust
use helpers4::array::duplicates;
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
pub fn duplicates<T: Clone + Eq + Hash>(items: &[T]) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to scan. |

## Returns

`Vec<T>`

## Examples

```rust
use helpers4::array::duplicates;

assert_eq!(duplicates(&[1, 2, 3, 2, 1, 2]), vec![1, 2]);
assert_eq!(duplicates(&["a", "b", "c"]), Vec::<&str>::new());
```

## Source

[src/array/duplicates.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/array/duplicates.rs#L26)
