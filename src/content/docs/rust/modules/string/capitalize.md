---
title: "capitalize"
description: "Uppercases the first character of s and leaves the rest untouched."
sidebar:
  label: "capitalize"
---

Uppercases the first character of `s` and leaves the rest untouched.

Unicode-aware: a character whose uppercase form is several characters
(`ß` -> `SS`) is expanded accordingly.

## Import

```rust
use helpers4::string::capitalize;
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
pub fn capitalize(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::capitalize;

assert_eq!(capitalize("hello world"), "Hello world");
assert_eq!(capitalize(""), "");
```

## More in this module

- [`camel_case`](../camel_case/) — Converts `s` to `camelCase`.
- [`dedent`](../dedent/) — Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line.
- [`escape_html`](../escape_html/) — Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`slugify`](../slugify/) — Converts `s` into a lowercase, hyphen-separated slug safe for URLs.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.
- [`truncate`](../truncate/) — Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

## Source

[src/string/capitalize.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/capitalize.rs#L19)
