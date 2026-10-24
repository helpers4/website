---
title: "replace_or_append"
description: "Replaces the first element that matches with item, or appends item when none does: the \"upsert into a list\" gesture."
sidebar:
  label: "replace_or_append"
---

Replaces the first element that matches with `item`, or appends `item` when none does: the
"upsert into a list" gesture.

## Import

```rust
use helpers4::array::replace_or_append;
```

Cargo feature `array` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features array
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["array"] }
```

## Signature

```rust
pub fn replace_or_append<T: Clone>(
    items: &[T],
    item: T,
    matches: impl FnMut(&T) -> bool,
) -> Vec<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The current elements. |
| `item` | `T` | The replacement, or the new element. |
| `matches` | `impl FnMut(&T) -> bool` | Tells which existing element `item` replaces. |

## Returns

`Vec<T>` — A new `Vec`; `items` is not changed.

## Examples

```rust
use helpers4::array::replace_or_append;

let users = [(1, "ana"), (2, "bo")];
assert_eq!(
    replace_or_append(&users, (1, "Ana"), |u| u.0 == 1),
    vec![(1, "Ana"), (2, "bo")]
);
assert_eq!(
    replace_or_append(&users, (3, "cy"), |u| u.0 == 3),
    vec![(1, "ana"), (2, "bo"), (3, "cy")]
);
```

## Source

[src/array/replace_or_append.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/array/replace_or_append.rs#L34)
