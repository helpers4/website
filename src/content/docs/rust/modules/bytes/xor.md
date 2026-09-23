---
title: "xor"
description: "The bytewise XOR of two slices of the same length."
sidebar:
  label: "xor"
---

The bytewise XOR of two slices of the same length.

## Import

```rust
use helpers4::bytes::xor;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn xor(a: &[u8], b: &[u8]) -> Option<Vec<u8>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[u8]` | The first slice. |
| `b` | `&[u8]` | The second slice. |

## Returns

`Option<Vec<u8>>` — A new `Vec` whose byte `i` is `a[i] ^ b[i]`, or `None` when the lengths differ.

## Examples

```rust
use helpers4::bytes::xor;

assert_eq!(xor(&[0b1100, 0b1010], &[0b1010, 0b1010]), Some(vec![0b0110, 0]));
assert_eq!(xor(&[1], &[1, 2]), None);
```

## Source

[src/bytes/xor.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/xor.rs#L25)
