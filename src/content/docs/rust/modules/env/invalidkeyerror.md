---
title: "InvalidKeyError"
description: "The variable name passed to set is not a valid name ([A-Za-z_][A-Za-z0-9_]*)."
sidebar:
  label: "InvalidKeyError"
---

The variable name passed to [`set`](../set/) is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).

## Import

```rust
use helpers4::env::InvalidKeyError;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["env"] }
```

## Definition

```rust
pub struct InvalidKeyError { /* private fields */ }
```

## Methods

### `key`

```rust
pub fn key(&self) -> &str
```

The rejected name.

**Returns**

`&str`

## More in this module

- [`get`](../get/) — Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.
- [`parse`](../parse/) — Parses dotenv `content` into `(key, value)` pairs, in file order.
- [`remove`](../remove/) — Removes every assignment of `key` from dotenv `content` and returns the new content.
- [`set`](../set/) — Sets `key` to `value` in dotenv `content` and returns the new content.

## Source

[src/env/error.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/env/error.rs#L9)
