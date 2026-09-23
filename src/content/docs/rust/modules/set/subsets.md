---
title: "subsets"
description: "Every subset of items (the power set), including the empty one and items itself."
sidebar:
  label: "subsets"
---

Every subset of `items` (the power set), including the empty one and `items` itself.

Subsets are ordered by the bit pattern that selects them (bit `i` set means `items[i]` is
in), so the empty subset comes first and `items` itself last, and the elements of each
subset keep their original order. The number of subsets doubles with every item, so more than
[`MAX_SUBSET_ITEMS`](/rust/modules/set/max_subset_items/) items are refused.

## Import

```rust
use helpers4::set::subsets;
```

Cargo feature `set` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features set
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["set"] }
```

## Signature

```rust
pub fn subsets<T: Clone>(items: &[T]) -> Option<Vec<Vec<T>>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `items` | `&[T]` | The elements to choose from. |

## Returns

`Option<Vec<Vec<T>>>` — The `2^n` subsets, or `None` when `items` has more than [`MAX_SUBSET_ITEMS`](/rust/modules/set/max_subset_items/) elements.

## Examples

```rust
use helpers4::set::subsets;

assert_eq!(
    subsets(&["a", "b"]),
    Some(vec![vec![], vec!["a"], vec!["b"], vec!["a", "b"]])
);
assert_eq!(subsets(&[0; 17]), None);
```

## Source

[src/set/subsets.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/subsets.rs#L35)
