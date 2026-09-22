---
title: "round_to"
description: "Rounds value to decimals decimal places, half away from zero."
sidebar:
  label: "round_to"
---

Rounds `value` to `decimals` decimal places, half away from zero.

The result is the nearest `f64` to the rounded decimal, so it can still print with more digits
than requested for some values, and binary representation applies: `1.005` is stored as
`1.00499999999999989…`, so `round_to(1.005, 2)` is `1.0`. `NaN`, infinities, and values too
large to scale are returned unchanged.

## Import

```rust
use helpers4::number::round_to;
```

Cargo feature `number` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features number
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["number"] }
```

## Signature

```rust
pub fn round_to(value: f64, decimals: u32) -> f64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | `f64` | The number to round. |
| `decimals` | `u32` | How many decimal places to keep. |

## Returns

`f64`

## Examples

```rust
use helpers4::number::round_to;

assert_eq!(round_to(1.23456, 2), 1.23);
assert_eq!(round_to(2.5, 0), 3.0);
assert_eq!(round_to(-2.5, 0), -3.0);
assert_eq!(round_to(1234.0, 0), 1234.0);
```

## Source

[src/number/round_to.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/number/round_to.rs#L28)
