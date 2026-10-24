---
title: "ByteReader"
description: "A cursor over a byte slice, for decoding binary formats: fixed-size integers and floats, LEB128 varints (signed ones zigzag-encoded), byte runs and NUL-terminated strings."
sidebar:
  label: "ByteReader"
---

A cursor over a byte slice, for decoding binary formats: fixed-size integers and floats,
LEB128 varints (signed ones zigzag-encoded), byte runs and NUL-terminated strings.

Every `read_*` method returns `None` when the data is truncated or invalid, and then leaves
the position where it was, so [`position`](#position) is the offset of the read that
failed: enough to build a precise error in the caller's own error type.

## Import

```rust
use helpers4::bytes::ByteReader;
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

## Definition

```rust
pub struct ByteReader<'a> { /* private fields */ }
```

## Examples

```rust
use helpers4::bytes::{ByteReader, Endian};

let data = [0x2a, 0xac, 0x02, b'h', b'i', 0, 0x01, 0x00];
let mut reader = ByteReader::new(&data);
assert_eq!(reader.read_u8(), Some(42));
assert_eq!(reader.read_var_u32(), Some(300));
assert_eq!(reader.read_cstr(), Some("hi"));
assert_eq!(reader.read_u16(Endian::Little), Some(1));
assert_eq!(reader.read_u8(), None); // end of data
assert_eq!(reader.position(), 8);
```

## Methods

### `read_u8`

```rust
pub fn read_u8(&mut self) -> Option<u8>
```

Reads one byte.

**Returns**

`Option<u8>` — The byte, or `None` at the end of the data.

**Examples**

```rust
use helpers4::bytes::ByteReader;

let mut reader = ByteReader::new(&[7]);
assert_eq!(reader.read_u8(), Some(7));
assert_eq!(reader.read_u8(), None);
```

### `read_bytes`

```rust
pub fn read_bytes(&mut self, len: usize) -> Option<&'a [u8]>
```

Reads `len` bytes, borrowed from the data (no copy).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `len` | `usize` | The number of bytes. |

**Returns**

`Option<&'a [u8]>` — The bytes, or `None` when fewer than `len` remain.

**Examples**

```rust
use helpers4::bytes::ByteReader;

let mut reader = ByteReader::new(b"abc");
assert_eq!(reader.read_bytes(2), Some(&b"ab"[..]));
assert_eq!(reader.read_bytes(2), None);
```

### `read_u16`

```rust
pub fn read_u16(&mut self, endian: Endian) -> Option<u16>
```

Reads a `u16` in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<u16>` — The value, or `None` when fewer than 2 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[0x12, 0x34]).read_u16(Endian::Big), Some(0x1234));
```

### `read_u32`

```rust
pub fn read_u32(&mut self, endian: Endian) -> Option<u32>
```

Reads a `u32` in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<u32>` — The value, or `None` when fewer than 4 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[1, 0, 0, 0]).read_u32(Endian::Little), Some(1));
```

### `read_u64`

```rust
pub fn read_u64(&mut self, endian: Endian) -> Option<u64>
```

Reads a `u64` in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<u64>` — The value, or `None` when fewer than 8 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[0, 0, 0, 0, 0, 0, 0, 9]).read_u64(Endian::Big), Some(9));
```

### `read_i16`

```rust
pub fn read_i16(&mut self, endian: Endian) -> Option<i16>
```

Reads an `i16` (two's complement) in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<i16>` — The value, or `None` when fewer than 2 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[0xff, 0xfe]).read_i16(Endian::Big), Some(-2));
```

### `read_i32`

```rust
pub fn read_i32(&mut self, endian: Endian) -> Option<i32>
```

Reads an `i32` (two's complement) in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<i32>` — The value, or `None` when fewer than 4 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[0xff; 4]).read_i32(Endian::Little), Some(-1));
```

### `read_i64`

```rust
pub fn read_i64(&mut self, endian: Endian) -> Option<i64>
```

Reads an `i64` (two's complement) in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<i64>` — The value, or `None` when fewer than 8 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

assert_eq!(ByteReader::new(&[0xff; 8]).read_i64(Endian::Big), Some(-1));
```

### `read_f32`

```rust
pub fn read_f32(&mut self, endian: Endian) -> Option<f32>
```

Reads an IEEE 754 `f32` in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<f32>` — The value, or `None` when fewer than 4 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

