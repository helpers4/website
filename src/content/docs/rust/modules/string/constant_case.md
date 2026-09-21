---
title: "constant_case"
description: "Converts s to CONSTANT_CASE (also known as SCREAMING_SNAKE_CASE)."
sidebar:
  label: "constant_case"
---

Converts `s` to `CONSTANT_CASE` (also known as `SCREAMING_SNAKE_CASE`).

Splits words the same way as [`camel_case`](/rust/modules/string/camel_case/).

## Import

```rust
use helpers4::string::constant_case;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn constant_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::constant_case;

assert_eq!(constant_case("helloWorld"), "HELLO_WORLD");
assert_eq!(constant_case("max retries"), "MAX_RETRIES");
assert_eq!(constant_case(""), "");
```

## Source

[src/string/constant_case.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/constant_case.rs#L21)
