---
title: "Value"
description: "A decoded Kiwi value."
sidebar:
  label: "Value"
---

A decoded Kiwi value. Messages and structs are [`Object`](#object)s that keep the field
order of the data.

The `as_*` accessors return `None` when the value is of another type, so a chain of `get`
and `as_*` reads like a path.

## Import

```rust
use helpers4::kiwi::Value;
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
pub enum Value {
    /// A `bool`.
    Bool(bool),
    /// A `byte`.
    Byte(u8),
    /// An `int`.
    Int(i32),
    /// A `uint`.
    Uint(u32),
    /// A `float`.
    Float(f32),
    /// A `string`.
    String(String),
    /// An `int64`.
    Int64(i64),
    /// A `uint64`.
    Uint64(u64),
    /// A `byte[]`, kept as bytes.
    Bytes(Vec<u8>),
    /// An enum member, by name.
    Enum(Arc<str>),
    /// An enum number the schema does not list.
    UnknownEnum(u32),
    /// A list of values.
    Array(Vec<Value>),
    /// A struct or message: its fields by name, in data order.
    Object(Vec<(Arc<str>, Value)>),
}
```

## Examples

```rust
use helpers4::kiwi::Value;

let node = Value::Object(vec![
    ("name".into(), Value::String("Frame 1".to_string())),
    ("size".into(), Value::Float(10.0)),
]);
assert_eq!(node.get("name").and_then(Value::as_str), Some("Frame 1"));
assert_eq!(node.get("size").and_then(Value::as_f32), Some(10.0));
assert_eq!(node.get("missing"), None);
```

## Methods

### `get`

```rust
pub fn get(&self, name: &str) -> Option<&Self>
```

A field of an object.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `&str` | The field name. |

**Returns**

`Option<&Self>` — The field, or `None` when this is not an object or has no such field (a message omits its
absent fields).

### `as_str`

```rust
pub fn as_str(&self) -> Option<&str>
```

The text of a string or of an enum member name.

**Returns**

`Option<&str>` — The text, or `None` for any other value.

### `as_bool`

```rust
pub fn as_bool(&self) -> Option<bool>
```

The value of a `bool`.

**Returns**

`Option<bool>` — The boolean, or `None` for any other value.

### `as_i32`

```rust
pub fn as_i32(&self) -> Option<i32>
```

The value of an `int`.

**Returns**

`Option<i32>` — The integer, or `None` for any other value.

### `as_u32`

```rust
pub fn as_u32(&self) -> Option<u32>
```

The value of a `uint`.

**Returns**

`Option<u32>` — The integer, or `None` for any other value.

### `as_i64`

```rust
pub fn as_i64(&self) -> Option<i64>
```

The value of an `int64`.

**Returns**

`Option<i64>` — The integer, or `None` for any other value.

### `as_u64`

```rust
pub fn as_u64(&self) -> Option<u64>
```

The value of a `uint64`.

**Returns**

`Option<u64>` — The integer, or `None` for any other value.

### `as_f32`

```rust
pub fn as_f32(&self) -> Option<f32>
```

The value of a `float`.

**Returns**

`Option<f32>` — The float, or `None` for any other value.

### `as_bytes`

```rust
pub fn as_bytes(&self) -> Option<&[u8]>
```

The bytes of a `byte[]`.

**Returns**

`Option<&[u8]>` — The bytes, or `None` for any other value.

### `as_array`

```rust
pub fn as_array(&self) -> &[Self]
```

The items of an array.

**Returns**

`&[Self]` — The items, or an empty slice for any other value, so a missing list reads as an empty one.

## Source

[src/kiwi/value.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/kiwi/value.rs#L28)
