---
title: "base32_encode"
description: "Encodes data as base32 (RFC 4648 section 6), with = padding."
sidebar:
  label: "base32_encode"
---

Encodes `data` as base32 (RFC 4648 section 6), with `=` padding.

## Import

```rust
use helpers4::hex::base32_encode;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn base32_encode(data: &[u8]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `data` | `&[u8]` | The bytes to encode. |

## Returns

`String` — The base32 string; its length is always a multiple of 8.

## Examples

```rust
use helpers4::hex::base32_encode;

assert_eq!(base32_encode(b"foobar"), "MZXW6YTBOI======");
assert_eq!(base32_encode(b""), "");
```

## Source

[src/hex/base32_encode.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/hex/base32_encode.rs#L26)
