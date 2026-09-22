---
title: "get"
description: "Returns the value of key in dotenv content, or None when it is not assigned."
sidebar:
  label: "get"
---

Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.

When a key is assigned more than once the last assignment wins, like a shell sourcing the
file. See [`parse`](/rust/modules/env/parse/) for the accepted syntax.

## Import

```rust
use helpers4::env::get;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn get(content: &str, key: &str) -> Option<String>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to read. |
| `key` | `&str` | The variable name to look up. |

## Returns

`Option<String>`

## Examples

```rust
use helpers4::env::get;

let content = "HOST=localhost\nPORT=80\nPORT=8080\n";
assert_eq!(get(content, "PORT").as_deref(), Some("8080"));
assert_eq!(get(content, "MISSING"), None);
```

## Source

[src/env/get.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/env/get.rs#L26)
