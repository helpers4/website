---
title: "set"
description: "Sets key to value in dotenv content and returns the new content."
sidebar:
  label: "set"
---

Sets `key` to `value` in dotenv `content` and returns the new content.

The first existing assignment of `key` is replaced in place and any later ones are dropped;
when there is none, a new line is appended. Every other line (comments, blank lines, other
variables) is left untouched, and the replaced line keeps its line ending. `value` is quoted
and escaped only when needed, so [`get`](/rust/modules/env/get/) reads it back exactly.

## Import

```rust
use helpers4::env::set;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn set(content: &str, key: &str, value: &str) -> Result<String, InvalidKeyError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to edit. |
| `key` | `&str` | The variable name to set. |
| `value` | `&str` | The value to assign to `key`. |

## Returns

`Result<String, InvalidKeyError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns [`InvalidKeyError`](#error-type-invalidkeyerror) when `key` is not `[A-Za-z_][A-Za-z0-9_]*`.

## Examples

```rust
use helpers4::env::set;

let updated = set("# config\nHOST=old\nPORT=80\n", "HOST", "example.com")?;
assert_eq!(updated, "# config\nHOST=example.com\nPORT=80\n");

assert_eq!(set("A=1\n", "B", "two words")?, "A=1\nB=\"two words\"\n");
```

## Error type: InvalidKeyError

The variable name passed to [`set`](/rust/modules/env/set/) is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).

```rust
use helpers4::env::InvalidKeyError;

pub struct InvalidKeyError { /* private fields */ }
```

### `InvalidKeyError::key`

```rust
pub fn key(&self) -> &str
```

The rejected name.

**Returns**

`&str` — The rejected variable name.

## Source

[src/env/set.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/env/set.rs#L36)
