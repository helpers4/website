---
title: "encode"
description: "Encodes bytes as lowercase hexadecimal."
sidebar:
  label: "encode"
---

Encodes `bytes` as lowercase hexadecimal.

## Import

```rust
use helpers4::hex::encode;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn encode(bytes: &[u8]) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `bytes` | `&[u8]` |

## Returns

`String`

## Examples

```rust
use helpers4::hex::encode;

assert_eq!(encode(&[0xde, 0xad, 0xbe, 0xef]), "deadbeef");
assert_eq!(encode(&[]), "");
```

## More in this module

- [`decode`](../decode/) — Decodes a hexadecimal string (either case) into bytes.
- [`decode_array`](../decode_array/) — Decodes a hexadecimal string into a fixed-size array, e.g.
- [`decode_to_slice`](../decode_to_slice/) — Decodes a hexadecimal string into `out`, which must be exactly half as long as the string.
- [`encode_upper`](../encode_upper/) — Encodes `bytes` as uppercase hexadecimal.
- [`DecodeError`](../decodeerror/) — Why a string could not be decoded as hexadecimal.

## Source

[src/hex/encode.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/hex/encode.rs#L18)
