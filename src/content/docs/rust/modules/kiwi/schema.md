---
title: "Schema"
description: "A Kiwi schema: the definitions (enums, structs and messages) that give meaning to the bytes of a message."
sidebar:
  label: "Schema"
---

A Kiwi schema: the definitions (enums, structs and messages) that give meaning to the bytes
of a message.

Read one from its binary form with [`Schema::parse`](/rust/modules/env/parse/), then decode messages with
[`Schema::decode`](/rust/modules/hex/decode/).

## Import

```rust
use helpers4::kiwi::Schema;
```

Cargo feature `kiwi` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features kiwi
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["kiwi"] }
```

## Definition

```rust
pub struct Schema { /* private fields */ }
```

## Examples

```rust
use helpers4::kiwi::Schema;

// A schema with one message, `Ping`, holding a `uint` field `id` (field number 1).
let schema = Schema::parse(b"\x01Ping\0\x02\x01id\0\x07\x00\x01")?;
let ping = schema.decode(&[1, 42, 0], "Ping")?;
assert_eq!(ping.get("id").and_then(|id| id.as_u32()), Some(42));
```

## Methods

### `parse`

```rust
pub fn parse(bytes: &[u8]) -> Result<Self, KiwiError>
```

Reads a binary Kiwi schema (what Kiwi's `compileSchema` / `encodeBinarySchema` write; in
a `.fig` file, the first decompressed chunk).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The binary schema. Bytes after the last definition are ignored. |

**Returns**

`Result<Self, KiwiError>` — The schema.

**Errors**

A [`KiwiError`](#error-type-kiwierror) on truncated data, an invalid string, an unknown definition kind, or a
field whose type is not a built-in type nor a definition of the schema.

**Examples**

```rust
use helpers4::kiwi::{Kind, Schema};

let schema = Schema::parse(b"\x01Ping\0\x02\x01id\0\x07\x00\x01")?;
assert_eq!(&*schema.definitions[0].name, "Ping");
assert_eq!(schema.definitions[0].kind, Kind::Message);
```

### `find`

```rust
pub fn find(&self, name: &str) -> Option<usize>
```

The index of the definition with this name.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `&str` | The definition name. |

**Returns**

`Option<usize>` — The index in [`definitions`](#definitions), or `None`.

**Examples**

```rust
use helpers4::kiwi::Schema;

let schema = Schema::parse(b"\x01Ping\0\x02\x00")?;
assert_eq!(schema.find("Ping"), Some(0));
assert_eq!(schema.find("Pong"), None);
```

### `decode`

```rust
pub fn decode(&self, bytes: &[u8], root: &str) -> Result<Value, KiwiError>
```

Decodes a message as an instance of one definition (usually a message, the root of the
file). Bytes after the value are left alone.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `&[u8]` | The encoded value. |
| `root` | `&str` | The name of the definition it is an instance of. |

**Returns**

`Result<Value, KiwiError>` — The value: an [`Value::Object`](/rust/modules/kiwi/value/) for a message or a struct, with enums by name and a
`byte[]` as [`Value::Bytes`](/rust/modules/kiwi/value/).

**Errors**

A [`KiwiError`](#error-type-kiwierror) when `root` is unknown, the data is truncated or invalid (a message with a
field id its definition lacks, a bad string), or it nests deeper than 64 levels.

**Examples**

```rust
use helpers4::kiwi::{KiwiError, Schema};

let schema = Schema::parse(b"\x01Ping\0\x02\x01id\0\x07\x00\x01")?;
assert_eq!(schema.decode(&[1], "Ping"), Err(KiwiError::UnexpectedEof { index: 1 }));
assert!(schema.decode(&[0], "Pong").is_err());
```

## Error type: KiwiError

Why a Kiwi schema or message could not be decoded.

```rust
use helpers4::kiwi::KiwiError;

#[non_exhaustive]
pub enum KiwiError {
    /// The data ends in the middle of a value.
    UnexpectedEof {
        /// Byte offset where the read that fell short started.
        index: usize,
    },
    /// A string that is not valid UTF-8, or has no terminating `0`.
    InvalidString {
        /// Byte offset where the string starts.
        index: usize,
    },
    /// A definition whose kind byte is not enum, struct or message.
    UnknownKind {
        /// The kind byte.
        kind: u8,
    },
    /// A field whose type is neither a built-in type nor a definition of the schema.
    UnknownType {
        /// The raw type number.
        type_id: i32,
    },
    /// No definition has the requested name.
    UnknownDefinition {
        /// The name that was asked for.
        name: String,
    },
    /// A message holds a field id its definition does not list.
    UnknownField {
        /// The message definition.
        message: String,
        /// The field id.
        id: u32,
    },
    /// The data nests deeper than the decoder allows (a malformed or hostile schema can recurse
    /// forever).
    TooDeep,
}
```

## Source

[src/kiwi/schema.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/schema.rs#L30)
