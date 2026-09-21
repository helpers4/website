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
and escaped only when needed, so [`get`](../get/) reads it back exactly.

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
helpers4 = { version = "0.0.2", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn set(content: &str, key: &str, value: &str) -> Result<String, InvalidKeyError>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `content` | `&str` |
| `key` | `&str` |
| `value` | `&str` |

## Returns

`Result<String, InvalidKeyError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns [`InvalidKeyError`](../invalidkeyerror/) when `key` is not `[A-Za-z_][A-Za-z0-9_]*`.

## Examples

```rust
use helpers4::env::set;

let updated = set("# config\nHOST=old\nPORT=80\n", "HOST", "example.com")?;
assert_eq!(updated, "# config\nHOST=example.com\nPORT=80\n");

assert_eq!(set("A=1\n", "B", "two words")?, "A=1\nB=\"two words\"\n");
```

## More in this module

- [`InvalidKeyError`](../invalidkeyerror/) — The variable name passed to `set` is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).
- [`get`](../get/) — Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.
- [`parse`](../parse/) — Parses dotenv `content` into `(key, value)` pairs, in file order.
- [`remove`](../remove/) — Removes every assignment of `key` from dotenv `content` and returns the new content.

## Source

[src/env/set.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/env/set.rs#L30)
