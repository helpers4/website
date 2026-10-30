---
title: "Kind"
description: "What a Definition is: an enum, a struct (all its fields, in order) or a message (any of its fields, each with an id, ended by a 0)."
sidebar:
  label: "Kind"
---

What a [`Definition`](/rust/modules/kiwi/definition/) is: an enum, a struct (all its fields, in order) or a message (any of
its fields, each with an id, ended by a `0`).

## Import

```rust
use helpers4::kiwi::Kind;
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
pub enum Kind {
    /// A set of named numbers.
    Enum,
    /// A fixed list of fields, always all present.
    Struct,
    /// A list of optional fields, each written with its id.
    Message,
}
```

## Examples

```rust
use helpers4::kiwi::Kind;

assert_ne!(Kind::Enum, Kind::Message);
```

## Source

[src/kiwi/definition.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/definition.rs#L19)
