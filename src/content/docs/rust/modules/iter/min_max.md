---
title: "min_max"
description: "Returns the smallest and largest item of iter in one pass, or None when it is empty."
sidebar:
  label: "min_max"
---

Returns the smallest and largest item of `iter` in one pass, or `None` when it is empty.

Equivalent to calling
[`.min()`](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.min) and
[`.max()`](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.max) separately, but
only iterates once, so it also works on an iterator that can only be consumed a single time.
Comparisons follow `T`'s `PartialOrd`: with `f64`, a `NaN` is neither smaller nor larger
than anything, exactly as `<` and `>` say, so a `NaN` that is never replaced (for instance the
very first item) stays in the result.

## Import

```rust
use helpers4::iter::min_max;
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
pub fn min_max<T: PartialOrd + Copy>(iter: impl IntoIterator<Item = T>) -> Option<(T, T)>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `iter` | `impl IntoIterator<Item = T>` | The items to scan. |

## Returns

`Option<(T, T)>` — `(min, max)`, or `None` when `iter` is empty.

## Examples

```rust
use helpers4::iter::min_max;

assert_eq!(min_max(1..=5), Some((1, 5)));
assert_eq!(min_max([3, 1, 4, 1, 5]), Some((1, 5)));
assert_eq!(min_max(Vec::<i32>::new()), None);
```

## Source

[src/iter/min_max.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/iter/min_max.rs#L32)
