---
title: "zigzag_decode"
description: "Reverses zigzag_encode: 0, 1, 2, 3, 4, ... become 0, -1, 1, -2, 2, ...."
sidebar:
  label: "zigzag_decode"
---

Reverses [`zigzag_encode`](/rust/modules/bytes/zigzag_encode/): `0, 1, 2, 3, 4, ...` become
`0, -1, 1, -2, 2, ...`.

## Import

```rust
use helpers4::bytes::zigzag_decode;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn zigzag_decode(value: u64) -> i64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | `u64` | The zigzag-encoded value. |

## Returns

`i64` — The signed integer. A value read from a 32-bit varint always fits in an `i32`.

## Examples

```rust
use helpers4::bytes::zigzag_decode;

assert_eq!(zigzag_decode(0), 0);
assert_eq!(zigzag_decode(1), -1);
assert_eq!(zigzag_decode(2), 1);
assert_eq!(zigzag_decode(u64::MAX), i64::MIN);
```

## Source

[src/bytes/zigzag_decode.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/bytes/zigzag_decode.rs#L27)
