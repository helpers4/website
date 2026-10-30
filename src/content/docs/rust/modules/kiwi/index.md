---
title: "kiwi"
description: "Decoding of the [Kiwi](https://github.com/evanw/kiwi) binary format, Evan Wallace's schema-based serialization (used by Figma's .fig files, but generic)."
sidebar:
  label: "≡ Overview"
  order: 0
---

Decoding of the [Kiwi](https://github.com/evanw/kiwi) binary format, Evan Wallace's
schema-based serialization (used by Figma's `.fig` files, but generic).

A Kiwi message is meaningless without its schema. [`Schema::parse`](/rust/modules/env/parse/) reads a *binary* schema
(the compiled form Kiwi writes, which `.fig` files embed), then [`Schema::decode`](/rust/modules/hex/decode/) decodes a
message against one of its definitions into a dynamic [`Value`](/rust/modules/kiwi/value/) tree: objects, arrays, enums
by name and the usual scalars. Every failure on truncated or invalid data is a precise
[`KiwiError`](/rust/modules/kiwi/schema/#error-type-kiwierror).

Built on [`bytes::ByteReader`](/rust/modules/bytes/bytereader/), plus Kiwi's own 64-bit varints and
floats, which are not LEB128 and IEEE 754 on the wire.

## Install

Cargo feature `kiwi` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features kiwi
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["kiwi"] }
```

Import path: `helpers4::kiwi`.

## Items

| Item | What it does |
| --- | --- |
| [`Definition`](/rust/modules/kiwi/definition/) | A named enum, struct or message of a Kiwi schema. |
| [`Field`](/rust/modules/kiwi/field/) | One field of a `Definition`. |
| [`FieldType`](/rust/modules/kiwi/fieldtype/) | The type of a `Field`: one of Kiwi's built-in types, or another definition of the schema. |
| [`Kind`](/rust/modules/kiwi/kind/) | What a `Definition` is: an enum, a struct (all its fields, in order) or a message (any of its fields, each with an id, ended by a `0`). |
| [`Schema`](/rust/modules/kiwi/schema/) | A Kiwi schema: the definitions (enums, structs and messages) that give meaning to the bytes of a message. |
| [`Value`](/rust/modules/kiwi/value/) | A decoded Kiwi value. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`KiwiError`](/rust/modules/kiwi/schema/#error-type-kiwierror) | [`Schema`](/rust/modules/kiwi/schema/) |
