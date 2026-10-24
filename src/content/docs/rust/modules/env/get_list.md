---
title: "get_list"
description: "Returns key in dotenv content split on separator into a list, or default when it is absent."
sidebar:
  label: "get_list"
---

Returns `key` in dotenv `content` split on `separator` into a list, or `default` when it is
absent.

Each item is trimmed of surrounding whitespace; empty items (a leading, trailing or doubled
separator) are kept as empty strings rather than dropped, so the item count always matches
the number of separators plus one.

## Import

```rust
use helpers4::env::get_list;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn get_list(content: &str, key: &str, separator: char, default: &[&str]) -> Vec<String>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to read. |
| `key` | `&str` | The variable name to look up. |
| `separator` | `char` | The character that separates items, such as `,`. |
| `default` | `&[&str]` | Returned when `key` is absent. |

## Returns

`Vec<String>` — The items, in order, or `default`.

## Examples

```rust
use helpers4::env::get_list;

let content = "HOSTS=a.example.com, b.example.com,c.example.com\n";
assert_eq!(
    get_list(content, "HOSTS", ',', &["localhost"]),
    vec!["a.example.com", "b.example.com", "c.example.com"]
);
assert_eq!(get_list(content, "MISSING", ',', &["localhost"]), vec!["localhost"]);
```

## Source

[src/env/get_list.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/env/get_list.rs#L38)
