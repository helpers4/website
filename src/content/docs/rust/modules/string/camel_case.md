---
title: "camel_case"
description: "Converts s to camelCase."
sidebar:
  label: "camel_case"
---

Converts `s` to `camelCase`.

Words are split on any non-alphanumeric character and on case boundaries; an embedded run
of capitals is an acronym, so only its last letter starts the next word (`userID` becomes
`userId`).

## Import

```rust
use helpers4::string::camel_case;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn camel_case(s: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to convert. |

## Returns

`String`

## Examples

```rust
use helpers4::string::camel_case;

assert_eq!(camel_case("hello-world"), "helloWorld");
assert_eq!(camel_case("user_name"), "userName");
assert_eq!(camel_case("userID"), "userId");
assert_eq!(camel_case(""), "");
```

## Source

[src/string/camel_case.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/string/camel_case.rs#L29)
