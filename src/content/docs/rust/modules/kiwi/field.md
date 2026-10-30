---
title: "Field"
description: "One field of a Definition."
sidebar:
  label: "Field"
---

One field of a [`Definition`](/rust/modules/kiwi/definition/). On an enum, a field is a member: only its name and `value`
matter.

## Import

```rust
use helpers4::kiwi::Field;
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
pub struct Field { /* private fields */ }
```

## Examples

```rust
use helpers4::kiwi::{Field, FieldType};

let field = Field { name: "id".into(), field_type: Some(FieldType::Uint), is_array: false, value: 1 };
assert_eq!(&*field.name, "id");
```

## Source

[src/kiwi/definition.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/definition.rs#L72)
