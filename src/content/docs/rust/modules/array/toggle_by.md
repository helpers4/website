---
title: "toggle_by"
description: "Like toggle, but elements are the same when key gives the same value: toggle objects by id instead of by whole-value equality."
sidebar:
  label: "toggle_by"
---

Like [`toggle`](/rust/modules/set/toggle/), but elements are the same when `key` gives the same value:
toggle objects by id instead of by whole-value equality. Only the first match is removed.

## Import

```rust
use helpers4::array::toggle_by;
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
pub fn toggle_by<T: Clone, K: PartialEq>(
    items: &[T],
    item: T,
    mut key: impl FnMut(&T) -> K,
) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The current elements. |
| `item` | `T` | The element to add, or whose key to remove. |
| `key` | `impl FnMut(&T) -> K` | Returns the identity to compare. |

## Returns

`Vec<T>` — A new `Vec`; `items` is not changed.

## Examples

```rust
use helpers4::array::toggle_by;

let layers = [("a", 1), ("b", 2)];
// Same id: removed, whatever the other fields hold.
assert_eq!(toggle_by(&layers, ("x", 1), |layer| layer.1), vec![("b", 2)]);
assert_eq!(toggle_by(&layers, ("c", 3), |layer| layer.1), vec![("a", 1), ("b", 2), ("c", 3)]);
```

## Source

[src/array/toggle_by.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/array/toggle_by.rs#L29)
