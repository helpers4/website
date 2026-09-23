---
title: "Endian"
description: "The byte order of a multi-byte integer."
sidebar:
  label: "Endian"
---

The byte order of a multi-byte integer.

## Import

```rust
use helpers4::bytes::Endian;
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

## Definition

```rust
pub enum Endian {
    /// Most significant byte first (network order).
    Big,
    /// Least significant byte first.
    Little,
}
```

## Examples

```rust
use helpers4::bytes::{read_u16, Endian};

let bytes = [0x12, 0x34];
assert_eq!(read_u16(&bytes, 0, Endian::Big), Some(0x1234));
assert_eq!(read_u16(&bytes, 0, Endian::Little), Some(0x3412));
```

## Source

[src/bytes/endian.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/endian.rs#L17)
