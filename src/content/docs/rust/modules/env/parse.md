---
title: "parse"
description: "Parses dotenv content into (key, value) pairs, in file order."
sidebar:
  label: "parse"
---

Parses dotenv `content` into `(key, value)` pairs, in file order.

Blank lines, `#` comments and lines that are not valid `KEY=value` assignments are skipped.
Supported: an optional `export ` prefix, bare values (a `#` after whitespace starts a
comment), `"double quoted"` values with `\n \r \t \" \\` escapes and `'single quoted'`
literals. Values are single-line. A key assigned twice appears twice.

## Import

```rust
use helpers4::env::parse;
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
pub fn parse(content: &str) -> Vec<(String, String)>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `content` | `&str` |

## Returns

`Vec<(String, String)>`

## Examples

```rust
use helpers4::env::parse;

let vars = parse("# comment\nHOST=localhost\nexport NAME=\"my app\"  # trailing\n");
assert_eq!(
    vars,
    vec![
        ("HOST".to_string(), "localhost".to_string()),
        ("NAME".to_string(), "my app".to_string()),
    ]
);
```

## More in this module

- [`InvalidKeyError`](../invalidkeyerror/) — The variable name passed to `set` is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).
- [`get`](../get/) — Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.
- [`remove`](../remove/) — Removes every assignment of `key` from dotenv `content` and returns the new content.
- [`set`](../set/) — Sets `key` to `value` in dotenv `content` and returns the new content.

## Source

[src/env/parse.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/env/parse.rs#L28)
