---
title: "get_bool"
description: "Returns key in dotenv content parsed as a boolean, or default when it is absent or not recognized."
sidebar:
  label: "get_bool"
---

Returns `key` in dotenv `content` parsed as a boolean, or `default` when it is absent or not
recognized.

Recognized, case-insensitively: `true`/`false`, `1`/`0`, `yes`/`no`, `on`/`off`.

## Import

```rust
use helpers4::env::get_bool;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn get_bool(content: &str, key: &str, default: bool) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to read. |
| `key` | `&str` | The variable name to look up. |
| `default` | `bool` | Returned when `key` is absent or its value is not one of the recognized words. |

## Returns

`bool` — The parsed boolean, or `default`.

## Examples

```rust
use helpers4::env::get_bool;

let content = "DEBUG=on\nSTRICT=0\n";
assert!(get_bool(content, "DEBUG", false));
assert!(!get_bool(content, "STRICT", true));
assert!(get_bool(content, "MISSING", true));
```

## Source

[src/env/get_bool.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/env/get_bool.rs#L33)
