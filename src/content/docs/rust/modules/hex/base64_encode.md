---
title: "base64_encode"
description: "Encodes data as base64 (RFC 4648 section 4), with = padding."
sidebar:
  label: "base64_encode"
---

Encodes `data` as base64 (RFC 4648 section 4), with `=` padding.

## Import

```rust
use helpers4::hex::base64_encode;
```

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.7", default-features = false, features = ["hex"] }
```

## Signature

```rust
pub fn base64_encode(data: &[u8]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `data` | `&[u8]` | The bytes to encode. |

## Returns

`String` — The base64 string; its length is always a multiple of 4.

## Examples

```rust
use helpers4::hex::base64_encode;

assert_eq!(base64_encode(b"any carnal pleas"), "YW55IGNhcm5hbCBwbGVhcw==");
assert_eq!(base64_encode(b""), "");
```

## Source

[src/hex/base64_encode.rs](https://github.com/helpers4/rust/blob/v0.0.7/src/hex/base64_encode.rs#L26)
