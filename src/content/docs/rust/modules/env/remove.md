---
title: "remove"
description: "Removes every assignment of key from dotenv content and returns the new content."
sidebar:
  label: "remove"
---

Removes every assignment of `key` from dotenv `content` and returns the new content.

Comments, blank lines and other variables are left untouched. Removing a key that is not
assigned returns the content unchanged.

## Import

```rust
use helpers4::env::remove;
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
pub fn remove(content: &str, key: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `content` | `&str` |
| `key` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::env::remove;

assert_eq!(remove("A=1\nB=2\nA=3\n", "A"), "B=2\n");
```

## More in this module

- [`InvalidKeyError`](../invalidkeyerror/) — The variable name passed to `set` is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).
- [`get`](../get/) — Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.
- [`parse`](../parse/) — Parses dotenv `content` into `(key, value)` pairs, in file order.
- [`set`](../set/) — Sets `key` to `value` in dotenv `content` and returns the new content.

## Source

[src/env/remove.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/env/remove.rs#L20)
