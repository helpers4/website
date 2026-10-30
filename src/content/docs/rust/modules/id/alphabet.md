---
title: "Alphabet"
description: "The characters a short id is made of: between 2 and 256 distinct characters."
sidebar:
  label: "Alphabet"
---

The characters a short id is made of: between 2 and 256 distinct characters.

Presets cover the common cases; [`new`](#new) checks a custom set. Every character has
the same probability in an id, which needs them distinct (a repeated character would be more
likely) and no more than a byte of randomness can index (256).

## Import

```rust
use helpers4::id::Alphabet;
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
pub struct Alphabet { /* private fields */ }
```

## Examples

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::numbers().size(), 10);
assert_eq!(Alphabet::safe().size(), 56); // no 0 O o 1 I l: fine to read aloud or retype
assert_eq!(Alphabet::new("ACGT")?.size(), 4);
```

## Methods

### `new`

```rust
pub fn new(characters: &str) -> Result<Self, AlphabetError>
```

A custom alphabet.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `characters` | `&str` | The characters, each once, in any order. |

**Returns**

`Result<Self, AlphabetError>` — The alphabet.

**Errors**

Returns an [`AlphabetError`](#error-type-alphabeterror) for fewer than 2 characters, more than 256, or a repeated
character.

**Examples**

```rust
use helpers4::id::{Alphabet, AlphabetError};

assert!(Alphabet::new("01").is_ok());
assert_eq!(Alphabet::new("aa"), Err(AlphabetError::Duplicate { character: 'a' }));
```

### `numbers`

```rust
pub fn numbers() -> Self
```

The digits `0-9`.

**Returns**

`Self` — The alphabet.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::numbers().size(), 10);
```

### `lowercase`

```rust
pub fn lowercase() -> Self
```

The lowercase letters `a-z`.

**Returns**

`Self` — The alphabet.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::lowercase().size(), 26);
```

### `uppercase`

```rust
pub fn uppercase() -> Self
```

The uppercase letters `A-Z`.

**Returns**

`Self` — The alphabet.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::uppercase().size(), 26);
```

### `alphanumeric`

```rust
pub fn alphanumeric() -> Self
```

Letters and digits, `A-Za-z0-9`.

**Returns**

`Self` — The alphabet.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::alphanumeric().size(), 62);
```

### `url_safe`

```rust
pub fn url_safe() -> Self
```

The 64 characters that are safe in a URL path and a file name without escaping:
`A-Za-z0-9_-`.

**Returns**

`Self` — The alphabet.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::url_safe().size(), 64);
```

### `safe`

```rust
pub fn safe() -> Self
```

Letters and digits without the characters that look alike, for ids a person reads or
types: no `0`, `1`, `O`, `o`, `I` or `l`.

**Returns**

`Self` — The alphabet, 56 characters.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::safe().size(), 56);
```

### `size`

```rust
pub fn size(&self) -> usize
```

The number of characters.

**Returns**

`usize` — A number from 2 to 256.

**Examples**

```rust
use helpers4::id::Alphabet;

assert_eq!(Alphabet::new("abc")?.size(), 3);
```

## Error type: AlphabetError

Why a string cannot be an [`Alphabet`](/rust/modules/id/alphabet/).

```rust
use helpers4::id::AlphabetError;

pub enum AlphabetError {
    /// Fewer than 2 characters: an id would carry no information.
    TooShort {
        /// Number of characters given.
        found: usize,
    },
    /// More than 256 characters, which a byte of randomness cannot index.
    TooLong {
        /// Number of characters given.
        found: usize,
    },
    /// A character appears twice, which would make it more likely than the others.
    Duplicate {
        /// The repeated character.
        character: char,
    },
}
```

### Examples

```rust
use helpers4::id::{Alphabet, AlphabetError};

assert_eq!(Alphabet::new("a"), Err(AlphabetError::TooShort { found: 1 }));
assert_eq!(Alphabet::new("abca"), Err(AlphabetError::Duplicate { character: 'a' }));
```

## Source

[src/id/alphabet.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/id/alphabet.rs#L26)
