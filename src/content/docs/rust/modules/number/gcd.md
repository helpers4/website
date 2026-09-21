---
title: "gcd"
description: "Greatest common divisor of a and b; gcd(0, 0) is 0."
sidebar:
  label: "gcd"
---

Greatest common divisor of `a` and `b`; `gcd(0, 0)` is `0`.

## Import

```rust
use helpers4::number::gcd;
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
pub fn gcd(mut a: u64, mut b: u64) -> u64
```

## Parameters

| Parameter | Type |
| --- | --- |
| `a` | `u64` |
| `b` | `u64` |

## Returns

`u64`

## Examples

```rust
use helpers4::number::gcd;

assert_eq!(gcd(12, 18), 6);
assert_eq!(gcd(7, 13), 1);
assert_eq!(gcd(0, 5), 5);
```

## Source

[src/number/gcd.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/number/gcd.rs#L17)
