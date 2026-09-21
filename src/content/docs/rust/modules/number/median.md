---
title: "median"
description: "Median of values, or None when it is empty or contains a NaN."
sidebar:
  label: "median"
---

Median of `values`, or `None` when it is empty or contains a `NaN`.

For an even number of values it is the midpoint of the two middle ones. The input is not
modified.

## Import

```rust
use helpers4::number::median;
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
pub fn median(values: &[f64]) -> Option<f64>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `values` | `&[f64]` |

## Returns

`Option<f64>`

## Examples

```rust
use helpers4::number::median;

assert_eq!(median(&[3.0, 1.0, 2.0]), Some(2.0));
assert_eq!(median(&[4.0, 1.0, 3.0, 2.0]), Some(2.5));
assert_eq!(median(&[]), None);
```

## Source

[src/number/median.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/number/median.rs#L20)
