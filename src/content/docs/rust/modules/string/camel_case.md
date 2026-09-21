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
helpers4 = { version = "0.0.2", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn camel_case(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

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

## More in this module

- [`capitalize`](../capitalize/) — Uppercases the first character of `s` and leaves the rest untouched.
- [`dedent`](../dedent/) — Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line.
- [`escape_html`](../escape_html/) — Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`slugify`](../slugify/) — Converts `s` into a lowercase, hyphen-separated slug safe for URLs.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.
- [`truncate`](../truncate/) — Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

## Source

[src/string/camel_case.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/camel_case.rs#L25)
