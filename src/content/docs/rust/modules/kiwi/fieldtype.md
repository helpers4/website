---
title: "FieldType"
description: "The type of a Field: one of Kiwi's built-in types, or another definition of the schema."
sidebar:
  label: "FieldType"
---

The type of a [`Field`](/rust/modules/kiwi/field/): one of Kiwi's built-in types, or another definition of the schema.

## Import

```rust
use helpers4::kiwi::FieldType;
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
#[non_exhaustive]
pub enum FieldType {
    /// One byte, `0` is false.
    Bool,
    /// An unsigned byte.
    Byte,
    /// A signed 32-bit integer.
    Int,
    /// An unsigned 32-bit integer.
    Uint,
    /// A 32-bit float.
    Float,
    /// A UTF-8 string.
    String,
    /// A signed 64-bit integer.
    Int64,
    /// An unsigned 64-bit integer.
    Uint64,
    /// Another definition, by its index in [`Schema::definitions`](super::Schema::definitions).
    Definition(usize),
}
```

## Examples

```rust
use helpers4::kiwi::FieldType;

assert_eq!(FieldType::Definition(2), FieldType::Definition(2));
```

## Source

[src/kiwi/definition.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/definition.rs#L39)
