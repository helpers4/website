---
title: "decode"
description: "Decodes a hexadecimal string (either case) into bytes."
sidebar:
  label: "decode"
---

Decodes a hexadecimal string (either case) into bytes.

The string must be made of digit pairs only: surrounding whitespace, a `0x` prefix or
separators are errors, so trim or strip them first.

## Import

```rust
use helpers4::hex::decode;
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
pub fn decode(hex: &str) -> Result<Vec<u8>, DecodeError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `hex` | `&str` |

## Returns

`Result<Vec<u8>, DecodeError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`DecodeError::OddLength`](../decodeerror/) for an odd number of characters, [`DecodeError::InvalidChar`](../decodeerror/) for
a character that is not a hex digit.

## Examples

```rust
use helpers4::hex::decode;

assert_eq!(decode("DeadBeef")?, vec![0xde, 0xad, 0xbe, 0xef]);
assert!(decode("abc").is_err());
```

## More in this module

- [`decode_array`](../decode_array/) — Decodes a hexadecimal string into a fixed-size array, e.g.
- [`decode_to_slice`](../decode_to_slice/) — Decodes a hexadecimal string into `out`, which must be exactly half as long as the string.
- [`encode`](../encode/) — Encodes `bytes` as lowercase hexadecimal.
- [`encode_upper`](../encode_upper/) — Encodes `bytes` as uppercase hexadecimal.
- [`DecodeError`](../decodeerror/) — Why a string could not be decoded as hexadecimal.

## Source

[src/hex/decode.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/hex/decode.rs#L27)
