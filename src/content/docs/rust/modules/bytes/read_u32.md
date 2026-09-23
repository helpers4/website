---
title: "read_u32"
description: "Reads a u32 from bytes at offset, in the given byte order."
sidebar:
  label: "read_u32"
---

Reads a `u32` from `bytes` at `offset`, in the given byte order.

## Import

```rust
use helpers4::bytes::read_u32;
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
pub fn read_u32(bytes: &[u8], offset: usize, endian: Endian) -> Option<u32>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The buffer to read from. |
| `offset` | `usize` | The index of the first byte to read. |
| `endian` | `Endian` | The byte order of the value in the buffer. |

## Returns

`Option<u32>` — The value, or `None` when fewer than 4 bytes remain at `offset`.

## Examples

```rust
use helpers4::bytes::{read_u32, Endian};

let bytes = [0x12, 0x34, 0x56, 0x78];
assert_eq!(read_u32(&bytes, 0, Endian::Big), Some(0x1234_5678));
assert_eq!(read_u32(&bytes, 0, Endian::Little), Some(0x7856_3412));
assert_eq!(read_u32(&bytes, 1, Endian::Big), None);
```

## Source

[src/bytes/read_u32.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/read_u32.rs#L30)
