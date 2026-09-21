---
title: "mean"
description: "Arithmetic mean of values, or None when it is empty."
sidebar:
  label: "mean"
---

Arithmetic mean of `values`, or `None` when it is empty.

`NaN` and infinities propagate as usual for `f64`.

## Import

```rust
use helpers4::number::mean;
```

Cargo feature `number` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features number
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.3", default-features = false, features = ["number"] }
```

## Signature

```rust
pub fn mean(values: &[f64]) -> Option<f64>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `values` | `&[f64]` |

## Returns

`Option<f64>`

## Examples

```rust
use helpers4::number::mean;

assert_eq!(mean(&[1.0, 2.0, 6.0]), Some(3.0));
assert_eq!(mean(&[]), None);
```

## Source

[src/number/mean.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/number/mean.rs#L19)
