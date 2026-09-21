---
title: "hex"
description: "Hexadecimal encoding and decoding with typed errors."
sidebar:
  order: 4
---

Hexadecimal encoding and decoding with typed errors.

Decoding accepts either case and rejects anything that is not pairs of hex digits, so trim
whitespace and strip `0x` prefixes before calling it.

Cargo feature `hex` (enabled by default) · import path `helpers4::hex`

| Item | What it does |
| --- | --- |
| [`decode`](#decode) | Decodes a hexadecimal string (either case) into bytes. |
| [`decode_array`](#decode_array) | Decodes a hexadecimal string into a fixed-size array, e.g. |
| [`decode_to_slice`](#decode_to_slice) | Decodes a hexadecimal string into `out`, which must be exactly half as long as the string. |
| [`encode`](#encode) | Encodes `bytes` as lowercase hexadecimal. |
| [`encode_upper`](#encode_upper) | Encodes `bytes` as uppercase hexadecimal. |
| [`DecodeError`](#decodeerror) | Why a string could not be decoded as hexadecimal. |

## `decode`

```rust
pub fn decode(hex: &str) -> Result<Vec<u8>, DecodeError>
```

Decodes a hexadecimal string (either case) into bytes.

The string must be made of digit pairs only: surrounding whitespace, a `0x` prefix or
separators are errors, so trim or strip them first.

### Errors

[`DecodeError::OddLength`](#decodeerror) for an odd number of characters, [`DecodeError::InvalidChar`](#decodeerror) for
a character that is not a hex digit.

### Examples

```rust
use helpers4::hex::decode;

assert_eq!(decode("DeadBeef")?, vec![0xde, 0xad, 0xbe, 0xef]);
assert!(decode("abc").is_err());
```

## `decode_array`

```rust
pub fn decode_array<const N: usize>(hex: &str) -> Result<[u8; N], DecodeError>
```

Decodes a hexadecimal string into a fixed-size array, e.g. a 32-byte key from 64 hex digits.

### Errors

Same as [`decode_to_slice`](#decode_to_slice): the string must have exactly `2 * N`
hex digits.

### Examples

```rust
use helpers4::hex::decode_array;

let key: [u8; 4] = decode_array("deadbeef")?;
assert_eq!(key, [0xde, 0xad, 0xbe, 0xef]);
assert!(decode_array::<4>("dead").is_err());
```

## `decode_to_slice`

```rust
pub fn decode_to_slice(hex: &str, out: &mut [u8]) -> Result<(), DecodeError>
```

Decodes a hexadecimal string into `out`, which must be exactly half as long as the string.

Nothing is allocated; on error `out` may be partially written.

### Errors

[`DecodeError::OddLength`](#decodeerror), [`DecodeError::InvalidLength`](#decodeerror) when the string does not match
`out.len() * 2`, or [`DecodeError::InvalidChar`](#decodeerror).

### Examples

```rust
use helpers4::hex::decode_to_slice;

let mut buf = [0u8; 2];
decode_to_slice("beef", &mut buf)?;
assert_eq!(buf, [0xbe, 0xef]);
```

## `encode`

```rust
pub fn encode(bytes: &[u8]) -> String
```

Encodes `bytes` as lowercase hexadecimal.

### Examples

```rust
use helpers4::hex::encode;

assert_eq!(encode(&[0xde, 0xad, 0xbe, 0xef]), "deadbeef");
assert_eq!(encode(&[]), "");
```

## `encode_upper`

```rust
pub fn encode_upper(bytes: &[u8]) -> String
```

Encodes `bytes` as uppercase hexadecimal.

### Examples

```rust
use helpers4::hex::encode_upper;

assert_eq!(encode_upper(&[0xde, 0xad, 0xbe, 0xef]), "DEADBEEF");
```

## `DecodeError`

```rust
#[non_exhaustive]
pub enum DecodeError {
    /// The string has an odd number of characters.
    OddLength,
    /// The string does not match the requested output size.
    InvalidLength {
        /// Expected number of hex characters (twice the output size).
        expected: usize,
        /// Actual number of hex characters.
        actual: usize,
    },
    /// A character that is not a hexadecimal digit.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
}
```

Why a string could not be decoded as hexadecimal.

