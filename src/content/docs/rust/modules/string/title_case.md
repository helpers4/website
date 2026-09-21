---
title: "title_case"
description: "Capitalizes the first letter of every whitespace-separated word and lowercases the rest."
sidebar:
  label: "title_case"
---

Capitalizes the first letter of every whitespace-separated word and lowercases the rest.

Whitespace is kept as it is. Only whitespace starts a new word, so `it's` becomes `It's` and
`well-known` becomes `Well-known`. Use [`pascal_case`](/rust/modules/string/pascal_case/) to also drop the
separators.

## Import

```rust
use helpers4::string::title_case;
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
pub fn title_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::title_case;

assert_eq!(title_case("the quick brown fox"), "The Quick Brown Fox");
assert_eq!(title_case("HELLO wORLD"), "Hello World");
assert_eq!(title_case("it's"), "It's");
```

## Source

[src/string/title_case.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/title_case.rs#L21)
