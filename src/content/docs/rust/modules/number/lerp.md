---
title: "lerp"
description: "Linear interpolation between from and to: from at t = 0, to at t = 1."
sidebar:
  label: "lerp"
---

Linear interpolation between `from` and `to`: `from` at `t = 0`, `to` at `t = 1`.

`t` is not clamped, so values outside `0..=1` extrapolate. Written as
`from * (1 - t) + to * t`, it is exact at both ends.

## Import

```rust
use helpers4::number::lerp;
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
pub fn lerp(from: f64, to: f64, t: f64) -> f64
```

## Parameters

| Parameter | Type |
| --- | --- |
| `from` | `f64` |
| `to` | `f64` |
| `t` | `f64` |

## Returns

`f64`

## Examples

```rust
use helpers4::number::lerp;

assert_eq!(lerp(10.0, 20.0, 0.5), 15.0);
assert_eq!(lerp(0.0, 100.0, 1.0), 100.0);
assert_eq!(lerp(0.0, 10.0, 1.5), 15.0);
```

## Source

[src/number/lerp.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/number/lerp.rs#L20)
