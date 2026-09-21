---
title: "kebab_case"
description: "Converts s to kebab-case."
sidebar:
  label: "kebab_case"
---

Converts `s` to `kebab-case`.

Splits words the same way as [`camel_case`](/rust/modules/string/camel_case/).

## Import

```rust
use helpers4::string::kebab_case;
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
pub fn kebab_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::kebab_case;

assert_eq!(kebab_case("helloWorld"), "hello-world");
assert_eq!(kebab_case("user_name"), "user-name");
assert_eq!(kebab_case(""), "");
```

## Source

[src/string/kebab_case.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/kebab_case.rs#L21)
