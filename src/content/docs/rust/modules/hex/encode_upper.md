---
title: "encode_upper"
description: "Encodes bytes as uppercase hexadecimal."
sidebar:
  label: "encode_upper"
---

Encodes `bytes` as uppercase hexadecimal.

## Import

```rust
use helpers4::hex::encode_upper;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn encode_upper(bytes: &[u8]) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `bytes` | `&[u8]` |

## Returns

`String`

## Examples

```rust
use helpers4::hex::encode_upper;

assert_eq!(encode_upper(&[0xde, 0xad, 0xbe, 0xef]), "DEADBEEF");
```

## Source

[src/hex/encode_upper.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/hex/encode_upper.rs#L17)
