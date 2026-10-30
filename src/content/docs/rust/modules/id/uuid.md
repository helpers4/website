---
title: "Uuid"
description: "A UUID (RFC 9562): 128 bits, written xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx."
sidebar:
  label: "Uuid"
---

A UUID (RFC 9562): 128 bits, written `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

Two kinds can be built here, from randomness and time **you pass in** (see
[`new_v4`](#new_v4) and [`new_v7`](#new_v7), with the `random-entropy` feature, to
take them from the system):

- [`v4`](#v4): 122 random bits, the general-purpose unique id;
- [`v7`](#v7): a millisecond timestamp followed by random bits, so ids sort by creation
  time, which keeps database indexes compact.

`Display` writes the lowercase hyphenated form; [`parse`](#parse) reads it back (and the
32-digit form without hyphens, in any case).

## Import

```rust
use helpers4::id::Uuid;
```

Cargo feature `id` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features id
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["id"] }
```

## Definition

```rust
pub struct Uuid([u8; 16]) { /* private fields */ }
```

## Examples

```rust
use helpers4::id::Uuid;

let id = Uuid::v4([0xff; 16]); // pass random bytes from your entropy source
assert_eq!(id.to_string(), "ffffffff-ffff-4fff-bfff-ffffffffffff");
assert_eq!(id.version(), 4);

let sortable = Uuid::v7(1_700_000_000_000, [0; 10]);
assert_eq!(sortable.timestamp_millis(), Some(1_700_000_000_000));
assert_eq!(Uuid::parse(&sortable.to_string()), Ok(sortable));
```

## Methods

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseUuidError>
```

Reads a UUID from text: the hyphenated form `8-4-4-4-12` or 32 digits without hyphens,
upper or lower case. Braces and `urn:uuid:` prefixes are not accepted.

The version and variant bits are not checked: any 128-bit value is a valid UUID here.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to read. |

**Returns**

`Result<Self, ParseUuidError>` — The UUID.

**Errors**

Returns a [`ParseUuidError`](#error-type-parseuuiderror) for a length other than 36 or 32, a character that is not a
hexadecimal digit, or a hyphen that is not at its place.

**Examples**

```rust
use helpers4::id::Uuid;

let id = Uuid::parse("123E4567-e89b-12d3-a456-426614174000")?;
assert_eq!(id.version(), 1);
assert_eq!(id.to_string(), "123e4567-e89b-12d3-a456-426614174000");
assert_eq!(Uuid::parse("123e4567e89b12d3a456426614174000"), Ok(id));
```

### `new_v4`

```rust
pub fn new_v4() -> Result<Self, crate::random::EntropyError>
```

A random (version 4) UUID, with bytes from the operating system.

Needs the `random-entropy` feature.

**Returns**

`Result<Self, crate::random::EntropyError>` — The UUID.

**Errors**

Returns an [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) when the operating system cannot
provide random bytes.

**Examples**

```rust
use helpers4::id::Uuid;

let id = Uuid::new_v4()?;
assert_eq!(id.version(), 4);
```

### `new_v7`

```rust
pub fn new_v7() -> Result<Self, crate::random::EntropyError>
```

A time-sortable (version 7) UUID, with the current time from the system clock and
random bytes from the operating system.

Needs the `random-entropy` feature. A clock set before 1970 gives a timestamp of `0`.

**Returns**

`Result<Self, crate::random::EntropyError>` — The UUID.

**Errors**

Returns an [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) when the operating system cannot
provide random bytes.

**Examples**

```rust
use helpers4::id::Uuid;

let id = Uuid::new_v7()?;
assert_eq!(id.version(), 7);
assert!(id.timestamp_millis().is_some_and(|ms| ms > 1_700_000_000_000));
```

## Error type: ParseUuidError

Why a string is not a [`Uuid`](/rust/modules/id/uuid/).

```rust
use helpers4::id::ParseUuidError;

pub enum ParseUuidError {
    /// The string has neither 36 characters (`8-4-4-4-12`) nor 32 (no hyphens).
    InvalidLength {
        /// Length of the input in bytes.
        found: usize,
    },
    /// A byte is not a hexadecimal digit, or a hyphen is not at its place.
    InvalidCharacter {
        /// Byte offset of the offending byte in the input.
        index: usize,
    },
}
```

### Examples

```rust
use helpers4::id::{ParseUuidError, Uuid};

assert_eq!(Uuid::parse("not-a-uuid"), Err(ParseUuidError::InvalidLength { found: 10 }));
```

## Source

[src/id/uuid.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/id/uuid.rs#L37)