let bytes = 1.5f32.to_le_bytes();
assert_eq!(ByteReader::new(&bytes).read_f32(Endian::Little), Some(1.5));
```

### `read_f64`

```rust
pub fn read_f64(&mut self, endian: Endian) -> Option<f64>
```

Reads an IEEE 754 `f64` in the given byte order.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `endian` | `Endian` | The byte order of the value. |

**Returns**

`Option<f64>` — The value, or `None` when fewer than 8 bytes remain.

**Examples**

```rust
use helpers4::bytes::{ByteReader, Endian};

let bytes = (-0.25f64).to_be_bytes();
assert_eq!(ByteReader::new(&bytes).read_f64(Endian::Big), Some(-0.25));
```

### `read_var_u32`

```rust
pub fn read_var_u32(&mut self) -> Option<u32>
```

Reads an unsigned LEB128 varint of at most 32 bits: 7 bits per byte, least significant
first, the high bit set on every byte but the last.

Overlong encodings (`0x80 0x00` for `0`) are accepted, as most decoders do.

**Returns**

`Option<u32>` — The value, or `None` when the data ends inside the varint or the value needs more than
32 bits (a 5th byte above `0x0f`, or a 6th byte).

**Examples**

```rust
use helpers4::bytes::ByteReader;

assert_eq!(ByteReader::new(&[0xac, 0x02]).read_var_u32(), Some(300));
assert_eq!(ByteReader::new(&[0xff, 0xff, 0xff, 0xff, 0x0f]).read_var_u32(), Some(u32::MAX));
assert_eq!(ByteReader::new(&[0xff, 0xff, 0xff, 0xff, 0x1f]).read_var_u32(), None);
```

### `read_var_u64`

```rust
pub fn read_var_u64(&mut self) -> Option<u64>
```

Reads an unsigned LEB128 varint of at most 64 bits (up to 10 bytes), like
[`read_var_u32`](#read_var_u32).

**Returns**

`Option<u64>` — The value, or `None` when the data ends inside the varint or the value needs more than
64 bits (a 10th byte above `0x01`, or an 11th byte).

**Examples**

```rust
use helpers4::bytes::ByteReader;

let max = [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01];
assert_eq!(ByteReader::new(&max).read_var_u64(), Some(u64::MAX));
```

### `read_var_i32`

```rust
pub fn read_var_i32(&mut self) -> Option<i32>
```

Reads a signed varint: a zigzag-encoded (see [`zigzag_decode`](/rust/modules/bytes/zigzag_decode/)) LEB128 varint of at
most 32 bits.

**Returns**

`Option<i32>` — The value, or `None` as for [`read_var_u32`](#read_var_u32).

**Examples**

```rust
use helpers4::bytes::ByteReader;

assert_eq!(ByteReader::new(&[0x01]).read_var_i32(), Some(-1));
assert_eq!(ByteReader::new(&[0x02]).read_var_i32(), Some(1));
```

### `read_var_i64`

```rust
pub fn read_var_i64(&mut self) -> Option<i64>
```

Reads a signed varint: a zigzag-encoded (see [`zigzag_decode`](/rust/modules/bytes/zigzag_decode/)) LEB128 varint of at
most 64 bits.

**Returns**

`Option<i64>` — The value, or `None` as for [`read_var_u64`](#read_var_u64).

**Examples**

```rust
use helpers4::bytes::ByteReader;

assert_eq!(ByteReader::new(&[0x03]).read_var_i64(), Some(-2));
```

### `read_cstr`

```rust
pub fn read_cstr(&mut self) -> Option<&'a str>
```

Reads a NUL-terminated UTF-8 string and skips the terminating `0`.

**Returns**

`Option<&'a str>` — The string without its terminator, borrowed from the data, or `None` when there is no
`0` byte before the end or the bytes are not valid UTF-8.

**Examples**

```rust
use helpers4::bytes::ByteReader;

let mut reader = ByteReader::new(b"Frame 1\0\0");
assert_eq!(reader.read_cstr(), Some("Frame 1"));
assert_eq!(reader.read_cstr(), Some(""));
assert_eq!(reader.read_cstr(), None);
```

## Source

[src/bytes/byte_reader.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/bytes/byte_reader.rs#L29)
