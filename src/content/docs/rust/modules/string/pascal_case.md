---
title: "pascal_case"
description: "Converts s to PascalCase."
sidebar:
  label: "pascal_case"
---

Converts `s` to `PascalCase`.

Splits words the same way as [`camel_case`](/rust/modules/string/camel_case/).

## Import

```rust
use helpers4::string::pascal_case;
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
pub fn pascal_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::pascal_case;

assert_eq!(pascal_case("hello-world"), "HelloWorld");
assert_eq!(pascal_case("user_name"), "UserName");
assert_eq!(pascal_case(""), "");
```

## Source

[src/string/pascal_case.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/string/pascal_case.rs#L22)
