---
title: "read_u16"
description: "Reads a u16 from bytes at offset, in the given byte order."
sidebar:
  label: "read_u16"
---

Reads a `u16` from `bytes` at `offset`, in the given byte order.

## Import

```rust
use helpers4::bytes::read_u16;
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
pub fn read_u16(bytes: &[u8], offset: usize, endian: Endian) -> Option<u16>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The buffer to read from. |
| `offset` | `usize` | The index of the first byte to read. |
| `endian` | `Endian` | The byte order of the value in the buffer. |

## Returns

`Option<u16>` — The value, or `None` when fewer than 2 bytes remain at `offset`.

## Examples

```rust
use helpers4::bytes::{read_u16, Endian};

let bytes = [0x12, 0x34];
assert_eq!(read_u16(&bytes, 0, Endian::Big), Some(0x1234));
assert_eq!(read_u16(&bytes, 0, Endian::Little), Some(0x3412));
assert_eq!(read_u16(&bytes, 1, Endian::Big), None);
```

## Source

[src/bytes/read_u16.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/read_u16.rs#L30)
