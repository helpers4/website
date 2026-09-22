---
title: "chunk"
description: "Splits iter into consecutive chunks of size items, the last one possibly shorter."
sidebar:
  label: "chunk"
---

Splits `iter` into consecutive chunks of `size` items, the last one possibly shorter.

Unlike [`slice::chunks`](https://doc.rust-lang.org/std/primitive.slice.html#method.chunks),
this consumes any `IntoIterator`, not just a slice, and owns the items instead of borrowing
them, so it also works on a lazily-generated or single-use iterator. A `size` of `0` produces
no chunks at all, since a non-empty chunk cannot hold zero items.

## Import

```rust
use helpers4::iter::chunk;
```

Cargo feature `iter` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features iter
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["iter"] }
```

## Signature

```rust
pub fn chunk<I: IntoIterator>(iter: I, size: usize) -> Vec<Vec<I::Item>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `iter` | `I` | The items to split. |
| `size` | `usize` | How many items go in each chunk. |

## Returns

`Vec<Vec<I::Item>>` — The chunks, in order.

## Examples

```rust
use helpers4::iter::chunk;

assert_eq!(chunk(1..=5, 2), vec![vec![1, 2], vec![3, 4], vec![5]]);
assert_eq!(chunk(Vec::<i32>::new(), 3), Vec::<Vec<i32>>::new());
assert_eq!(chunk(1..=3, 0), Vec::<Vec<i32>>::new());
```

## Source

[src/iter/chunk.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/iter/chunk.rs#L30)
