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
helpers4 = { version = "0.0.4", default-features = false, features = ["env"] }
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

## Source

[src/env/remove.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/env/remove.rs#L20)
