---
title: "snake_case"
description: "Converts s to snake_case."
sidebar:
  label: "snake_case"
---

Converts `s` to `snake_case`.

Splits words the same way as [`camel_case`](/rust/modules/string/camel_case/).

## Import

```rust
use helpers4::string::snake_case;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.3", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn snake_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::snake_case;

assert_eq!(snake_case("helloWorld"), "hello_world");
assert_eq!(snake_case("Hello World"), "hello_world");
assert_eq!(snake_case(""), "");
```

## Source

[src/string/snake_case.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/string/snake_case.rs#L21)
