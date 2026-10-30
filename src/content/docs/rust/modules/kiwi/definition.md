---
title: "Definition"
description: "A named enum, struct or message of a Kiwi schema."
sidebar:
  label: "Definition"
---

A named enum, struct or message of a Kiwi schema.

## Import

```rust
use helpers4::kiwi::Definition;
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
pub struct Definition { /* private fields */ }
```

## Examples

```rust
use helpers4::kiwi::{Definition, Kind};

let empty = Definition { name: "Empty".into(), kind: Kind::Message, fields: vec![] };
assert_eq!(&*empty.name, "Empty");
```

## Source

[src/kiwi/definition.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/definition.rs#L94)
