---
title: "toggle"
description: "Removes item from items if it is there, adds it at the end if it is not: the usual \"toggle a selection\" gesture."
sidebar:
  label: "toggle"
---

Removes `item` from `items` if it is there, adds it at the end if it is not: the usual
"toggle a selection" gesture. Only the first occurrence is removed.

## Import

```rust
use helpers4::array::toggle;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn toggle<T: Clone + PartialEq>(items: &[T], item: T) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The current elements. |
| `item` | `T` | The element to toggle, compared with `==`. |

## Returns

`Vec<T>` — A new `Vec`; `items` is not changed.

## Examples

```rust
use helpers4::array::toggle;

assert_eq!(toggle(&[1, 2, 3], 2), vec![1, 3]);
assert_eq!(toggle(&[1, 3], 2), vec![1, 3, 2]);
```

## Source

[src/array/toggle.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/array/toggle.rs#L26)
