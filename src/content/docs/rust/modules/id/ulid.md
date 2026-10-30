---
title: "Ulid"
description: "A ULID: 128 bits made of a 48-bit millisecond timestamp and 80 random bits, written as 26 characters of Crockford's base32 (01ARYZ6S41TSV4RRFFQ69G5FAV)."
sidebar:
  label: "Ulid"
---

A ULID: 128 bits made of a 48-bit millisecond timestamp and 80 random bits, written as 26
characters of Crockford's base32 (`01ARYZ6S41TSV4RRFFQ69G5FAV`).

Ulids sort by creation time, both as numbers and as text, and are shorter than a UUID. Time
and randomness are **parameters** of [`from_parts`](#from_parts); with the
`random-entropy` feature, [`new`](#new) takes them from the system. Ids made in the
same millisecond are not ordered among themselves (there is no monotonic counter).

## Import

```rust
use helpers4::id::Ulid;
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
pub struct Ulid(u128) { /* private fields */ }
```

## Examples

```rust
use helpers4::id::Ulid;

let id = Ulid::from_parts(1_469_918_176_385, [0; 10]);
assert_eq!(id.to_string(), "01ARYZ6S410000000000000000");
assert_eq!(id.timestamp_millis(), 1_469_918_176_385);
assert_eq!(Ulid::parse("01ARYZ6S41TSV4RRFFQ69G5FAV").map(|u| u.timestamp_millis()), Ok(1_469_918_176_385));
```

## Methods

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseUlidError>
```

Reads a ULID from its 26-character form, in upper or lower case. Only the 32 symbols of
Crockford's base32 are accepted (`I`, `L`, `O` and `U` are not).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to read. |

**Returns**

`Result<Self, ParseUlidError>` — The ULID.

**Errors**

Returns a [`ParseUlidError`](#error-type-parseuliderror) for a length other than 26, a character outside the
alphabet, or a first character above `7` (the value would not fit in 128 bits).

**Examples**

```rust
use helpers4::id::Ulid;

let id = Ulid::parse("01aryz6s41tsv4rrffq69g5fav")?;
assert_eq!(id.to_string(), "01ARYZ6S41TSV4RRFFQ69G5FAV");
```

### `new`

```rust
pub fn new() -> Result<Self, crate::random::EntropyError>
```

A ULID with the current time from the system clock and random bits from the operating
system.

Needs the `random-entropy` feature. A clock set before 1970 gives a timestamp of `0`.

**Returns**

`Result<Self, crate::random::EntropyError>` — The ULID.

**Errors**

Returns an [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) when the operating system cannot
provide random bytes.

**Examples**

```rust
use helpers4::id::Ulid;

let id = Ulid::new()?;
assert_eq!(id.to_string().len(), 26);
```

## Error type: ParseUlidError

Why a string is not a [`Ulid`](/rust/modules/id/ulid/).

```rust
use helpers4::id::ParseUlidError;

pub enum ParseUlidError {
    /// The string does not have 26 characters.
    InvalidLength {
        /// Length of the input in bytes.
        found: usize,
    },
    /// A byte is not one of the 32 symbols of Crockford's base32.
    InvalidCharacter {
        /// Byte offset of the offending byte in the input.
        index: usize,
    },
    /// The first character is above `7`: the value would not fit in 128 bits.
    Overflow,
}
```

### Examples

```rust
use helpers4::id::{ParseUlidError, Ulid};

assert_eq!(Ulid::parse("8ZZZZZZZZZZZZZZZZZZZZZZZZZ"), Err(ParseUlidError::Overflow));
```

## Source

[src/id/ulid.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/id/ulid.rs#L31)
