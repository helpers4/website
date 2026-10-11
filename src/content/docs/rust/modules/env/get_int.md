---
title: "get_int"
description: "Returns key in dotenv content parsed as an integer, or default when it is absent or not a valid i64 (a decimal integer, optionally signed; no underscores, no 0x/0b prefixes)."
sidebar:
  label: "get_int"
---

Returns `key` in dotenv `content` parsed as an integer, or `default` when it is absent or not
a valid `i64` (a decimal integer, optionally signed; no underscores, no `0x`/`0b` prefixes).

## Import

```rust
use helpers4::env::get_int;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.7", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn get_int(content: &str, key: &str, default: i64) -> i64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to read. |
| `key` | `&str` | The variable name to look up. |
| `default` | `i64` | Returned when `key` is absent or its value does not parse. |

## Returns

`i64` — The parsed integer, or `default`.

## Examples

```rust
use helpers4::env::get_int;

let content = "PORT=8080\nOFFSET=-3\nNAME=not-a-number\n";
assert_eq!(get_int(content, "PORT", 80), 8080);
assert_eq!(get_int(content, "OFFSET", 0), -3);
assert_eq!(get_int(content, "NAME", 0), 0);
assert_eq!(get_int(content, "MISSING", 80), 80);
```

## Source

[src/env/get_int.rs](https://github.com/helpers4/rust/blob/v0.0.7/src/env/get_int.rs#L32)
