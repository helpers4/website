---
title: "first_duplicate"
description: "Returns the first item of iter that has already appeared earlier in it, or None when every item is unique."
sidebar:
  label: "first_duplicate"
---

Returns the first item of `iter` that has already appeared earlier in it, or `None` when
every item is unique.

Unlike [`array::duplicates`](/rust/modules/array/duplicates/), this stops at the first repeat, so it
works on an infinite or otherwise unbounded iterator instead of requiring an already-collected
slice.

## Import

```rust
use helpers4::iter::first_duplicate;
```

Cargo feature `iter` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features iter
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["iter"] }
```

## Signature

```rust
pub fn first_duplicate<T: Eq + Hash + Clone>(iter: impl IntoIterator<Item = T>) -> Option<T>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `iter` | `impl IntoIterator<Item = T>` | The items to scan, in order. |

## Returns

`Option<T>` — The first repeated item, or `None` when there is none.

## Examples

```rust
use helpers4::iter::first_duplicate;

assert_eq!(first_duplicate([1, 2, 3, 2, 1]), Some(2));
assert_eq!(first_duplicate(["a", "b", "c"]), None);
```

## Source

[src/iter/first_duplicate.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/iter/first_duplicate.rs#L30)
