---
title: "zigzag_encode"
description: "Maps a signed integer to an unsigned one so that small magnitudes stay small: 0, -1, 1, -2, 2, ... become 0, 1, 2, 3, 4, ...."
sidebar:
  label: "zigzag_encode"
---

Maps a signed integer to an unsigned one so that small magnitudes stay small: `0, -1, 1, -2,
2, ...` become `0, 1, 2, 3, 4, ...`. Varint formats (Protocol Buffers `sint`, Kiwi) encode
signed values this way before LEB128, so that `-1` takes one byte instead of ten.

The result does not depend on the integer width: an `i32` widened to `i64` encodes to the
same value as with 32-bit zigzag.

## Import

```rust
use helpers4::bytes::zigzag_encode;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn zigzag_encode(value: i64) -> u64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | `i64` | The signed integer. |

## Returns

`u64` — The zigzag-encoded value; [`zigzag_decode`](/rust/modules/bytes/zigzag_decode/) reverses it.

## Examples

```rust
use helpers4::bytes::zigzag_encode;

assert_eq!(zigzag_encode(0), 0);
assert_eq!(zigzag_encode(-1), 1);
assert_eq!(zigzag_encode(1), 2);
assert_eq!(zigzag_encode(i64::MIN), u64::MAX);
```

## Source

[src/bytes/zigzag_encode.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/bytes/zigzag_encode.rs#L31)
