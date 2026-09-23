---
title: "lcm"
description: "Least common multiple of a and b, or None when it does not fit in a u64."
sidebar:
  label: "lcm"
---

Least common multiple of `a` and `b`, or `None` when it does not fit in a `u64`.

`lcm(0, n)` is `0`.

## Import

```rust
use helpers4::number::lcm;
```

Cargo feature `number` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features number
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["number"] }
```

## Signature

```rust
pub fn lcm(a: u64, b: u64) -> Option<u64>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `u64` | The first number. |
| `b` | `u64` | The second number. |

## Returns

`Option<u64>`

## Examples

```rust
use helpers4::number::lcm;

assert_eq!(lcm(4, 6), Some(12));
assert_eq!(lcm(0, 5), Some(0));
assert_eq!(lcm(u64::MAX, u64::MAX - 1), None);
```

## Source

[src/number/lcm.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/number/lcm.rs#L26)
