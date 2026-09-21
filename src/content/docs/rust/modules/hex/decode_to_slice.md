---
title: "decode_to_slice"
description: "Decodes a hexadecimal string into out, which must be exactly half as long as the string."
sidebar:
  label: "decode_to_slice"
---

Decodes a hexadecimal string into `out`, which must be exactly half as long as the string.

Nothing is allocated; on error `out` may be partially written.

## Import

```rust
use helpers4::hex::decode_to_slice;
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
pub fn decode_to_slice(hex: &str, out: &mut [u8]) -> Result<(), DecodeError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hex` | `&str` |
| `out` | `&mut [u8]` |

## Returns

`Result<(), DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`DecodeError::OddLength`](../decodeerror/), [`DecodeError::InvalidLength`](../decodeerror/) when the string does not match
`out.len() * 2`, or [`DecodeError::InvalidChar`](../decodeerror/).

## Examples

```rust
use helpers4::hex::decode_to_slice;

let mut buf = [0u8; 2];
decode_to_slice("beef", &mut buf)?;
assert_eq!(buf, [0xbe, 0xef]);
```

## Source

[src/hex/decode_to_slice.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/hex/decode_to_slice.rs#L27)
