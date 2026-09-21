---
title: "percentage"
description: "What percent part is of total, or None when total is zero."
sidebar:
  label: "percentage"
---

What percent `part` is of `total`, or `None` when `total` is zero.

The result is not clamped: a `part` larger than `total` gives more than 100.

## Import

```rust
use helpers4::number::percentage;
```

Cargo feature `number` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features number
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["number"] }
```

## Signature

```rust
pub fn percentage(part: f64, total: f64) -> Option<f64>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `part` | `f64` |
| `total` | `f64` |

## Returns

`Option<f64>`

## Examples

```rust
use helpers4::number::percentage;

assert_eq!(percentage(25.0, 200.0), Some(12.5));
assert_eq!(percentage(3.0, 2.0), Some(150.0));
assert_eq!(percentage(1.0, 0.0), None);
```

## Source

[src/number/percentage.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/number/percentage.rs#L19)
