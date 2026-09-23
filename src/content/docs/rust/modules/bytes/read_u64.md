---
title: "read_u64"
description: "Reads a u64 from bytes at offset, in the given byte order."
sidebar:
  label: "read_u64"
---

Reads a `u64` from `bytes` at `offset`, in the given byte order.

## Import

```rust
use helpers4::bytes::read_u64;
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
pub fn read_u64(bytes: &[u8], offset: usize, endian: Endian) -> Option<u64>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The buffer to read from. |
| `offset` | `usize` | The index of the first byte to read. |
| `endian` | `Endian` | The byte order of the value in the buffer. |

## Returns

`Option<u64>` — The value, or `None` when fewer than 8 bytes remain at `offset`.

## Examples

```rust
use helpers4::bytes::{read_u64, Endian};

let bytes = [0, 0, 0, 0, 0, 0, 1, 0];
assert_eq!(read_u64(&bytes, 0, Endian::Big), Some(256));
assert_eq!(read_u64(&bytes, 0, Endian::Little), Some(0x0001_0000_0000_0000));
assert_eq!(read_u64(&bytes, 1, Endian::Big), None);
```

## Source

[src/bytes/read_u64.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/read_u64.rs#L30)
